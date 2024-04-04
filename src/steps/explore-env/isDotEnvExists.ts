import { existsSync } from 'fs';

export const isDotEnvExists = (envFilePath: string): boolean => {
  return existsSync(envFilePath);
};
