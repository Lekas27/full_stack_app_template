import { useLogin } from "@/features/auth/login/model/hooks/use-login";
import { InputFormField } from "@/shared/components/form/fields/input";
import { Button } from "@/shared/components/ui/button";

export const LoginFeature = () => {
  const { form, onSubmit, isLoggingIn } = useLogin();
  const { control } = form;

  return (
    <form onSubmit={onSubmit}>
      <InputFormField
        control={control}
        label="Email"
        name="email"
        type="text"
      />
      <InputFormField
        control={control}
        label="Password"
        name="password"
        type="password"
        showPasswordToggle
      />
      <Button type="submit" loading={isLoggingIn}>
        Login
      </Button>
    </form>
  );
};
