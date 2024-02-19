import { type ProjectTech, Projects } from "@/lib/projects-data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type ReactNode, type ComponentPropsWithoutRef } from "react";
import {
  TbBrandTypescript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandTailwind,
  TbBrandAdobe,
  TbBrandThreejs,
} from "react-icons/tb";
import StickyHeadline from "./sticky-headline";
import useProjectSelector from "@/lib/hooks/useProjectSelector";
import ActionScriptIcon from "./icons/actionscript-icon";
import FlashIcon from "./icons/flash-icon";
import CPlusPlusIcon from "./icons/c-plus-plus-icon";
import CSharpIcon from "./icons/c-sharp-icon";
import ConvexIcon from "./icons/convex-icon";

const defaultTech = [
  "typescript",
  "react",
  "nextjs",
  "convex",
  "tailwindcss",
] as ProjectTech[];

const techMap: { [key in ProjectTech]: { icon: ReactNode; label: ReactNode } } =
  {
    typescript: {
      icon: <TbBrandTypescript />,
      label: <>TypeScript</>,
    },
    react: {
      icon: <TbBrandReact />,
      label: <>React</>,
    },
    nextjs: {
      icon: <TbBrandNextjs />,
      label: (
        <>
          Next<span className="text-xs">.js</span>
        </>
      ),
    },
    prisma: {
      icon: <TbBrandPrisma />,
      label: <>Prisma</>,
    },
    tailwindcss: {
      icon: <TbBrandTailwind />,
      label: (
        <>
          Tailwind<span className="text-xs">css</span>
        </>
      ),
    },
    flash: {
      icon: (
        <span className="w-[30px] fill-current">
          <FlashIcon />
        </span>
      ),
      label: <>Flash</>,
    },
    convex: {
      icon: (
        <span className="w-[30px] fill-current">
          <ConvexIcon />
        </span>
      ),
      label: <>Convex</>,
    },
    "c#": {
      icon: (
        <span className="w-[30px] fill-current">
          <CSharpIcon />
        </span>
      ),
      label: <>C#</>,
    },
    "c++": {
      icon: (
        <span className="w-[30px] fill-current">
          <CPlusPlusIcon />
        </span>
      ),
      label: <>C++</>,
    },
    actionscript: {
      icon: (
        <span className="w-[30px] fill-current">
          <ActionScriptIcon />
        </span>
      ),
      label: <>ActionScript</>,
    },
    threejs: {
      icon: <TbBrandThreejs />,
      label: (
        <>
          Three<span className="text-xs">.js</span>
        </>
      ),
    },
  };

type TechDisplayProps = ComponentPropsWithoutRef<"section">;

const TechDisplay = ({ className }: TechDisplayProps) => {
  const { selectedProject } = useProjectSelector((state) => ({
    selectedProject: state.selectedProject,
  }));

  const techList =
    selectedProject === null ? defaultTech : Projects[selectedProject].tech;

  return (
    <motion.section
      id="tech"
      className={cn(
        "text-ff-green",
        selectedProject && Projects[selectedProject].foregroundAlt,
        className,
      )}
    >
      <StickyHeadline as="h3">Tech</StickyHeadline>
      <div className="flex flex-col gap-2 px-4 text-4xl lg:px-0">
        <div className="flex flex-wrap gap-4">
          {techList.map((tech) => {
            return (
              <span key={tech} className="flex items-end gap-1 text-3xl">
                {techMap[tech].icon}
                <span className="text-lg font-medium tracking-tight">
                  {techMap[tech].label}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default TechDisplay;
