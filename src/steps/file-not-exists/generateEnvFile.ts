import { Config } from "../../read-config-file";
import { getValuesForKeys } from "./prompt";
import { writeFile } from 'fs';

export const generateEnvFile = async (filePath: string, configFile: Config) => {
    const valuesToKeys = await getValuesForKeys(configFile);
    const content = Object.entries(valuesToKeys)
    .map(([key, value]) => value ? `${key}=${value}` : false)
    .filter(Boolean)
    .join('\n');

  writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Error writing .env file', err);
    } else {
      console.log('.env file created successfully');
    }
  })

};