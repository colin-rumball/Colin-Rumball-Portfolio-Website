import { cn } from "@/lib/utils";
import Image from "next/image";
import UnoAppStore1 from "@/public/images/uno/uno_appstore1.png";
import UnoAppStore2 from "@/public/images/uno/uno_appstore2.png";
import UnoAppStore3 from "@/public/images/uno/uno_appstore3.png";
import { Separator } from "../ui/separator";
import Link, { ArrowLink } from "../ui/link";
import { type ProjectOpts } from "@/lib/projects-data";
import { motion } from "framer-motion";
import { slideInVariants } from "@/lib/motion";

const Background = () => {
  return (
    <div
      className={`absolute inset-y-0 w-screen bg-[url("/images/uno/uno-bg.png")] bg-cover bg-right brightness-[0.6]`}
    ></div>
  );
};

const ShortDescription = () => {
  return (
    <p>
      UNO™ & Friends brings an entirely new social dimension to the classic,
      fast-paced, and competitive gameplay of UNO™. With engaging multiplatform
      play, which promises fast fun for everyone.
    </p>
  );
};

const LongDescription = () => {
  return (
    <>
      <div className="mx-auto flex flex-col gap-3">
        <motion.p variants={slideInVariants}>
          I worked on this game for 2 years of my time at Gameloft in various
          capacities across multiple systems, including UI scripting, gameplay
          programming, game server development, and project architecture.
        </motion.p>
      </div>
    </>
  );
};

const Slides = [
  <Image
    src={UnoAppStore1}
    alt="Marketing image for the game Uno & friends"
    className="rounded-lg border border-ff-cream"
  />,
  <Image
    src={UnoAppStore2}
    alt="Marketing image for the game Uno & friends"
    className="object-contain"
  />,
  <Image
    src={UnoAppStore3}
    alt="Marketing image for the game Uno & friends"
    className="object-contain"
  />,
];

export const UnoDetails: ProjectOpts = {
  id: "uno",
  name: "UNO & Friends",
  jobTitle: "UI Engineer",
  date: "2015-2017",
  video: "/videos/uno-logo.mp4",
  foreground: "text-ff-cream",
  background: <Background />,
  shortDescription: ShortDescription,
  longDescription: LongDescription,
  slides: Slides,
};
