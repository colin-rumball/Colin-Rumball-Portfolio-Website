import App from "next/app";
import Head from "next/head";
import React from "react";
import SiteHeader from "../containers/SiteHeader";
import SiteFooter from "../containers/SiteFooter";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import GlobalStyles from "../components/GlobalStyles";
import { ModalSystemProvider } from "../contexts/ModalContext/ModalSystem";
import ModalViewer from "../components/modals/ModalViewer/ModalViewer";

class MyApp extends App {
   render() {
      const { Component, pageProps, router } = this.props as any;
      return (
         <>
            <Head>
               <title>Colin Rumball | Portfolio</title>
            </Head>
            <ThemeContextProvider>
               <GlobalStyles />
               <ModalSystemProvider>
                  <SiteHeader />
                  <Component {...pageProps} key={router.route} />
                  <SiteFooter />
                  <ModalViewer />
               </ModalSystemProvider>
            </ThemeContextProvider>
         </>
      );
   }
}

export default MyApp;
