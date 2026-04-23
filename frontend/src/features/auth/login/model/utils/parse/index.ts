import type { LoginRequest } from "@/entities/auth/model/types/types";
import type { LoginTransformedFormRecord } from "@/features/auth/login/model/schemas";

export const parseLoginDataForApi = (
  data: LoginTransformedFormRecord,
): LoginRequest => {
  const { email, password } = data;
  return {
    email: email,
    password: password,
  };
};
