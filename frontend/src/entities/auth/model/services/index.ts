import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "@/entities/auth/model/types/types";
import { callApi } from "@/shared/api";

export type AuthServiceType = {
  login: (data: LoginRequest) => Promise<AuthResponse>;
  register: (data: RegisterRequest) => Promise<AuthResponse>;
};

class AuthService implements AuthServiceType {
  async login(data: LoginRequest): Promise<AuthResponse> {
    return callApi({
      method: "POST",
      url: "/api/user/auth/login",
      data,
    });
  }

  async register(data: RegisterRequest): Promise<AuthResponse> {
    return callApi({
      method: "POST",
      url: "/api/user/auth/register",
      data,
    });
  }
}

export const authService = new AuthService();
