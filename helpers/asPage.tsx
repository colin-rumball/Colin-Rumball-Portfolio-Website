import React from "react";
import GetComponentDisplayName from "./utils/GetComponentDisplayName";
import Theme, { ThemeContainer } from "../themes/definitions/Theme";
import SiteHeader from "../containers/SiteHeader";
import SiteFooter from "../containers/SiteFooter";
import ModalViewer from "../components/modals/ModalViewer/ModalViewer";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const ThemedGlobalStyles = createGlobalStyle`
`;

function asPage<T>(Component: React.FC, theme: (baseTheme: Theme) => Theme) {
   const asPage = (props: T) => {
      return (
         <ThemeProvider theme={theme}>
            <ThemedGlobalStyles />
            <SiteHeader />
            <Component {...props} />
            <SiteFooter />
            <ModalViewer />
         </ThemeProvider>
      );
   };

   asPage.displayName = `asPage(${GetComponentDisplayName(Component)})`;

   return asPage;
}

export default asPage;
