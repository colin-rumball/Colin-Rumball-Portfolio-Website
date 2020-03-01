import Theme from "../definitions/Theme";
import DefaultThemeComponents from "./DefaultThemeComponents";
import Variables from "../definitions/Variables";

const DefaultTheme = (baseTheme: Theme): Theme => {
   const VARIABLES: Variables = {
      ...baseTheme.VARIABLES,
      COLORS: {
         ...baseTheme.VARIABLES.COLORS,
         PRIMARY: {
            BASE: "#06D88B",
            LIGHT: "#1cc949",
            DARK: "#00AB96"
         },
         SECONDARY: {
            BASE: "#fff"
         }
      }
   };

   return {
      ...baseTheme,
      VARIABLES,
      COMPONENTS: DefaultThemeComponents(VARIABLES)
   };
};

export default DefaultTheme;
