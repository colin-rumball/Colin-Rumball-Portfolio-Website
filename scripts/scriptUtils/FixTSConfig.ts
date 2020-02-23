import { readFileSync, writeFileSync } from "fs";
import * as path from "path";
import { fLog } from "./FancyLog";

const pathToTSConfig = path.join(__dirname, "..", "..", "tsconfig.json");
const targetModule = "commonjs";

const FixTSConfig = async () => {
   const tsConfig = JSON.parse(readFileSync(pathToTSConfig, { encoding: "utf8" }));

   if (tsConfig.compilerOptions.module !== targetModule) {
      tsConfig.compilerOptions.module = targetModule;
      writeFileSync(pathToTSConfig, JSON.stringify(tsConfig));
      fLog("Fixed ./tsconfig.json");
   }
};

export default FixTSConfig;
