import colors from "colors";

const fInfo = info => {
   console.info(colors.cyan(`>>\t${info}`));
};

const fLog = message => {
   console.log(colors.green(`>\t${message}`));
};

export { fInfo, fLog };
