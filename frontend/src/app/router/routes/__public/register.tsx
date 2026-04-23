import { createFileRoute } from "@tanstack/react-router";

import { RegisterPage } from "@/pages/register/ui/register";

export const Route = createFileRoute("/__public/register")({
  component: () => <RegisterPage />,
});
