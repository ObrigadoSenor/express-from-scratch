import { EnvsType } from './../types/envs';
import express from 'express';
import routes from './routes';

import dotenv from 'dotenv';

export const App = () => {
  const server = express();
  const envs = getEnvVars();

  server.use(express.json());
  server.use(routes);

  return { server, ...envs };
};

const getEnvVars = () => {
  const path = `.env.${process.env.NODE_ENV}`;
  dotenv.config({ path });
  return { ...(process.env as EnvsType) };
};
