import { createFileRoute } from "@tanstack/react-router";

import { LoginPage } from "@/pages/login/ui/login";

export const Route = createFileRoute("/__public/login")({
  component: () => <LoginPage />,
});
