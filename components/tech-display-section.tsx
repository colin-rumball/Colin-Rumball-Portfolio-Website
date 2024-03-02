import useProjectSelector from "@/lib/hooks/useProjectSelector";
import { type ProjectTech, Projects } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import TechDisplay from "./tech-display";

const defaultTech: ProjectTech[] = [
  "typescript",
  "react",
  "nextjs",
  "convex",
  "tailwindcss",
];

const TechDisplaySection = ({ className }: { className?: string }) => {
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
      <div className="px-4 md:px-0">
        <TechDisplay techList={techList} />
      </div>
    </motion.section>
  );
};

export default TechDisplaySection;
