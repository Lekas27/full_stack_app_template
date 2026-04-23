import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__authorize/profile")({
  component: () => <div></div>,
});
