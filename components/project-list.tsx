"use client";

import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";
import Project from "./project";
import { Projects } from "@/lib/constants";
import StickyHeadline from "./sticky-headline";
import { motion } from "framer-motion";
import Headline from "./headline";

type ProjectListProps = ComponentPropsWithoutRef<"div">;

const ProjectList = ({ className }: ProjectListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.75,
        ease: "easeInOut",
      }}
    >
      {/* <Headline as="h3">Experience</Headline> */}
      <ul
        className={cn(
          className,
          "md:group/list pointer-events-none mb-20 flex flex-col gap-4 px-4 sm:gap-8 sm:px-8 md:mt-[8.8rem] md:px-0 lg:mt-[9.2rem] lg:pl-4",
        )}
      >
        {Object.values(Projects).map((projectOpts, i) => (
          <Project key={projectOpts.id} index={i} opts={projectOpts} />
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectList;
