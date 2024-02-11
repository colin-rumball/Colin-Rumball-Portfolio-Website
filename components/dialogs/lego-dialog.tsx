import Image from "next/image";
import LegoPhoneMock1 from "@/public/images/lego/Lego_phonemock_iphoneX_1.png";
import LegoPhoneMock2 from "@/public/images/lego/Lego_phonemock_iphoneX_2.png";
import LegoPhoneMock3 from "@/public/images/lego/Lego_phonemock_iphoneX_3.png";
import LegoPhoneMock4 from "@/public/images/lego/Lego_phonemock_iphoneX_4.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { Glegoo } from "next/font/google";
import Link from "../ui/link";
import { Separator } from "../ui/separator";

const glegoo = Glegoo({
  subsets: ["latin"],
  variable: "--font-family-body",
  fallback: ["Arial", "sans-serif"],
  weight: ["400", "700"],
});

const LegoDialog = () => {
  return (
    <div
      className={`relative z-10 flex flex-col gap-6 ${glegoo.className} rounded-lg border-ff-cream bg-gradient-to-b from-[#481180] to-[#680a60] p-10 tracking-wide text-[#f9c835]`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url(/images/lego/lego-background.png)] bg-repeat mix-blend-multiply" />
      <div className="flex aspect-video w-full justify-center overflow-clip rounded-lg border">
        <iframe
          width={"100%"}
          height={"100%"}
          src="https://www.youtube.com/embed/b3QhqOA0_j8?si=m9Eqi8Lz3KkYt9-8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mx-auto flex flex-col gap-3">
        <h2 className="font-bold">DEVELOPMENT RESPONSIBILITIES</h2>
        <Separator className="my-2 bg-current" />
        <ul className="flex max-w-prose list-disc flex-col gap-2">
          <li>
            Worked closely with game designers and UI & UX designers to bring
            wireframes & mockups to fully functional interactivity, responsive
            for multiple device resolutions, and localization-ready for over 9
            languages.
          </li>
          <li>
            Created sequencing and scripting tools to allow non-developers to
            customize game parameters and independently modify game subsystems.
          </li>
          <li>
            Contributed to systems architecture planning meetings for complex
            gameplay problems with colleagues.
          </li>
          <li>
            Worked on developing Lego Legacy: Heroes Unboxed from inception to
            launch, over a period of 3 years.
          </li>
        </ul>
        <Separator className="my-2 bg-current" />
        <p className="max-w-prose">
          I wrote a bit about what I learned and my overall experience working
          on this project{" "}
          <Link
            target="_blank"
            className="underline"
            href={
              "https://medium.com/swlh/the-importance-of-component-based-ui-design-666e5dfc7c1a"
            }
          >
            HERE
          </Link>
        </p>
      </div>
      <div className="">
        <Carousel className="">
          <CarouselContent>
            <CarouselItem>
              <Image
                src={LegoPhoneMock1}
                alt="Lego Legacy: Heroes Unboxed Promo Image 1"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={LegoPhoneMock2}
                alt="Lego Legacy: Heroes Unboxed Promo Image 2"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={LegoPhoneMock3}
                alt="Lego Legacy: Heroes Unboxed Promo Image 3"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={LegoPhoneMock4}
                alt="Lego Legacy: Heroes Unboxed Promo Image 4"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="translate-x-16" />
          <CarouselNext className="-translate-x-16" />
        </Carousel>
      </div>
    </div>
  );
};

export default LegoDialog;
