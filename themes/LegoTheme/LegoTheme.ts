import Theme from "../definitions/Theme";
import BaseTheme from "../BaseTheme/BaseTheme";
import Variables from "../definitions/Variables";
import LegoThemeComponents from "./LegoThemeComponents";

const LegoTheme = (baseTheme: Theme): Theme => {
   const VARIABLES: Variables = {
      ...baseTheme.VARIABLES,
      COLORS: {
         ...BaseTheme.VARIABLES.COLORS,
         PRIMARY: {
            BASE: "#F0B817",
            LIGHT: "#FFF174"
         },
         SECONDARY: {
            BASE: "#513479"
         }
      }
   };

   return {
      ...baseTheme,
      VARIABLES,
      COMPONENTS: LegoThemeComponents(VARIABLES)
   };
};

export default LegoTheme;
