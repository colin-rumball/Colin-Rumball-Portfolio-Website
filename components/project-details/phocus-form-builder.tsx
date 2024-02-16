import { cn } from "@/lib/utils";
import Image from "next/image";
import PhocusLogo from "@/public/images/phocus-logo-dark.png";
import PhocusNew from "@/public/images/phocus-new.png";
import PhocusCreated from "@/public/images/phocus-created.png";
import PhocusSubmit from "@/public/images/phocus-submit.png";
import { Separator } from "../ui/separator";
import Link, { ArrowLink } from "../ui/link";
import { type ProjectOpts } from "@/lib/projects-data";
import { motion } from "framer-motion";
import { slideInVariants } from "@/lib/motion";

const Background = () => {
  return <div className={`absolute inset-y-0 w-screen bg-[#9cc6c9]`}></div>;
};

const ShortDescription = () => {
  return (
    <p>
      Build forms easily using AI and a drag and drop interface. No code
      required.
    </p>
  );
};

const LongDescription = () => {
  return (
    <>
      <div className="mx-auto flex flex-col gap-3">
        <div className="relative mx-auto max-w-[180px]">
          <Image src={PhocusLogo} alt="Phocus Logo" className="" />
        </div>
        <p className="">
          An AI form builder that uses a drag and drop interface to build simple
          forms for gathering data.
        </p>
        <p className="">
          Features a user friendly interface with customizable fields allowing
          easy form creation, or just describe what you need to the AI and it
          will build the perfect form for you. Whether you're organizing an
          event, conducting a survey, or just collecting feedback, this tool
          adapts to your unique needs with minimal fuss.
        </p>
      </div>
    </>
  );
};

const Slides = [
  <Image
    src={PhocusNew}
    alt="screenshot of about page on the loneliness project"
    className="rounded-lg border border-ff-cream"
  />,
  <Image
    src={PhocusCreated}
    alt="screenshot of about page on the loneliness project"
    className="object-contain"
  />,
  <Image
    src={PhocusSubmit}
    alt="screenshot of about page on the loneliness project"
    className="object-contain"
  />,
];

const Footer = () => {
  return (
    <motion.div className="flex flex-col">
      <ArrowLink href={"https://phocus.studio/"} target="_blank">
        Visit Phocus Form Builder
      </ArrowLink>
      <ArrowLink
        href={"https://github.com/colin-rumball/The-Loneliness-Project"}
        target="_blank"
      >
        See project on Github TEMP
      </ArrowLink>
    </motion.div>
  );
};

export const PhocusFormBuilderDetails: ProjectOpts = {
  id: "phocus",
  name: "Phocus Form Builder",
  jobTitle: "Web Developer",
  date: "2024",
  video: "/videos/phocus-logo.mp4",
  foreground: "text-[#181b1b]",
  background: <Background />,
  shortDescription: ShortDescription,
  longDescription: LongDescription,
  footer: Footer,
  slides: Slides,
};
