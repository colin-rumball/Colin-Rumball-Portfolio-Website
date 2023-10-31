import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/libs/utils";
import { TailwindIndicator } from "@/components/TailwindIndicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Colin Rumball",
  description: "The portfolio of Colin Rumball",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.className,
          "selection:bg-ff-light-pink selection:text-ff-dark-pink mb-12 scroll-smooth leading-snug antialiased",
        )}
      >
        <div className="container mx-auto flex max-w-screen-xl flex-col px-4 lg:flex-row lg:px-12">
          <Header />
          {children}
        </div>
        <TailwindIndicator />
      </body>
    </html>
  );
}
