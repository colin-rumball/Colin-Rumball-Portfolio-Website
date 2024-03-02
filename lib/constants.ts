import { AiNavigatorDetails } from "@/components/project-details/ai-navigator";
import { GGCoDetails } from "@/components/project-details/growing-good-co";
import { LegoDetails } from "@/components/project-details/lego";
import { PhocusFormBuilderDetails } from "@/components/project-details/phocus-form-builder";
import { MyRatingsDetails } from "@/components/project-details/peak-ratings";
import { TLPDetails } from "@/components/project-details/the-loneliness-project";
import { UnoDetails } from "@/components/project-details/uno";
import { type FC, type ReactNode } from "react";

export type ProjectID =
  | "phocus"
  | "ainavigator"
  | "peakratings"
  | "ggco"
  | "tlp"
  | "lego"
  | "uno";

export type ProjectTech =
  | "typescript"
  | "react"
  | "nextjs"
  | "prisma"
  | "tailwindcss"
  | "convex"
  | "c#"
  | "c++"
  | "flash"
  | "actionscript"
  | "threejs";

export type ProjectOpts = {
  id: ProjectID;
  name: string;
  jobTitle: string;
  date: string;
  video: string;
  foreground: string;
  foregroundAlt: string;
  background: ReactNode;
  shortDescription: FC;
  longDescription: FC;
  tech: ProjectTech[];
  externalLinks?: FC;
  slides?: ReactNode[];
};

export type ProjectDetails = {
  [key in ProjectID]: ProjectOpts;
};

export const Projects: ProjectDetails = {
  phocus: PhocusFormBuilderDetails,
  ainavigator: AiNavigatorDetails,
  peakratings: MyRatingsDetails,
  ggco: GGCoDetails,
  tlp: TLPDetails,
  lego: LegoDetails,
  uno: UnoDetails,
} as const;
