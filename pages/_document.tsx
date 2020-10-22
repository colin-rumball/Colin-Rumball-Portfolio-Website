import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class AppDocument extends Document {
   static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet();

      const originalRenderPage = ctx.renderPage;
      try {
         ctx.renderPage = () =>
            originalRenderPage({
               enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });
         const initialProps = await Document.getInitialProps(ctx);

         return {
            ...initialProps,
            styles: (
               <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
               </>
            ),
         };
      } finally {
         sheet.seal();
      }
   }

   render() {
      return (
         <Html lang="en">
            <Head>
               <meta name="description" content="The portfolio of Colin Rumball." />
               <meta name="keywords" content="Colin Rumball Web Developer Full Stack" />
               <meta name="author" content="Colin Rumball" />
               <link
                  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600&display=swap"
                  rel="stylesheet"
               />
               <link
                  href="https://fonts.googleapis.com/css?family=Raleway:600&display=swap"
                  rel="stylesheet"
               ></link>
               <link rel="shortcut icon" type="image/x-icon" href="/public/favicon.ico" />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}
