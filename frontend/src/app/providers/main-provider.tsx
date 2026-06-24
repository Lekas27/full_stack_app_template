import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";

import { router } from "@/app/router";
import { AuthProvider, useAuth } from "@/entities/auth/model/context";

const queryClient = new QueryClient();

const InnerProvider = () => {
  const { isAuthenticated } = useAuth();
  return <RouterProvider router={router} context={{ isAuthenticated }} />;
};

export const MainProvider = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <InnerProvider />
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};
