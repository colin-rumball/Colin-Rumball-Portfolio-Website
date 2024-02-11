import Image from "next/image";
import GGCoHeaderLogo from "@/../public/images/ggco/header-logo.png";
import GGCoVerticalLogo from "@/../public/images/ggco/Logo_icon_vertical.png";
import GGCoBackyard from "@/../public/images/ggco/backyard.png";
import Link from "../ui/link";
import { Catamaran } from "next/font/google";
import { cn } from "@/lib/utils";

const catamaran = Catamaran({
  subsets: ["latin"],
  variable: "--font-body",
  fallback: ["Arial", "sans-serif"],
  weight: ["400", "500"],
});

const GGCoDialog = () => {
  return (
    <div
      className={`flex flex-col rounded-lg border border-[#36553f] bg-ff-cream text-[#36553f] ${catamaran.variable}`}
    >
      <div className="flex items-center justify-center">
        <Image
          src={GGCoVerticalLogo}
          alt="Growing Good Co logo"
          className="h-full max-h-80 w-auto"
        />
      </div>
      <div className="mx-auto flex w-full max-w-prose flex-col justify-center gap-6 p-10 text-center leading-6 tracking-wide">
        <p className="font-bold">
          Growing Good Co. was founded in 2021 by Colin & Nora, two tech
          veterans looking to get away from the desk and get their hands dirty
          with something that brought more fulfillment to their life.
        </p>
        <div className="flex justify-center">
          <Link
            className={cn(
              "text w-[220px] bg-[#fbc53b] py-2 opacity-100 ring-[#36553f] transition-all",
              "hover:opacity-80",
            )}
            href={"https://growinggood.ca"}
            target="_blank"
          >
            <span className="opacity-100">Check it out!</span>
          </Link>
        </div>
        <p>
          In the midst of the pandemic, we found ourselves leaving the hustle &
          bustle of Toronto city life to return to our childhood home,
          Northumberland County, looking to start a business in the local
          community that could help us achieve our dream of working for
          ourselves & being full time entrepreneurs.
        </p>
        <p>
          Being a programmer & a designer by trade, mushroom farming doesn't
          seem like an obvious choice of career pivot - but being experienced
          creative problem solvers helps us tackle every new challenge together.
          Colin's engineering brain is indispensable for building our
          operation's facilities, equipment, and our systematic & automated
          processes. Nora supports her mycologist partner with her creative
          brain, crafting our brand identity, website, packaging, and social
          media presence.
        </p>
        <div className="">
          <Image src={GGCoBackyard} alt="GGCo founders" />
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#36553f] py-24">
        <Image src={GGCoHeaderLogo} alt="Growing Good Co logo" />
      </div>
    </div>
  );
};

export default GGCoDialog;
