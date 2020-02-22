import React, { useState, useContext, useMemo } from "react";
import DefaultTheme from "../themes/DefaultTheme/DefaultTheme";
import TLPTheme from "../themes/TLPTheme/TLPTheme";
import { ThemeProvider } from "styled-components";

export enum ThemeEnum {
   DEFAULT,
   TLP
}

const ThemeContext = React.createContext({
   theme: ThemeEnum.DEFAULT,
   setTheme: (setTheme: React.SetStateAction<ThemeEnum>) => {}
});

const getCurrentTheme = (theme: ThemeEnum) => {
   switch (theme) {
      case ThemeEnum.DEFAULT:
         return DefaultTheme;
      case ThemeEnum.TLP:
         return TLPTheme;
   }
};

const ThemeContextProvider = props => {
   const [state, setState] = useState(ThemeEnum.DEFAULT);
   const currentTheme = useMemo(() => getCurrentTheme(state), [state]);
   return (
      <ThemeProvider theme={currentTheme}>
         <ThemeContext.Provider value={{ theme: state, setTheme: setState }}>
            {props.children}
         </ThemeContext.Provider>
      </ThemeProvider>
   );
};

const useThemeContext = () => {
   const { theme, setTheme } = useContext(ThemeContext);

   const currentTheme = useMemo(() => getCurrentTheme(theme), [theme]);

   return {
      currentTheme,
      setTheme
   };
};

export { ThemeContext, ThemeContextProvider, useThemeContext };
