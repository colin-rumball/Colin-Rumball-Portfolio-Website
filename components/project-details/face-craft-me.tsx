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
  return <div className={`absolute inset-y-0 w-screen bg-[#1b2334]`}></div>;
};

const ShortDescription = () => {
  return <p>A platform for creating and sharing AI generated faces.</p>;
};

const LongDescription = () => {
  return (
    <>
      {/* <div className="mx-auto flex flex-col gap-3">
        <motion.p variants={slideInVariants}>
          The Loneliness Project is a passion project started by my dear friend
          Marissa Korda. It began small and found fast success receiving press
          coverage and thousands of story submissions.
        </motion.p>
        <motion.p
          variants={slideInVariants}
          className="rounded-lg bg-ff-cream p-6 text-[#1b2334]"
        >
          At The Loneliness Project, we believe that stories have power—the
          power to heal both listener and teller, and to show us that we aren't
          ever truly alone. Stories are powerful tools for building empathy and
          growing kindness. Those shared on the site are deeply personal yet
          profoundly universal.
        </motion.p>
        <motion.p variants={slideInVariants} className="">
          Marissa expressed her wish to move the site off of its exiting hosting
          to have more control over its development and its future. The original
          site was built using vanilla HTML, CSS, and Javascript, but access to
          the source code was limited, so I took on the task of rebuilding the
          site from the ground up using modern technologies, as well as making
          several quality of life improvements to the experience.
        </motion.p>
      </div> */}
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
      {/* <ArrowLink href={"https://thelonelinessproject.org/"} target="_blank">
        Visit The Loneliness Project
      </ArrowLink>
      <ArrowLink
        href={"https://github.com/colin-rumball/The-Loneliness-Project"}
        target="_blank"
      >
        See project on Github TEMP
      </ArrowLink> */}
    </motion.div>
  );
};

export const FaceCraftDetails: ProjectOpts = {
  id: "ainavigator", // TODO: change to face-craft-me
  name: "FaceCraft.me",
  jobTitle: "Full-Stack Developer",
  date: "2023",
  video: "/videos/empty-logo.mp4",
  foreground: "text-ff-cream",
  background: <Background />,
  shortDescription: ShortDescription,
  longDescription: LongDescription,
  foregroundAlt: "text-[#66CFFF]",
  tech: ["typescript", "react", "nextjs", "prisma", "tailwindcss"],
  // footer: Footer,
  slides: Slides,
};
