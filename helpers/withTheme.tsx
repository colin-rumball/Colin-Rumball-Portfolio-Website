import { ThemeEnum, useThemeContext } from "../contexts/ThemeContext";
import { useEffect, useLayoutEffect } from "react";

function withTheme<T>(Component: React.FC, theme: ThemeEnum) {
   return (props: T) => {
      const { setTheme } = useThemeContext();
      useLayoutEffect(() => {
         setTheme(theme);
         return () => {
            setTheme(ThemeEnum.DEFAULT);
         };
      }, [setTheme]);
      return <Component {...props} />;
   };
}

export default withTheme;
