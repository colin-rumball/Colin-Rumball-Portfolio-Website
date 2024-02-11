import Page from "@/components/ui/page";
import Image from "next/image";
import PhocusLogo from "@/public/images/phocus-logo-dark.png";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-family-body",
  fallback: ["Arial", "sans-serif"],
  weight: ["400", "500", "700"],
});

export default function () {
  return (
    <Page className="flex h-screen flex-grow items-center justify-center bg-[#9cc6c9]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="relative max-w-[180px]">
          <Image src={PhocusLogo} alt="Phocus Logo" className="" />
        </div>
        <div
          className={`flex flex-col items-center text-center text-black ${roboto.className}`}
        >
          <span className="text-[28px] tracking-[6px]">PHOCUS</span>
          <span className="text-[18px] tracking-[4px]">FORM BUILDER</span>
        </div>
      </div>
      <div className="animate-logo-fade-in absolute inset-0 -translate-y-full bg-gradient-to-b from-transparent to-[#9cc6c9] to-60% transition-all delay-1000 fill-mode-both" />
      <div
        className="animate-logo-fade-out absolute inset-0 bg-[#9cc6c9] opacity-0 fill-mode-both"
        style={{ animationDelay: "6000ms" }}
      />
    </Page>
  );
}
