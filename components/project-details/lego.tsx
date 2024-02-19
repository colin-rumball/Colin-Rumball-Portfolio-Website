import { cn } from "@/lib/utils";
import Image from "next/image";
import LegoPhoneMock1Img from "@/public/images/lego/Lego_phonemock_iphoneX_1.png";
import LegoPhoneMock2Img from "@/public/images/lego/Lego_phonemock_iphoneX_2.png";
import LegoPhoneMock3Img from "@/public/images/lego/Lego_phonemock_iphoneX_3.png";
import LegoPhoneMock4Img from "@/public/images/lego/Lego_phonemock_iphoneX_4.png";
import { Separator } from "../ui/separator";
import Link, { ArrowLink } from "../ui/link";
import { type ProjectOpts } from "@/lib/projects-data";
import { motion } from "framer-motion";
import { slideInVariants } from "@/lib/motion";

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
    <>
      <div className="mx-auto flex flex-col gap-3">
        {/* <div className="flex aspect-video w-full justify-center overflow-clip rounded-lg border">
          <iframe
            width={"100%"}
            height={"100%"}
            src="https://www.youtube.com/embed/b3QhqOA0_j8?si=m9Eqi8Lz3KkYt9-8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div> */}
        <ul className="flex max-w-prose list-disc flex-col gap-2">
          <motion.li variants={slideInVariants}>
            Worked closely with game designers and UI & UX designers to bring
            wireframes & mockups to fully functional interactivity, responsive
            for multiple device resolutions, and localization-ready for over 9
            languages.
          </motion.li>
          <motion.li variants={slideInVariants}>
            Created sequencing and scripting tools to allow non-developers to
            customize game parameters and independently modify game subsystems.
          </motion.li>
          <motion.li variants={slideInVariants}>
            Contributed to systems architecture planning meetings for complex
            gameplay problems with colleagues.
          </motion.li>
          <motion.li variants={slideInVariants}>
            Worked on developing Lego Legacy: Heroes Unboxed from inception to
            launch, over a period of 3 years.
          </motion.li>
        </ul>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <motion.p variants={slideInVariants} className="max-w-prose">
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
    </motion.p>
  );
};

const Slides = [
  <Image
    src={LegoPhoneMock1Img}
    alt="Lego Legacy: Heroes Unboxed Promo Image 1"
  />,
  <Image
    src={LegoPhoneMock2Img}
    alt="Lego Legacy: Heroes Unboxed Promo Image 2"
  />,
  <Image
    src={LegoPhoneMock3Img}
    alt="Lego Legacy: Heroes Unboxed Promo Image 3"
  />,
  <Image
    src={LegoPhoneMock4Img}
    alt="Lego Legacy: Heroes Unboxed Promo Image 4"
  />,
];

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
  externalLinks: Footer,
  slides: Slides,
};
