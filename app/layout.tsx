import "@/app/globals.css";

import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import { TailwindIndicator } from "@/components/dev/TailwindIndicator";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/react";
import BlurredBackground from "@/components/blurred-background";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-family-body",
  fallback: ["Arial", "sans-serif"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Colin Rumball",
  description: "The web development portfolio of Colin Rumball",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth text-[95%] lg:text-[100%]">
      <body
        className={cn(
          nunito_sans.className,
          "relative flex h-full min-h-screen scroll-smooth antialiased",
          "bg-gradient-to-r from-slate-300 via-ff-cream to-slate-300/60",
        )}
      >
        <div className="relative flex flex-grow flex-col gap-0 md:container md:flex-row md:gap-8 lg:px-16">
          <NextTopLoader />
          <Header />
          {children}
          <Analytics />
          <TailwindIndicator />
        </div>
        <BlurredBackground />
        <div className="absolute inset-0 -z-10 bg-[url(/images/paper.jpg)] opacity-30" />
      </body>
    </html>
  );
}
