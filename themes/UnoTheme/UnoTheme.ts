import Theme from "../definitions/Theme";
import BaseTheme from "../BaseTheme/BaseTheme";
import Variables from "../definitions/Variables";
import LegoThemeComponents from "./UnoThemeComponents";

const UnoTheme = (baseTheme: Theme): Theme => {
   const VARIABLES: Variables = {
      ...baseTheme.VARIABLES,
      COLORS: {
         ...BaseTheme.VARIABLES.COLORS,
         PRIMARY: {
            BASE: "#F9D800"
         },
         SECONDARY: {
            BASE: "#DE4300"
         }
      }
   };

   return {
      ...baseTheme,
      VARIABLES,
      COMPONENTS: LegoThemeComponents(VARIABLES)
   };
};

export default UnoTheme;
