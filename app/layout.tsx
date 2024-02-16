import "@/app/globals.css";

import type { Metadata } from "next";
import { Roboto, IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import { TailwindIndicator } from "@/components/dev/TailwindIndicator";
import Providers from "@/components/providers/providers";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/react";
import BlurredBackground from "@/components/blurred-background";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-family-body",
  fallback: ["Arial", "sans-serif"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Colin Rumball",
  description: "The portfolio of Colin Rumball",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          roboto.className,
          "relative flex h-full min-h-screen scroll-smooth antialiased",
        )}
      >
        <Providers>
          <div className="relative flex flex-grow flex-col gap-8 lg:container lg:flex-row">
            <NextTopLoader />
            <Header />
            {children}
            <Analytics />
            <TailwindIndicator />
          </div>
          <BlurredBackground />
        </Providers>
      </body>
    </html>
  );
}
