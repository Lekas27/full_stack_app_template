export type User = {
  id: number;
  email: string;
  full_name: string;
};

export type AuthResponse = {
  access_token: string;
  token_type: string;
  refresh_token: string | null;
  user: User;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  full_name: string;
};
