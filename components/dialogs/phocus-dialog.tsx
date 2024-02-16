import Image from "next/image";
import PhocusLogo from "@/public/images/phocus-logo-dark.png";
import PhocusNew from "@/public/images/phocus-new.png";
import PhocusCreated from "@/public/images/phocus-created.png";
import PhocusSubmit from "@/public/images/phocus-submit.png";
import Link from "../ui/link";
import { Roboto } from "next/font/google";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-family-body",
  fallback: ["Arial", "sans-serif"],
  weight: ["400", "500", "700"],
});

const PhocusDialog = () => {
  return (
    <div
      className={`flex flex-col gap-6 rounded-lg border border-ff-cream bg-[#9cc6c9] p-10 tracking-wide text-[#181b1b]`}
    >
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="relative max-w-[180px]">
          <Image src={PhocusLogo} alt="Phocus Logo" className="" />
        </div>
        <div className={`flex flex-col items-center text-center text-black`}>
          <span className="text-[28px] tracking-[6px]">PHOCUS</span>
          <span className="text-[18px] tracking-[4px]">FORM BUILDER</span>
        </div>
      </div>
      <p className="text-center">
        An AI form builder that uses a drag and drop interface to build simple
        forms for gathering data.
      </p>
      <div className="grid grid-cols-3">
        <p className="col-span-1 mx-2 rounded-lg p-2">
          Features a user friendly interface with customizable fields allowing
          easy form creation, or just describe what you need to the AI and it
          will build the perfect form for you. Whether you're organizing an
          event, conducting a survey, or just collecting feedback, this tool
          adapts to your unique needs with minimal fuss.
        </p>
        <div className="col-span-2 overflow-clip rounded-lg border">
          <Carousel className="">
            <CarouselContent>
              <CarouselItem>
                <Image src={PhocusNew} alt="" />
              </CarouselItem>
              <CarouselItem>
                <Image src={PhocusCreated} alt="" />
              </CarouselItem>
              <CarouselItem>
                <Image src={PhocusSubmit} alt="" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="translate-x-16" />
            <CarouselNext className="-translate-x-16" />
          </Carousel>
        </div>
      </div>
      <div className="w-full">
        <video
          autoPlay
          muted
          loop
          className="overflow-clip rounded-lg border border-ff-cream object-contain"
        >
          <source src="/videos/phocus-demo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PhocusDialog;
