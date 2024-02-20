"use client";

import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";
import Project from "./project";
import { Projects } from "@/lib/projects-data";
type ProjectListProps = ComponentPropsWithoutRef<"div">;

const ProjectList = ({ className }: ProjectListProps) => {
  return (
    <ul
      className={cn(
        className,
        "group/list pointer-events-none mb-20 flex flex-col gap-9 lg:mt-[6.2rem] lg:pl-6 lg:pr-12 lg:pt-12",
      )}
    >
      {Object.values(Projects).map((projectOpts, i) => (
        <Project key={projectOpts.id} index={i} opts={projectOpts} />
      ))}
    </ul>
  );
};

export default ProjectList;
