import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";

import { router } from "@/app/router";
import { RouteSecurityProvider } from "@/app/router/providers/router-provider";
import { AuthProvider, useAuth } from "@/entities/auth/model/context";

const queryClient = new QueryClient();

export const MainProvider = () => {
  const { isAuthenticated } = useAuth();
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouteSecurityProvider>
            <RouterProvider router={router} context={{ isAuthenticated }} />
          </RouteSecurityProvider>
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};
