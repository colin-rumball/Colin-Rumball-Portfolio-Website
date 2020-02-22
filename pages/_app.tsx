import App, { Container as NextAppContainer } from "next/app";
import Head from "next/head";
import React from "react";
import SiteHeader from "../containers/SiteHeader";
import SiteFooter from "../containers/SiteFooter";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import GlobalStyles from "../components/GlobalStyles";

class MyApp extends App {
   render() {
      const { Component, pageProps, router } = this.props as any;
      return (
         <>
            <Head>
               <title>Colin Rumball | Portfolio</title>
            </Head>
            <NextAppContainer>
               <ThemeContextProvider>
                  <GlobalStyles />
                  <SiteHeader />
                  <Component {...pageProps} key={router.route} />
                  <SiteFooter />
               </ThemeContextProvider>
            </NextAppContainer>
         </>
      );
   }
}

export default MyApp;
