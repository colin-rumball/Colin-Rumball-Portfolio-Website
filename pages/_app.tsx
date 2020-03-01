import App from "next/app";
import Head from "next/head";
import React from "react";
import GlobalStyles from "../components/GlobalStyles";
import { ModalSystemProvider } from "../contexts/ModalContext/ModalSystem";
import { ThemeProvider } from "styled-components";
import BaseTheme from "../themes/BaseTheme/BaseTheme";

class MyApp extends App {
   render() {
      const { Component, pageProps, router } = this.props as any;
      return (
         <>
            <Head>
               <title>Colin Rumball | Portfolio</title>
            </Head>
            <GlobalStyles />

            <ModalSystemProvider>
               <ThemeProvider theme={BaseTheme}>
                  <Component {...pageProps} key={router.route} />
               </ThemeProvider>
            </ModalSystemProvider>
         </>
      );
   }
}

export default MyApp;
