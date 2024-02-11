import Image from "next/image";
import UnoAppStore1 from "@/public/images/uno/uno_appstore1.png";
import UnoAppStore2 from "@/public/images/uno/uno_appstore2.png";
import UnoAppStore3 from "@/public/images/uno/uno_appstore3.png";
import PhocusCreated from "@/public/images/phocus-created.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

const UnoDialog = () => {
  return (
    <div
      className={`flex flex-col gap-6 rounded-lg border-ff-cream bg-gradient-to-b from-[#db2809] to-[#f9c835] p-10 tracking-wide text-ff-cream`}
    >
      <div className="flex aspect-video w-full justify-center overflow-clip rounded-lg border">
        <iframe
          width={"100%"}
          height={"100%"}
          src="https://www.youtube.com/embed/IszDOA1lt6Q?si=kI9F9NefzPZs_z7B"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-center">
        I worked on this game for 2 years of my time at Gameloft in various
        capacities across multiple systems, including UI scripting, gameplay
        programming, game server development, and project architecture.
      </p>
      <div className="col-span-2 overflow-clip rounded-lg border">
        <Carousel className="">
          <CarouselContent>
            <CarouselItem>
              <Image src={UnoAppStore1} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={UnoAppStore2} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={UnoAppStore3} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="translate-x-16" />
          <CarouselNext className="-translate-x-16" />
        </Carousel>
      </div>
    </div>
  );
};

export default UnoDialog;
