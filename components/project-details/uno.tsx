import Image from "next/image";
import UnoAppStore1 from "@/public/images/uno/uno_appstore1.png";
import UnoAppStore2 from "@/public/images/uno/uno_appstore2.png";
import UnoAppStore3 from "@/public/images/uno/uno_appstore3.png";
import { type ProjectOpts } from "@/lib/constants";

const Background = () => {
  return (
    <div
      className={`absolute h-full w-full bg-red-600 bg-[url("/images/uno/uno-bg.png")] bg-cover bg-right brightness-[0.6]`}
    />
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
    <p className="">
      I worked on this game for 2 years while working for Gameloft in various
      capacities across multiple systems, including UI scripting, gameplay
      programming, game server development, and project architecture.
    </p>
  );
};

const Slides = [
  <Image
    placeholder="blur"
    src={UnoAppStore1}
    alt="Marketing image for the game Uno & friends"
    className="rounded-lg"
  />,
  <Image
    placeholder="blur"
    src={UnoAppStore2}
    alt="Marketing image for the game Uno & friends"
    className="rounded-lg"
  />,
  <Image
    placeholder="blur"
    src={UnoAppStore3}
    alt="Marketing image for the game Uno & friends"
    className="rounded-lg"
  />,
];

export const UnoDetails: ProjectOpts = {
  id: "uno",
  name: "UNO & Friends",
  jobTitle: "UI Engineer",
  date: "2015-2017",
  video: "/videos/uno-logo.mp4",
  foreground: "text-ff-cream",
  foregroundAlt: "text-uno-yellow",
  background: <Background />,
  shortDescription: ShortDescription,
  longDescription: LongDescription,
  tech: ["flash", "actionscript", "c++"],
  slides: Slides,
};
