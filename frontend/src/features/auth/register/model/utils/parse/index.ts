import type { RegisterRequest } from "@/entities/auth/model/types/types";
import type { RegisterTransformedFormRecord } from "@/features/auth/register/model/schemas";

export const parseRegisterDataForApi = (
  data: RegisterTransformedFormRecord,
): RegisterRequest => {
  return {
    email: data.email,
    password: data.password,
    full_name: data.full_name,
  };
};
