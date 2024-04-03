import { existsSync } from 'fs';

export const isDotEnvExists = (envFilePath: string) => {
    return existsSync(envFilePath);
};