import { AiNavigatorDetails } from "@/components/project-details/ai-navigator";
import { FaceCraftDetails } from "@/components/project-details/face-craft-me";
import { GGCoDetails } from "@/components/project-details/growing-good-co";
import { LegoDetails } from "@/components/project-details/lego";
import { PhocusFormBuilderDetails } from "@/components/project-details/phocus-form-builder";
import { MyRatingsDetails } from "@/components/project-details/ratings-monster";
import { TLPDetails } from "@/components/project-details/the-loneliness-project";
import { UnoDetails } from "@/components/project-details/uno";
import { type FC, type ReactNode } from "react";

export type ProjectID =
  | "phocus"
  | "ainavigator"
  | "myratings"
  | "facecraft"
  | "ggco"
  | "tlp"
  | "lego"
  | "uno";

export type ProjectOpts = {
  id: ProjectID;
  name: string;
  jobTitle: string;
  date: string;
  video: string;
  foreground: string;
  background: ReactNode;
  shortDescription: FC;
  longDescription: FC;
  footer?: FC;
  slides?: ReactNode[];
};

export type ProjectDetails = {
  [key in ProjectID]: ProjectOpts;
};

export const Projects: ProjectDetails = {
  phocus: PhocusFormBuilderDetails,
  ainavigator: AiNavigatorDetails,
  myratings: MyRatingsDetails,
  facecraft: FaceCraftDetails,
  ggco: GGCoDetails,
  tlp: TLPDetails,
  lego: LegoDetails,
  uno: UnoDetails,
};

// {
//   id: "phocus-forum-builder",
//   name: "Phocus Form Builder",
//   jobTitle: "Creator",
//   date: "2024",
//   video: "/videos/phocus-logo.mp4",
//   shortDescription:
//     "Build forms easily using AI and a drag and drop interface. No code required.",
//   longDescription: <PhocusDialog />,
//   slides: LegoSlides,
// },
// {
//   id: "ai-navigator",
//   name: "AI Navigator Web Experience",
//   jobTitle: "Web Developer",
//   date: "2023",
//   video: "/videos/dn-logo.mp4",
//   shortDescription: "Promoting the use of AI in the retail industry.",
//   longDescription: <TLPDialog />,
//   slides: LegoSlides,
// },
// {
//   name: "MyRatings.monster",
//   jobTitle: "Creator",
//   date: "2023",
//   shortDescription:
//     "A tool for viewing and analyzing your ratings on the popular movie rating site IMDB.",
//   video: "/videos/empty-logo.mp4",
//   longDescription: <EmptyDialog />,
//   slides: [<Image src={TestImg} alt="" />],
// },
// {
//   name: "FaceCraft.me",
//   jobTitle: "Creator",
//   date: "2023",
//   shortDescription: "A platform for creating and sharing AI generated faces.",
//   video: "/videos/empty-logo.mp4",
//   longDescription: <EmptyDialog />,
//   slides: [<Image src={TestImg} alt="" />],
// },
// {
//   name: "Growing Good Co",
//   jobTitle: "founder",
//   date: "2020-2023",
//   shortDescription:
//     "A homegrown indoor farming operation, growing culinary mushrooms for use in cooking, as well as functional mushrooms for medicinal uses.",
//   video: "/videos/ggco-logo.mp4",
//   longDescription: <GGCoDialog />,
//   slides: [<Image src={TestImg} alt="" />],
// },
// {
//   name: "The Loneliness Project",
//   jobTitle: "Web Developer",
//   date: "2020",
//   shortDescription:
//     "Sharing stories and starting a conversation about loneliness. Become part of our community of people who are not as alone as they think.",
//   video: "/videos/tlp-logo.mp4",
//   longDescription: <TLPDialog />,
//   slides: [<Image src={TestImg} alt="" />],
// },
// {
//   name: "LEGO Legacy: Heroes Unboxed",
//   jobTitle: "Game Programmer",
//   date: "2017-2020",
//   shortDescription:
//     "Immerse yourself in a vibrant LEGO® universe full of action, battles, sets and heroes! Your favourite minifigures and sets are busting out of the box in the most vibrant turn-based RPG ever assembled.",
//   video: "/videos/lego-logo.mp4",
//   longDescription: <LegoDialog />,
//   slides: LegoSlides,
// },
// {
//   name: "UNO & Friends",
//   jobTitle: "UI Engineer",
//   date: "2015-2017",
//   shortDescription:
//     "UNO™ & Friends brings an entirely new social dimension to the classic, fast-paced, and competitive gameplay of UNO™. With engaging multiplatform play, which promises fast fun for everyone.",
//   video: "/videos/uno-logo.mp4",
//   longDescription: <UnoDialog />,
//   slides: [<Image src={TestImg} alt="" />],
// },
