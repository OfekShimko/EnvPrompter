import  { readFileSync, existsSync } from 'fs'
import { join } from 'path';

export const readConfigFile = () => {
  const configFileName = 'envprompter.config.json';
  const configFilePath = join(process.cwd(), configFileName);
  if (!existsSync(configFilePath)) throw new Error(`Configuration file not found at ${configFilePath}`);
    
  const fileContents = readFileSync(configFilePath, 'utf8');
  const config = JSON.parse(fileContents);
  return config;
  
};
