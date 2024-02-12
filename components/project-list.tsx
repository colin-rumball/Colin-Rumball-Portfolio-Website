import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";
import TLPDialog from "./dialogs/tlp-dialog";
import PhocusDialog from "./dialogs/phocus-dialog";
import UnoDialog from "./dialogs/uno-dialog";
import LegoDialog from "./dialogs/lego-dialog";
import GGCoDialog from "./dialogs/ggco-dialog";
import EmptyDialog from "./dialogs/empty-dialog";
import Project, { type ProjectProps } from "./project";

const projects: ProjectProps[] = [
  {
    location: "phocus.studio",
    title: "Creator",
    date: "2024",
    description:
      "Build forms easily using AI and a drag and drop interface. No code required.",
    video: "/videos/phocus-main.mp4",
    dialogContent: <PhocusDialog />,
  },
  {
    location: "AI Navigator Web Experience",
    title: "Web Developer",
    date: "2023",
    description: "Promoting the use of AI in the retail industry.",
    video: "/videos/dn-logo.mp4",
    dialogContent: <TLPDialog />,
  },
  {
    location: "MyRatings.monster",
    title: "Creator",
    date: "2023",
    description:
      "A tool for viewing and analyzing your ratings on the popular movie rating site IMDB.",
    video: "/videos/empty-main.mp4",
    dialogContent: <EmptyDialog />,
  },
  {
    location: "FaceCraft.me",
    title: "Creator",
    date: "2023",
    description: "A platform for creating and sharing AI generated faces.",
    video: "/videos/empty-main.mp4",
    dialogContent: <EmptyDialog />,
  },
  {
    location: "Growing Good Co",
    title: "founder",
    date: "2020-2023",
    description:
      "A homegrown indoor farming operation, growing culinary mushrooms for use in cooking, as well as functional mushrooms for medicinal uses.",
    video: "/videos/ggco-main.mp4",
    dialogContent: <GGCoDialog />,
  },
  {
    location: "The Loneliness Project",
    title: "Web Developer",
    date: "2020",
    description:
      "Sharing stories and starting a conversation about loneliness. Become part of our community of people who are not as alone as they think.",
    video: "/videos/tlp-main.mp4",
    dialogContent: <TLPDialog />,
  },
  {
    location: "LEGO Legacy: Heroes Unboxed",
    title: "Game Programmer",
    date: "2017-2020",
    description:
      "Immerse yourself in a vibrant LEGO® universe full of action, battles, sets and heroes! Your favourite minifigures and sets are busting out of the box in the most vibrant turn-based RPG ever assembled.",
    video: "/videos/lego-main.mp4",
    dialogContent: <LegoDialog />,
  },
  {
    location: "UNO & Friends",
    title: "UI Engineer",
    date: "2015-2017",
    description:
      "UNO™ & Friends brings an entirely new social dimension to the classic, fast-paced, and competitive gameplay of UNO™. With engaging multiplatform play, which promises fast fun for everyone.",
    video: "/videos/uno-main.mp4",
    dialogContent: <UnoDialog />,
  },
];

type ProjectListProps = ComponentPropsWithoutRef<"div">;

const ProjectList = ({ className }: ProjectListProps) => {
  return (
    <ol className="group/list">
      {projects.map((projectProps, index) => (
        <Project key={projectProps.title} {...projectProps} />
      ))}
    </ol>
  );
};

export default ProjectList;
