import { useMutation, type UseMutationResult } from "@tanstack/react-query";

import { authService } from "@/entities/auth/model/services";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "@/entities/auth/model/types/types";
import type { ApiErrorResponseRecord } from "@/shared/api/types/errors";
import type { MutationOptionsRecord } from "@/shared/queries/queries";

const { login, register } = authService;

export const useLoginQuery = (
  options?: MutationOptionsRecord<
    AuthResponse,
    ApiErrorResponseRecord,
    LoginRequest
  >,
): UseMutationResult<AuthResponse, ApiErrorResponseRecord, LoginRequest> =>
  useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    ...options,
  });

export const useRegisterQuery = (
  options?: MutationOptionsRecord<
    AuthResponse,
    ApiErrorResponseRecord,
    RegisterRequest
  >,
): UseMutationResult<AuthResponse, ApiErrorResponseRecord, RegisterRequest> =>
  useMutation({
    mutationFn: (data: RegisterRequest) => register(data),
    ...options,
  });
