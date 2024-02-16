import { cn } from "@/lib/utils";
import Image from "next/image";
import GGCoHeaderLogo from "@/../public/images/ggco/header-logo.png";
import GGCoVerticalLogo from "@/../public/images/ggco/Logo_icon_vertical.png";
import GGCoBackyard from "@/../public/images/ggco/backyard.png";
import { Separator } from "../ui/separator";
import Link, { ArrowLink } from "../ui/link";
import { type ProjectOpts } from "@/lib/projects-data";
import { motion } from "framer-motion";
import { slideInVariants } from "@/lib/motion";

const Background = () => {
  return <div className={`absolute inset-y-0 w-screen bg-[#36553f]`}></div>;
};

const ShortDescription = () => {
  return (
    <p>
      A homegrown indoor farming operation, growing culinary mushrooms for use
      in cooking, as well as functional mushrooms for medicinal uses.
    </p>
  );
};

const LongDescription = () => {
  return (
    <>
      <div className="mx-auto flex flex-col gap-3">
        <motion.p variants={slideInVariants} className="font-bold">
          Growing Good Co. was founded in 2021 by Colin & Nora, two tech
          veterans looking to get away from the desk and get their hands dirty
          with something that brought more fulfillment to their life.
        </motion.p>
        <motion.div
          variants={slideInVariants}
          className="flex items-center justify-center"
        >
          <Image
            src={GGCoVerticalLogo}
            alt="Growing Good Co logo"
            className="w-full rounded-lg bg-ff-cream"
          />
        </motion.div>
        <motion.p variants={slideInVariants}>
          In the midst of the pandemic, we found ourselves leaving the hustle &
          bustle of Toronto city life to return to our childhood home,
          Northumberland County, looking to start a business in the local
          community that could help us achieve our dream of working for
          ourselves & being full time entrepreneurs.
        </motion.p>
      </div>
    </>
  );
};

const Slides = [
  <></>,
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
      <ArrowLink href={"https://growinggood.ca/"} target="_blank">
        Visit Growing Good Co.
      </ArrowLink>
    </motion.div>
  );
};

export const GGCoDetails: ProjectOpts = {
  id: "ggco",
  name: "Growing Good Co.",
  jobTitle: "Founder",
  date: "2020-2023",
  video: "/videos/ggco-logo.mp4",
  foreground: "text-ff-cream",
  background: <Background />,
  shortDescription: ShortDescription,
  longDescription: LongDescription,
  footer: Footer,
  slides: Slides,
};
