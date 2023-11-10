import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/libs/utils";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import Providers from "@/components/Providers";
import ModalViewer from "@/components/ModalViewer/ModalViewer";

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
          "scroll-smooth bg-ff-cream text-lg leading-snug text-ff-navy-blue antialiased selection:bg-ff-light-pink selection:text-ff-dark-pink",
        )}
      >
        <Providers>
          <div className="container mx-auto flex max-w-screen-xl flex-col px-4 lg:flex-row lg:px-12">
            <Header />
            {children}
          </div>
          <TailwindIndicator />
          <ModalViewer />
        </Providers>
      </body>
    </html>
  );
}
