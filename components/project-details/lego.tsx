import Image from "next/image";
import LegoPhoneMock1Img from "@/public/images/lego/Lego_phonemock_iphoneX_1.png";
import LegoPhoneMock2Img from "@/public/images/lego/Lego_phonemock_iphoneX_2.png";
import LegoPhoneMock3Img from "@/public/images/lego/Lego_phonemock_iphoneX_3.png";
import LegoPhoneMock4Img from "@/public/images/lego/Lego_phonemock_iphoneX_4.png";
import { ArrowLink } from "../ui/link";
import { type ProjectOpts } from "@/lib/projects-data";

const Background = () => {
  return (
    <div
      className={`absolute inset-y-0 z-10 w-screen bg-gradient-to-b from-[#481180] to-[#680a60] brightness-90`}
    >
      <div className="pointer-events-none absolute inset-y-0 -z-30 w-screen bg-[url(/images/lego/lego-background.png)] bg-repeat mix-blend-multiply" />
    </div>
  );
};

const ShortDescription = () => {
  return (
    <p>
      Immerse yourself in a vibrant LEGO® universe full of action, battles,
      sets and heroes! Your favourite minifigures and sets are busting out of
      the box in the most vibrant turn-based RPG ever assembled.
    </p>
  );
};

const LongDescription = () => {
  return (
    <ul className="flex max-w-prose list-inside list-disc flex-col gap-4">
      <li>
        Worked closely with game designers and UI & UX designers to bring
        wireframes & mockups to fully functional interactivity, responsive for
        multiple device resolutions, and localization-ready for over 9
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
  );
};

const Slides = [
  <Image
    placeholder="blur"
    src={LegoPhoneMock1Img}
    alt="Lego Legacy: Heroes Unboxed - fight scene"
  />,
  <Image
    placeholder="blur"
    src={LegoPhoneMock2Img}
    alt="Lego Legacy: Heroes Unboxed - hero collection screen"
  />,
  <Image
    placeholder="blur"
    src={LegoPhoneMock3Img}
    alt="Lego Legacy: Heroes Unboxed - lego diorama screen"
  />,
  <Image
    placeholder="blur"
    src={LegoPhoneMock4Img}
    alt="Lego Legacy: Heroes Unboxed - promo image"
  />,
];

const externalLinks = () => {
  return (
    <p className="max-w-prose">
      I wrote about my experience working on this project{" "}
      <ArrowLink
        href={
          "https://medium.com/swlh/the-importance-of-component-based-ui-design-666e5dfc7c1a"
        }
        target="_blank"
        className="inline-flex"
      >
        on Medium
      </ArrowLink>
    </p>
  );
};

export const LegoDetails: ProjectOpts = {
  id: "lego",
  name: "LEGO Legacy: Heroes Unboxed",
  jobTitle: "Game Programmer",
  date: "2017-2020",
  video: "/videos/lego-logo.mp4",
  foreground: "text-[#f9c835]",
  foregroundAlt: "text-[#FF9950]",
  background: <Background />,
  shortDescription: ShortDescription,
  longDescription: LongDescription,
  tech: ["c#", "c++", "flash", "actionscript"],
  externalLinks: externalLinks,
  slides: Slides,
};
