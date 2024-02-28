"use client";

import { cn } from "@/lib/utils";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import useProjectSelector from "@/lib/hooks/useProjectSelector";
import { Projects } from "@/lib/projects-data";
import { Separator } from "./ui/separator";
import { AnimatePresence, clamp, motion } from "framer-motion";
import Link, { ArrowLink } from "./ui/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Headline from "./headline";
import TechDisplaySection from "./tech-display-section";

const AnimatedProjectBackground = () => {
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

  // update exitY on scroll
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
    <AnimatePresence>
      {selectedProject !== null && (
        <motion.div
          key={selectedProject}
          animate={selectedProject ? "project" : "noProject"}
          initial="noProject"
          variants={{
            noProject: {
              clipPath: `circle(0 at 100% ${animYEnter}%)`,
              transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 7,
              },
            },
            project: {
              clipPath: `circle(110% at 100% ${animYEnter}%)`,
              transition: {
                type: "spring",
                stiffness: 25,
                restDelta: 2,
              },
            },
          }}
          exit={{
            clipPath: `circle(0 at 100% ${exitY}%)`,
            transition: {
              delay: 0.1,
              type: "spring",
              duration: 0.25,
            },
          }}
          onAnimationComplete={() => {
            setExitY(getAnimYExit());
          }}
          className="absolute inset-y-0 right-0 -z-30 w-screen overflow-hidden bg-slate-500"
        >
          {Projects[selectedProject].background}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NameAndOccupation = () => {
  const { selectedProject } = useProjectSelector((state) => ({
    selectedProject: state.selectedProject,
  }));

  return (
    <section id="info" className="px-4 md:px-0">
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0 } }}
        transition={{ duration: 0.2 }}
        className="overflow-visible whitespace-nowrap text-4xl font-bold tracking-tight lg:text-5xl"
      >
        Colin Rumball
      </motion.h1>

      <AnimatePresence mode="wait">
        <motion.h2
          key={
            !selectedProject
              ? "Full-Stack Developer"
              : Projects[selectedProject].jobTitle
          }
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
          className="h-[28px] text-lg tracking-tight sm:text-xl"
        >
          {!selectedProject && (
            <span key="Full-Stack Developer">Full-Stack Developer</span>
          )}
          {!!selectedProject && (
            <span key={Projects[selectedProject].jobTitle}>
              {Projects[selectedProject].jobTitle}
            </span>
          )}
        </motion.h2>
      </AnimatePresence>
    </section>
  );
};

const AboutMe = () => {
  return (
    <div className="">
      {/* <Headline as="h3">About</Headline> */}
      <div className="flex flex-col gap-4 px-4 md:px-0">
        <p className="">
          With a career working in both mobile game development and web
          development, I've grown a diverse skillset spanning frontend and
          backend technologies. Passionate about tackling creative challenges in
          all stages of product development, from concept ideation to
          implementation, I thrive while learning new technologies & employing
          innovative approaches to problem-solving.
        </p>
        <p className="">
          When not coding, I enjoy practicing yoga, camping, and traveling the
          world with my wife. Recently, I embarked on a different kind of
          challenge away from the desk: founding a small local culinary mushroom
          farm, allowing me to explore sustainable agriculture and connect with
          my local community.
        </p>
      </div>
    </div>
  );
};

const BodyContent = () => {
  const { selectedProject } = useProjectSelector((state) => ({
    selectedProject: state.selectedProject,
  }));
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        if (entries.length === 0 || !entries[0]) return;
        const observedHeight = entries[0].contentRect.height;
        setHeight(observedHeight);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [containerRef.current]);

  const projectOpts = selectedProject && Projects[selectedProject];
  return (
    <motion.section
      id={selectedProject ? "project-description" : "about"}
      aria-label={selectedProject ? "Project description" : "About me"}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 0.7, ease: "easeInOut" },
      }}
      className="flex flex-col gap-4"
    >
      <motion.div
        animate={{ height }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            ref={containerRef}
            key={selectedProject ?? "about"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, delay: 0.1 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.1, delay: 0 },
            }}
            transition={{ duration: 0.2, delay: 0.5, ease: "easeInOut" }}
            className="flex flex-col gap-2"
          >
            {!projectOpts ? (
              <AboutMe />
            ) : (
              <>
                <div className="flex flex-col text-left text-xs font-semibold tracking-wide">
                  <motion.h2
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
                    className="mb-1 align-top text-xl font-bold leading-5 tracking-tight"
                  >
                    {projectOpts.name}
                  </motion.h2>
                  <motion.h4
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { delay: 0.15 } }}
                    className="font-bold uppercase tracking-normal"
                  >
                    {projectOpts.jobTitle}
                  </motion.h4>
                  <motion.h5
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                    className="font-bold uppercase"
                  >
                    {projectOpts.date}
                  </motion.h5>
                </div>

                <div className="">
                  <projectOpts.longDescription />
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

const ExternalLinks = () => {
  const { selectedProject } = useProjectSelector((state) => ({
    selectedProject: state.selectedProject,
  }));

  const ProjectLinks = selectedProject
    ? Projects[selectedProject].externalLinks
    : undefined;
  return (
    <motion.section
      id={ProjectLinks ? "project-links" : "contact"}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.6, delay: 0.9, ease: "easeInOut" },
      }}
    >
      <AnimatePresence>
        <motion.div
          key={selectedProject ?? "contact"}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2, delay: 0.3, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.1, delay: 0, ease: "easeInOut" },
          }}
          className="flex flex-col gap-2"
        >
          {ProjectLinks ? (
            <ProjectLinks />
          ) : (
            <div className="flex flex-col gap-1 px-4 md:px-0">
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
                hello@colinrumball.com
              </ArrowLink>
              <ArrowLink href={"/colin-rumball-resume.pdf"} target="_blank">
                Download CV
              </ArrowLink>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

const Header = () => {
  const { selectedProject } = useProjectSelector((state) => ({
    selectedProject: state.selectedProject,
  }));

  return (
    <header
      className={cn(
        "relative z-header flex flex-col gap-4 pt-[3.25rem] transition-colors md:sticky md:top-0 md:h-screen md:w-4/12 lg:pr-8",
        selectedProject && Projects[selectedProject].foreground,
      )}
    >
      <AnimatedProjectBackground />
      <NameAndOccupation />
      <TechDisplaySection />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 0.65, ease: "easeInOut" },
        }}
      >
        <Separator className="hidden bg-current md:block" />
      </motion.div>
      <div
        className="flex flex-col gap-4 overflow-y-auto md:mr-2 md:pr-2 lg:mr-0 lg:pb-0 lg:pr-0"
        style={{ scrollbarGutter: "stable" }}
      >
        <BodyContent />
      </div>
      <div className="flex flex-grow flex-col gap-4 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 0.75, ease: "easeInOut" },
          }}
        >
          <Separator className="hidden bg-current md:block" />
        </motion.div>
        <ExternalLinks />
      </div>
    </header>
  );
};

export default Header;
