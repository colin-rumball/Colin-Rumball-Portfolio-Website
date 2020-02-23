import { argv } from "yargs";
import { ShowEnvPrompt } from "./scriptUtils/ShowPrompt";
import { STAGE } from "./scriptUtils/Constants";
import ConvertToStage from "./scriptUtils/ConvertToStage";
import CreateEnvFile from "./scriptUtils/CreateEnvFile";

const scriptCode = async () => {
   let targetStage: STAGE = STAGE.NONE;
   if (argv.target) {
      targetStage = ConvertToStage(argv.target as string);
      if (targetStage !== STAGE.NONE) {
         await CreateEnvFile(targetStage, { debug: !!argv.debug });
      } else {
         console.log(`Aborting CreateEnv.ts`);
         throw new Error(
            `Valid targets for CreateEnv.ts are ${STAGE.DEVELOPMENT}, ${STAGE.PRODUCTION} or ${STAGE.TEST}.`
         );
      }
   } else {
      targetStage = await ShowEnvPrompt();
      const debug: boolean = argv && (argv.debug as boolean);
      await CreateEnvFile(targetStage, { debug });
   }
};

scriptCode();
