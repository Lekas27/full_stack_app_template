import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useForm } from "react-hook-form";

import { registerSchema } from "@/features/auth/register/model/schemas";
import type { RegisterTransformedFormRecord } from "@/features/auth/register/model/schemas";
import type { RegisterFormRecord } from "@/features/auth/register/model/types";
import { registerDefaultValues } from "@/features/auth/register/model/utils/default-values";
import { parseRegisterDataForApi } from "@/features/auth/register/model/utils/parse";
import { useAuth } from "@/entities/auth/model/context";

export const useRegister = () => {
  const { register, isRegistering, registerError } = useAuth();

  const form = useForm<RegisterFormRecord, void, RegisterTransformedFormRecord>({
    defaultValues: registerDefaultValues,
    resolver: standardSchemaResolver(registerSchema),
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit((data) => {
    const parsed = parseRegisterDataForApi(data);
    register(parsed);
  });

  return { form, onSubmit, isRegistering, registerError };
};
