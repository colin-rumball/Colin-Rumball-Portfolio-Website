import Image from "next/image";
import HomeImg from "@/public/images/peak-ratings/home.jpg";
import ChartsImg from "@/public/images/peak-ratings/charts.jpg";
import DashboardImg from "@/public/images/peak-ratings/dashboard.jpg";
import ListsImg from "@/public/images/peak-ratings/lists.jpg";
import { ArrowLink } from "../ui/link";
import { type ProjectOpts } from "@/lib/projects-data";

const Background = () => {
  return (
    <div className="absolute inset-y-0 -z-20 w-full bg-[url(/images/peak-ratings/grain.png)]">
      <div className="z-10 h-full w-full bg-gradient-to-b from-peak-dark/10 to-peak-accent/20" />
    </div>
  );
};

const ShortDescription = () => {
  return (
    <p>
      A tool for viewing and analyzing your ratings from the popular movie
      rating website IMDB.
    </p>
  );
};

const LongDescription = () => {
  return (
    <div className="flex flex-col gap-3">
      <p>
        Peak Ratings is a tool that visualizes a user's IMDb ratings, offering
        insights into their movie & TV show preferences and watching habits.
      </p>
      <p>
        Combining a love for data with a passion for film, this project explores
        the intersection of analytics and entertainment.
      </p>
    </div>
  );
};

const Slides = [
  <Image
    placeholder="blur"
    src={HomeImg}
    className="rounded-lg"
    alt="screenshot of the homepage"
  />,
  <Image
    placeholder="blur"
    src={DashboardImg}
    className="rounded-lg"
    alt="screenshot of the data dashboard showing various ratings"
  />,
  <Image
    placeholder="blur"
    src={ChartsImg}
    className="rounded-lg"
    alt="screenshot of the data dashboard showing a few different charts"
  />,
  <Image
    placeholder="blur"
    src={ListsImg}
    className="rounded-lg"
    alt="screenshot of the data dashboard showing various lists of info"
  />,
];

const externalLinks = () => {
  return (
    <div className="flex flex-col">
      <ArrowLink href={"https://peakratings.tv"} target="_blank">
        Visit Peak Ratings
      </ArrowLink>
      <ArrowLink
        href={"https://github.com/colin-rumball/peak-ratings"}
        target="_blank"
      >
        See project on Github
      </ArrowLink>
    </div>
  );
};

export const MyRatingsDetails: ProjectOpts = {
  id: "peakratings",
  name: "Peak Ratings",
  jobTitle: "Full-Stack Developer",
  date: "2023",
  video: "/videos/peak-ratings-logo.mp4",
  foreground: "text-[#e6e6e6]",
  foregroundAlt: "text-peak-yellow",
  background: <Background />,
  shortDescription: ShortDescription,
  longDescription: LongDescription,
  tech: ["typescript", "react", "nextjs", "convex", "tailwindcss"],
  externalLinks: externalLinks,
  slides: Slides,
};
