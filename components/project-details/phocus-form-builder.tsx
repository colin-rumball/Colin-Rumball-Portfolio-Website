import Image from "next/image";
import PhocusNew from "@/public/images/phocus/phocus-new.png";
import PhocusCreated from "@/public/images/phocus/phocus-created.png";
import PhocusSubmit from "@/public/images/phocus/phocus-submit.png";
import PhocusDashboardImg from "@/public/images/phocus/phocus-dashboard.jpg";
import PhocusDrawerImg from "@/public/images/phocus/phocus-drawer.jpg";
import PhocusSidebarImg from "@/public/images/phocus/phocus-sidebar.jpg";
import { ArrowLink } from "../ui/link";
import { type ProjectOpts } from "@/lib/projects-data";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="absolute inset-y-0 w-full bg-phocus-dark bg-[url(/svgs/dot-grid-dark.svg)]">
      <div className="-z-20 h-full w-full bg-gradient-to-b from-phocus-dark/90 from-15% via-phocus-dark/80 to-phocus-dark/70 to-85%" />
    </div>
  );
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
    <div className="flex flex-col gap-3">
      <p>
        An AI form builder that uses a drag and drop interface to build simple
        forms for gathering data.
      </p>
      <p>
        Features a user friendly interface with customizable fields allowing
        easy form creation, or just describe what you need to the AI and it will
        build the perfect form for you.
      </p>
      <p>
        Whether you're organizing an event, conducting a survey, or just
        collecting feedback, this tool adapts to your unique needs with minimal
        fuss.
      </p>
    </div>
  );
};

const Slides = [
  <Image
    placeholder="blur"
    src={PhocusNew}
    className="rounded-lg"
    alt="screenshot of the user creating a new form"
  />,
  <Image
    placeholder="blur"
    src={PhocusCreated}
    className="rounded-lg"
    alt="screenshot of the user's newly created form"
  />,
  <Image
    placeholder="blur"
    src={PhocusDrawerImg}
    className="rounded-lg"
    alt="screenshot of the user's newly created form"
  />,
  <Image
    placeholder="blur"
    src={PhocusSidebarImg}
    className="rounded-lg"
    alt="screenshot of the user's newly created form"
  />,
  <Image
    placeholder="blur"
    src={PhocusSubmit}
    className="rounded-lg"
    alt="screenshot of the user submitting the form"
  />,
  <Image
    placeholder="blur"
    src={PhocusDashboardImg}
    className="rounded-lg"
    alt="screenshot of the form dashboard showing 2 forms"
  />,
];

const externalLinks = () => {
  return (
    <motion.div className="flex flex-col">
      <ArrowLink href={"https://phocus.studio/"} target="_blank">
        Visit Phocus Form Builder
      </ArrowLink>
      <ArrowLink
        href={"https://github.com/colin-rumball/phocus-form-builder"}
        target="_blank"
      >
        See project on Github
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
  foreground: "text-phocus-light",
  foregroundAlt: "text-phocus-alt",
  background: <Background />,
  shortDescription: ShortDescription,
  longDescription: LongDescription,
  tech: ["typescript", "react", "nextjs", "convex", "tailwindcss"],
  externalLinks: externalLinks,
  slides: Slides,
};
