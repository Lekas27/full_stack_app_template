type EnvConfig = {
  BACKEND_URL: string;
};

export const ENV_CONFIG: EnvConfig = {
  BACKEND_URL: import.meta.env.VITE_BACKEND_URL,
};
