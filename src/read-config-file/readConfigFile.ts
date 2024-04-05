import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { type Config } from './types';

export const readConfigFile = (): Config => {
  const configFileName = 'envprompter.config.json';
  const configFilePath = join(process.cwd(), configFileName);

  if (!existsSync(configFilePath)) {
    console.error(`Configuration file not found at ${configFilePath}`);
    process.exit(1);
  }

  const fileContents = readFileSync(configFilePath, 'utf8');
  const config = JSON.parse(fileContents) as Config;
  return config;
};
