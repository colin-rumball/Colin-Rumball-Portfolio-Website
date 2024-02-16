"use client";

import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";
import Project from "./project";
import { Projects } from "@/lib/projects-data";

type ProjectListProps = ComponentPropsWithoutRef<"div">;

const ProjectList = ({ className }: ProjectListProps) => {
  return (
    <ol
      className={cn(className, "group/list flex flex-col gap-9 lg:mt-[6.2rem]")}
    >
      {Object.values(Projects).map((projectOpts) => (
        <Project key={projectOpts.id} opts={projectOpts} />
      ))}
    </ol>
  );
};

export default ProjectList;
