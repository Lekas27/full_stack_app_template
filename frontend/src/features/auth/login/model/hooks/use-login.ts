import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useForm } from "react-hook-form";

import { loginSchema } from "@/features/auth/login/model/schemas";
import type { LoginTransformedFormRecord } from "@/features/auth/login/model/schemas";
import type { LoginFormRecord } from "@/features/auth/login/model/types";
import { loginDefaultValues } from "@/features/auth/login/model/utils/default-values";
import { parseLoginDataForApi } from "@/features/auth/login/model/utils/parse";
import { useAuth } from "@/entities/auth/model/context";

export const useLogin = () => {
  const { login, isLoggingIn, loginError } = useAuth();

  const form = useForm<LoginFormRecord, void, LoginTransformedFormRecord>({
    defaultValues: loginDefaultValues,
    resolver: standardSchemaResolver(loginSchema),
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit((data) => {
    const parsed = parseLoginDataForApi(data);
    login(parsed);
  });

  return { form, onSubmit, isLoggingIn, loginError };
};
