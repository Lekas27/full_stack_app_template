import { z } from "zod";

export const registerSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  full_name: z.string().min(1, "Full name is required"),
});

export type RegisterTransformedFormRecord = z.infer<typeof registerSchema>;
