import Image from "next/image";
import TLPAbout from "@/public/images/tlp/tlp-about.png";
import TLPStory from "@/public/images/tlp/tlp-story.png";
import TLPHome from "@/public/images/tlp/tlp-main-phone.png";
import TLPEdit from "@/public/images/tlp/tlp-edit-phone.png";
import TLPDash from "@/public/images/tlp/tlp-dashboard-phone.png";
import Link, { ArrowLink } from "../ui/link";
import { type ProjectOpts } from "@/lib/projects-data";

const Background = () => {
  return (
    <div
      className={`absolute inset-y-0 w-screen bg-tlp-dark bg-[url(/images/tlp/tlp-bg.png)]`}
    />
  );
};

const ShortDescription = () => {
  return <p>Sharing stories and starting a conversation about loneliness.</p>;
};

const LongDescription = () => {
  return (
    <div className="mx-auto flex flex-col gap-3">
      <p>
        The Loneliness Project is a passion project started by my dear friend{" "}
        <Link
          className="text-dn-light-blue hover:underline"
          href={"https://marissakorda.com/"}
          target="_blank"
        >
          Marissa Korda
        </Link>
        . It began small and found fast success receiving press coverage and
        thousands of story submissions.
      </p>
      <p className="rounded-lg bg-ff-cream p-6 text-tlp-dark">
        At The Loneliness Project, we believe that stories have power—the power
        to heal both listener and teller, and to show us that we aren't ever
        truly alone. Stories are powerful tools for building empathy and growing
        kindness. Those shared on the site are deeply personal yet profoundly
        universal.
      </p>
      <p>
        Marissa expressed her wish to move the site off of its exiting hosting
        to have more control over its development and its future. The original
        site was built using vanilla HTML, CSS, and Javascript, but access to
        the source code was limited, so I took on the task of rebuilding the
        site from the ground up using modern technologies, as well as making
        several quality of life improvements to the experience.
      </p>
    </div>
  );
};

const Slides = [
  <Image
    src={TLPAbout}
    alt="screenshot of the about page on the loneliness project"
    className="rounded-lg"
  />,
  <Image
    src={TLPStory}
    placeholder="blur"
    alt="screenshot of a story on the loneliness project"
    className="rounded-lg"
  />,
  <div className="flex aspect-video justify-center">
    <Image
      src={TLPHome}
      placeholder="blur"
      alt="a screenshot of the homepage on the loneliness project on a phone"
      className="w-auto rounded-lg"
    />
  </div>,
  <div className="flex aspect-video justify-center">
    <Image
      src={TLPDash}
      placeholder="blur"
      alt="a screenshot of the of the admin dashboard on the loneliness project on a phone"
      className="w-auto rounded-lg"
    />
  </div>,
  <div className="flex aspect-video justify-center">
    <Image
      src={TLPEdit}
      placeholder="blur"
      alt="a screenshot of the of apartment details edit modal on the loneliness project on a phone"
      className="w-auto rounded-lg"
    />
  </div>,
];

const externalLinks = () => {
  return (
    <div className="flex flex-col gap-1">
      <ArrowLink href={"https://thelonelinessproject.org/"} target="_blank">
        Visit The Loneliness Project
      </ArrowLink>
      <ArrowLink
        href={"https://github.com/colin-rumball/The-Loneliness-Project"}
        target="_blank"
      >
        See project on Github
      </ArrowLink>
    </div>
  );
};

export const TLPDetails: ProjectOpts = {
  id: "tlp",
  name: "The Loneliness Project",
  jobTitle: "Web Developer",
  date: "2020",
  video: "/videos/tlp-logo.mp4",
  foreground: "text-tlp-light",
  foregroundAlt: "text-ff-cream",
  background: <Background />,
  shortDescription: ShortDescription,
  longDescription: LongDescription,
  tech: ["typescript", "react", "nextjs", "prisma"],
  externalLinks: externalLinks,
  slides: Slides,
};
