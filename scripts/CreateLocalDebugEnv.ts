import { STAGE } from "./scriptUtils/Constants";
import CreateEnvFile from "./scriptUtils/CreateEnvFile";

(async () => {
   await CreateEnvFile(STAGE.DEVELOPMENT, { debug: true });
})();
