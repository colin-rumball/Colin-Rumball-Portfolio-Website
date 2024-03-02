import { type ProjectTech } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, type ComponentPropsWithoutRef } from "react";
import {
  TbBrandTypescript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandTailwind,
  TbBrandThreejs,
} from "react-icons/tb";
import ActionScriptIcon from "./icons/actionscript-icon";
import FlashIcon from "./icons/flash-icon";
import CPlusPlusIcon from "./icons/c-plus-plus-icon";
import CSharpIcon from "./icons/c-sharp-icon";
import ConvexIcon from "./icons/convex-icon";

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
        <span className="w-[26px] fill-current">
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

type TechDisplayProps = ComponentPropsWithoutRef<"ul"> & {
  techList: ProjectTech[];
};

const TechDisplay = ({ techList, className, ...rest }: TechDisplayProps) => {
  return (
    <ul className={cn("flex flex-wrap gap-x-4 gap-y-2", className)} {...rest}>
      <AnimatePresence mode="popLayout">
        {techList.map((tech) => {
          return (
            <motion.li
              layout
              key={tech}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.3, delay: 1.3 },
              }}
              exit={{
                scale: 0.7,
                opacity: 0,
                transition: { duration: 0.1, delay: 0 },
              }}
              transition={{ type: "spring", duration: 1, delay: 0 }}
              className="inline-flex items-center gap-1 text-4xl md:text-3xl"
            >
              {techMap[tech].icon}
              <span className="text-lg font-medium tracking-tight">
                {techMap[tech].label}
              </span>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );
};

export default TechDisplay;
