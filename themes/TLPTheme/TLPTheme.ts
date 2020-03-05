import Theme from "../definitions/Theme";
import BaseTheme from "../BaseTheme/BaseTheme";
import Variables from "../definitions/Variables";
import TLPThemeComponents from "./TLPThemeComponents";

const TLPTheme = (baseTheme: Theme): Theme => {
   const VARIABLES: Variables = {
      ...baseTheme.VARIABLES,
      COLORS: {
         ...BaseTheme.VARIABLES.COLORS,
         PRIMARY: {
            BASE: "#e8d8b6",
            LIGHT: "#FFFDE8",
            WHITE: "#fffef5"
         },
         SECONDARY: {
            BASE: "#1F324C",
            LIGHT: "#27405e",
            DARK: "#0B1928"
         }
      }
   };

   return {
      ...baseTheme,
      VARIABLES,
      COMPONENTS: TLPThemeComponents(VARIABLES)
   };
};

export default TLPTheme;
