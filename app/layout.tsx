import "@/app/globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import { TailwindIndicator } from "@/components/dev/TailwindIndicator";
import Header from "@/components/header";
import Providers from "@/components/providers/providers";

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
          " no-scrollbar",
          "relative flex h-full min-h-screen overflow-x-hidden scroll-smooth bg-ff-cream antialiased",
          // "bg-ff-cream text-ff-navy-blue selection:bg-ff-light-pink selection:text-ff-dark-pink text-lg leading-snug",
        )}
      >
        <div className="container flex flex-grow">
          <NextTopLoader />
          <Providers>
            <Header />
            {children}
          </Providers>
          {/* TODO: enable analytics */}
          {/* <Analytics /> */}
          <TailwindIndicator />
        </div>
      </body>
    </html>
  );
}
