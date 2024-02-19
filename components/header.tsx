"use client";

import { cn } from "@/lib/utils";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import {
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import StickyHeadline from "./sticky-headline";
import OccupationTyper from "./occupation-typer";
import useProjectSelector from "@/lib/hooks/useProjectSelector";
import { Projects } from "@/lib/projects-data";
import { Separator } from "./ui/separator";
import { AnimatePresence, clamp, motion } from "framer-motion";
import Link, { ArrowLink } from "./ui/link";
import { slideInFinish, slideInInitial, slideInVariants } from "@/lib/motion";
import TechDisplay from "./tech-display";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const HeaderAboutMe = () => {
  const { selectedProject } = useProjectSelector((state) => ({
    selectedProject: state.selectedProject,
  }));

  if (selectedProject === null) {
    return (
      <section id="about" className="" aria-label="About me">
        <StickyHeadline as="h3">About</StickyHeadline>
        <div className="px-4 lg:px-0">
          <p className="mb-4">
            I have a strong passion for software development that has evolved
            over time. Initially drawn to the gaming industry, I pursued game
            development and worked in mobile gaming. In recent years, I&apos;ve
            shifted my focus to web development, embracing its creative
            challenges and innovative approach to problem-solving. I am excited
            to bring this unique blend of skills and experiences to every
            project I undertake.
          </p>
          <p className="mb-4">
            When not coding, I enjoy practicing yoga, camping, and traveling the
            world with my wife. Recently, I embarked on a different kind of
            challenge away from the desk: founding a small local culinary
            mushroom farm, allowing me to explore sustainable agriculture and
            connect with my local community.
          </p>
        </div>
      </section>
    );
  }

  const projectOpts = Projects[selectedProject];
  const ProjectDescription = projectOpts.longDescription;
  return (
    <motion.section
      variants={{
        project: {
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
          },
        },
        default: {
          transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
      }}
      id="about"
      className="flex flex-col gap-2"
      aria-label="Project details"
    >
      <Separator className="my-2 bg-current" />
      <div className="flex flex-col text-left text-xs font-semibold tracking-wide">
        <motion.h2
          variants={slideInVariants}
          className="mb-1 align-top text-xl font-medium leading-5 tracking-tight"
        >
          {projectOpts.name}
        </motion.h2>
        <motion.h4
          variants={slideInVariants}
          className="uppercase tracking-normal"
        >
          {projectOpts.jobTitle}
        </motion.h4>
        <motion.h5 variants={slideInVariants} className="uppercase">
          {projectOpts.date}
        </motion.h5>
      </div>
      <div className="px-4 lg:px-0">
        <ProjectDescription />
      </div>
      <Separator className="my-2 bg-current" />
    </motion.section>
  );
};

const HeaderFooter = () => {
  const { selectedProject } = useProjectSelector((state) => ({
    selectedProject: state.selectedProject,
  }));
  if (
    selectedProject === null ||
    Projects[selectedProject].footer === undefined
  ) {
    return (
      <section id="contact" className="">
        <div className="flex flex-col gap-0 px-4 lg:px-0">
          <div className="my-1 flex space-x-3 text-xl">
            <Link
              href="https://github.com/colin-rumball"
              className="hover:text-ff-pale-cyan"
              target="_blank"
            >
              <FiGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/colinrumball/"
              className="hover:text-ff-pale-cyan"
              target="_blank"
            >
              <FiLinkedin />
            </Link>
          </div>
          <ArrowLink href={"mailto:hello@colinrumball.com"} target="_blank">
            Contact
          </ArrowLink>
          <ArrowLink href={"/resume.pdf"} target="_blank">
            Download CV
          </ArrowLink>
        </div>
      </section>
    );
  }

  const Footer = Projects[selectedProject].footer!;
  return <Footer />;
};

const Header = () => {
  const { selectedProject } = useProjectSelector((state) => ({
    selectedProject: state.selectedProject,
  }));
  const [exitY, setExitY] = useState(50);

  const getAnimYExit = useCallback(() => {
    if (selectedProject !== null) {
      const currentProjNode = document.querySelector(`#${selectedProject}`);
      const rect = currentProjNode?.getBoundingClientRect();
      if (rect) {
        return clamp(
          1,
          99,
          ((rect.top + rect.height / 2) / window.innerHeight) * 100,
        );
      }
    }

    return 50;
  }, [selectedProject]);

  const animYEnter = useMemo(() => {
    return getAnimYExit();
  }, [selectedProject]);

  useEffect(() => {
    const onScroll = () => {
      setExitY(getAnimYExit());
    };

    if (selectedProject !== null) {
      setExitY(getAnimYExit());
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [selectedProject]);

  return (
    <motion.header
      initial="default"
      animate={selectedProject === null ? "default" : "project"}
      className={cn(
        "z-header flex flex-col gap-5 pt-12 transition-colors lg:sticky lg:top-0 lg:-mb-28 lg:h-screen lg:w-4/12 lg:pl-12 lg:pr-6",
        selectedProject && Projects[selectedProject].foreground,
      )}
    >
      <AnimatePresence mode="wait">
        {selectedProject !== null && (
          <motion.div
            key={selectedProject}
            variants={{
              default: {
                clipPath: `circle(0 at 100% ${animYEnter}%)`,
                transition: {
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                },
              },
              project: {
                clipPath: `circle(110% at 100% ${animYEnter}%)`,
                transition: {
                  type: "spring",
                  stiffness: 20,
                  restDelta: 2,
                },
              },
            }}
            exit={{
              clipPath: `circle(0 at 100% ${exitY}%)`,
              transition: {
                delay: 0,
                type: "spring",
                duration: 0.2,
              },
            }}
            onAnimationComplete={() => {
              setExitY(getAnimYExit());
            }}
            className="absolute inset-y-0 right-0 -z-30 w-screen overflow-hidden"
          >
            {Projects[selectedProject].background}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section id="info" className="px-4 lg:px-0">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Colin Rumball
        </h1>
        <div className="h-[28px] text-lg font-medium tracking-tight sm:text-xl">
          {!selectedProject && <>Web Developer</>}
          {!!selectedProject && <>{Projects[selectedProject].jobTitle}</>}
        </div>
      </motion.section>

      <TechDisplay />

      <HeaderAboutMe />

      <HeaderFooter />
    </motion.header>
  );
};
export default Header;
