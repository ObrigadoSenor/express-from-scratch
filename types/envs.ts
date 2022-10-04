type EnvType = 'SERVER_PORT' | 'NODE_ENV';

export type EnvsType = NodeJS.ProcessEnv & {
  [key in EnvType]: string;
};
