import useProjectSelector from "@/lib/hooks/useProjectSelector";
import { type ProjectTech, Projects } from "@/lib/projects-data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type ComponentPropsWithoutRef } from "react";
import Headline from "./headline";
import TechDisplay from "./tech-display";

const defaultTech = [
  "typescript",
  "react",
  "nextjs",
  "convex",
  "tailwindcss",
] as ProjectTech[];

type TechDisplaySectionProps = ComponentPropsWithoutRef<"div">;

const TechDisplaySection = ({ className }: TechDisplaySectionProps) => {
  const { selectedProject } = useProjectSelector((state) => ({
    selectedProject: state.selectedProject,
  }));

  const techList =
    selectedProject === null ? defaultTech : Projects[selectedProject].tech;

  return (
    <motion.section
      id="tech"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 20, opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
        ease: "easeInOut",
        staggerChildren: 1,
      }}
      className={cn(
        "text-ff-green transition-colors duration-1000",
        selectedProject && Projects[selectedProject].foregroundAlt,
        className,
      )}
    >
      <Headline as="h3">Tech</Headline>
      <div className="px-4 md:px-0">
        <TechDisplay techList={techList} />
      </div>
    </motion.section>
  );
};

export default TechDisplaySection;
