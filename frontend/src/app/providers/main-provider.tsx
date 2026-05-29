import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";

import { router } from "@/app/router";
import { AuthProvider, useAuth } from "@/entities/auth/model/context";

const queryClient = new QueryClient();

export const MainProvider = () => {
  const { isAuthenticated } = useAuth();
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <RouterProvider router={router} context={{ isAuthenticated }} />
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};
