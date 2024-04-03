import { readConfigFile } from "./src/read-config-file";
import { isDotEnvExists } from "./src/steps/explore-env";
import { generateEnvFile } from "./src/steps/file-not-exists";
import { join } from 'path';

const envFilePath = join(process.cwd(), '.env');

const main = async () => {
    const configFile = readConfigFile();
    console.log({configFile})
    const isDotEnvInRoot = isDotEnvExists(envFilePath);
    if(isDotEnvInRoot){
        console.log({ isDotEnvInRoot })
    }else{
        await generateEnvFile(envFilePath, configFile)
    }
}

main().then()