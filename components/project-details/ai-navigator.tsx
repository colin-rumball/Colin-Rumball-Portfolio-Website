import Image from "next/image";
import DNHomeImg from "@/public/images/ai-navigator/dn-home.jpg";
import DNLensImg from "@/public/images/ai-navigator/dn-lens.jpg";
import DNFormImg from "@/public/images/ai-navigator/dn-form.jpg";
import Link, { ArrowLink } from "../ui/link";
import { type ProjectOpts } from "@/lib/constants";

const Background = () => {
  return (
    <div
      className={`absolute inset-y-0 w-screen bg-gradient-radial from-dn-dark/60 to-dn-dark`}
    />
  );
};

const ShortDescription = () => {
  return <p>Promoting the use of AI in the retail industry.</p>;
};

const LongDescription = () => {
  return (
    <div className="mx-auto flex flex-col gap-3">
      <p>
        A marketing website developed for{" "}
        <Link
          target="_blank"
          href={"https://www.dieboldnixdorf.com/"}
          className="text-dn-light-blue"
        >
          Diebold Nixdorf
        </Link>{" "}
        aimed at showcasing the intersection of AI and the retail industry. The
        website was crafted with 3D elements using Three.js and offered visitors
        a unique experience rather than just a conventional informational
        website.
      </p>
      <p>
        Its primary objective was to captivate users' interest in the evolving
        role of AI in retail, while also serving as a platform to gather user
        information for future outreach.
      </p>
    </div>
  );
};

const Slides = [
  <Image
    placeholder="blur"
    src={DNHomeImg}
    className="rounded-lg"
    alt="screenshot of the homepage of the AI Navigator website"
  />,
  <div className="flex aspect-video justify-center">
    <video autoPlay muted loop playsInline className="w-full rounded-lg">
      <source src={"/videos/dn-sun.mp4"} type="video/mp4" />
    </video>
  </div>,
  <Image
    placeholder="blur"
    src={DNLensImg}
    className="rounded-lg"
    alt="screenshot of the lens of the AI Navigator website"
  />,
  <Image
    placeholder="blur"
    src={DNFormImg}
    className="rounded-lg"
    alt="screenshot of the form of the AI Navigator website"
  />,
];

const externalLinks = () => {
  return (
    <div className="flex flex-col">
      <ArrowLink
        href={"https://ainavigator.dieboldnixdorf.com/"}
        target="_blank"
      >
        Visit The AI Navigator
      </ArrowLink>
    </div>
  );
};

export const AiNavigatorDetails: ProjectOpts = {
  id: "ainavigator",
  name: "AI Navigator Web Experience",
  jobTitle: "Full-Stack Developer",
  date: "2023-2024",
  video: "/videos/dn-logo.mp4",
  foreground: "text-ff-cream",
  foregroundAlt: "text-dn-light-blue",
  background: <Background />,
  shortDescription: ShortDescription,
  longDescription: LongDescription,
  tech: ["typescript", "react", "nextjs", "prisma", "tailwindcss", "threejs"],
  externalLinks: externalLinks,
  slides: Slides,
};
