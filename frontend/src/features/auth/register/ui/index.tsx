import { useRegister } from "@/features/auth/register/model/hooks/use-register";
import { InputFormField } from "@/shared/components/form/fields/input";
import { Button } from "@/shared/components/ui/button";

export const RegisterFeature = () => {
  const { form, onSubmit, isRegistering } = useRegister();
  const { control } = form;

  return (
    <form onSubmit={onSubmit}>
      <InputFormField
        control={control}
        label="Full Name"
        name="full_name"
        type="text"
      />
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
      <Button type="submit" loading={isRegistering}>
        Register
      </Button>
    </form>
  );
};
