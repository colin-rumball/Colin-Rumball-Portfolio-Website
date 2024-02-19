import { cn } from "@/lib/utils";
import Image from "next/image";
import TLPAbout from "@/public/images/tlp/tlp-about.png";
import TLPStory from "@/public/images/tlp/tlp-story.png";
import TLPHome from "@/public/images/tlp/tlp-main-phone.png";
import TLPEdit from "@/public/images/tlp/tlp-edit-phone.png";
import TLPDash from "@/public/images/tlp/tlp-dashboard-phone.png";
import { Separator } from "../ui/separator";
import Link, { ArrowLink } from "../ui/link";
import { type ProjectOpts } from "@/lib/projects-data";
import { motion } from "framer-motion";
import { slideInVariants } from "@/lib/motion";

const Background = () => {
  return <div className={`absolute inset-y-0 w-screen bg-[#0E0C20]`}></div>;
};

const ShortDescription = () => {
  return <p>Promoting the use of AI in the retail industry.</p>;
};

const LongDescription = () => {
  return (
    <>
      <div className="mx-auto flex flex-col gap-3">
        <motion.p variants={slideInVariants}>TEMP TEMP TEMP</motion.p>
      </div>
    </>
  );
};

const Slides = [
  <Image
    src={TLPAbout}
    alt="screenshot of about page on the loneliness project"
    className="rounded-lg border border-ff-cream"
  />,
  <Image
    src={TLPStory}
    alt="screenshot of about page on the loneliness project"
    className="object-contain"
  />,
  // <Image
  //   src={TLPHome}
  //   alt="a screenshot of the homepage on the loneliness project on a phone"
  // />,
  // <Image
  //   src={TLPDash}
  //   alt="a screenshot of the of the dashboard on the loneliness project on a phone"
  // />,
  // <Image
  //   src={TLPEdit}
  //   alt="a screenshot of the of apartment details edit modal on the loneliness project on a phone"
  // />,
];

const Footer = () => {
  return (
    <motion.div className="flex flex-col">
      <ArrowLink
        href={"https://ainavigator.dieboldnixdorf.com/"}
        target="_blank"
      >
        Visit The AI Navigator
      </ArrowLink>
      {/* <ArrowLink
        href={"https://github.com/colin-rumball/The-Loneliness-Project"}
        target="_blank"
      >
        See project on Github TEMP
      </ArrowLink> */}
    </motion.div>
  );
};

export const AiNavigatorDetails: ProjectOpts = {
  id: "ainavigator",
  name: "AI Navigator Web Experience",
  jobTitle: "Web Developer",
  date: "2023",
  video: "/videos/dn-logo.mp4",
  foreground: "text-ff-cream",
  foregroundAlt: "text-[#66CFFF]",
  background: <Background />,
  shortDescription: ShortDescription,
  longDescription: LongDescription,
  tech: ["typescript", "react", "nextjs", "prisma", "tailwindcss", "threejs"],
  externalLinks: Footer,
  slides: Slides,
};
