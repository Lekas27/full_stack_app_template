import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { useLoginQuery, useRegisterQuery } from "@/entities/auth/model/queries";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
} from "@/entities/auth/model/types/types";
import type { ApiErrorResponseRecord } from "@/shared/api/types/errors";

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (data: LoginRequest) => void;
  isLoggingIn: boolean;
  loginError: ApiErrorResponseRecord | null;
  register: (data: RegisterRequest) => void;
  isRegistering: boolean;
  registerError: ApiErrorResponseRecord | null;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const getStoredUser = (): User | null => {
  const raw = localStorage.getItem("user");
  return raw ? JSON.parse(raw) : null;
};

const getStoredToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

const handleAuthSuccess = (data: AuthResponse) => {
  localStorage.setItem("accessToken", data.access_token);
  if (data.refresh_token) {
    localStorage.setItem("refreshToken", data.refresh_token);
  }
  localStorage.setItem("user", JSON.stringify(data.user));
};

const clearAuthStorage = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(getStoredUser);

  const isAuthenticated = !!user && !!getStoredToken();

  const loginMutation = useLoginQuery({
    onSuccess: (data) => {
      handleAuthSuccess(data);
      setUser(data.user);
    },
  });

  const registerMutation = useRegisterQuery({
    onSuccess: (data) => {
      handleAuthSuccess(data);
      setUser(data.user);
    },
  });

  const login = useCallback(
    (data: LoginRequest) => loginMutation.mutate(data),
    [loginMutation],
  );

  const register = useCallback(
    (data: RegisterRequest) => registerMutation.mutate(data),
    [registerMutation],
  );

  const logout = useCallback(() => {
    clearAuthStorage();
    setUser(null);
  }, []);

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      isAuthenticated,
      login,
      isLoggingIn: loginMutation.isPending,
      loginError: loginMutation.error ?? null,
      register,
      isRegistering: registerMutation.isPending,
      registerError: registerMutation.error ?? null,
      logout,
    }),
    [
      user,
      isAuthenticated,
      login,
      loginMutation,
      register,
      registerMutation,
      logout,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
