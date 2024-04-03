import { existsSync } from 'fs';
import { join } from 'path';

export const isDotEnvExists = () => {
    const envFilePath = join(process.cwd(), '.env');
    return existsSync(envFilePath);
};