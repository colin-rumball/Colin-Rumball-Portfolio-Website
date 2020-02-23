import { copyFileSync, writeFileSync, readFileSync } from "fs";
import * as path from "path";
import { STAGE } from "./Constants";
import { fLog, fInfo } from "./FancyLog";

const pathToConfig = path.join(__dirname, "..", "..", "config");
const pathToProjectEnv = path.join(__dirname, "..", "..", ".env");

const moveEnvFileFromConfig = async (filename: string) => {
   copyFileSync(path.join(pathToConfig, filename), pathToProjectEnv);
   fLog(`${filename} moved to root .env file`);
};

interface CEFOptions {
   debug: boolean;
}

const CreateEnvFile = async (target: STAGE, options: CEFOptions) => {
   fInfo(`Creating ${target} .env file.`);
   switch (target) {
      case STAGE.DEVELOPMENT:
         await moveEnvFileFromConfig(".env.development");
         break;
      case STAGE.PRODUCTION:
         await moveEnvFileFromConfig(".env.production");
         break;
      case STAGE.TEST:
         await moveEnvFileFromConfig(".env.test");
         break;
   }

   if (options.debug) {
      let envVars = readFileSync(pathToProjectEnv, { encoding: "utf8" });

      if (options.debug) {
         fLog("Adding PD_LOCAL_DEVELOPMENT env variable to .env.");
         envVars += "\nPD_LOCAL_DEVELOPMENT=true";
      }
      writeFileSync(pathToProjectEnv, envVars);
   }
};

export default CreateEnvFile;
