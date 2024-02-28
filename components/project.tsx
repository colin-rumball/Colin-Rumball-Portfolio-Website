"use client";

import { cn } from "@/lib/utils";
import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
  type FC,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { type EmblaCarouselType, type EmblaEventType } from "embla-carousel";
import { type ProjectOpts } from "@/lib/projects-data";
import useProjectSelector from "@/lib/hooks/useProjectSelector";
import { Button } from "./ui/button";
import { MdOutlineClose } from "react-icons/md";
import useWindowDimensions from "@/lib/hooks/useWindowDimensions";
import { Separator } from "./ui/separator";
import TechDisplay from "./tech-display";

const CloseButton = ({
  thisProjectSelected,
}: {
  thisProjectSelected: boolean;
}) => {
  const { setSelectedProject } = useProjectSelector((state) => ({
    setSelectedProject: state.setSelectedProject,
  }));
  if (!thisProjectSelected) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeInOut", duration: 0.7, delay: 0.3 },
      }}
      className="absolute -right-6 -top-16 z-40 hidden md:block"
    >
      <Button
        variant={"ghost"}
        className="text-3xl"
        onClick={() => {
          document.body.style.overflow = "";
          setSelectedProject(null);
        }}
      >
        <MdOutlineClose />
      </Button>
    </motion.div>
  );
};

const ProjectHoveredBackground = ({
  thisProjectSelected,
}: {
  thisProjectSelected: boolean;
}) => {
  return (
    <div
      className={cn(
        "absolute -inset-4 -z-10 hidden rounded-lg transition-all duration-500 motion-reduce:transition-none md:block",
        !thisProjectSelected &&
          "md:group-hover:bg-ff-green/10 md:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] md:group-hover:drop-shadow-lg",
        thisProjectSelected &&
          "shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg duration-1000 md:bg-slate-800/40",
      )}
    />
  );
};

const ProjectSummary = ({ opts }: { opts: ProjectOpts }) => {
  const ShortDescription = opts.shortDescription;
  return (
    <div className="flex flex-col text-left text-xs font-semibold tracking-wide">
      <h3
        className={cn(
          "align-top text-lg font-bold leading-5 tracking-tight group-hover:text-ff-green",
        )}
      >
        {opts.name}
      </h3>
      <h4 className="font-bold uppercase tracking-normal">{opts.jobTitle}</h4>
      <h5 className="font-bold uppercase">{opts.date}</h5>
      <div className="my-2 hidden max-h-[250px] min-w-full text-base font-medium leading-5 sm:block md:overflow-y-auto lg:overflow-y-visible">
        <ShortDescription />
      </div>
    </div>
  );
};

const AsideContent = ({
  opts,
  thisProjectSelected,
}: {
  opts: ProjectOpts;
  thisProjectSelected: boolean;
}) => {
  return (
    <aside
      className={cn(
        "z-10 transition-all",
        !thisProjectSelected && "duration-300 md:w-1/3",
        thisProjectSelected && "w-0 overflow-visible duration-300",
      )}
      aria-label={opts?.name}
    >
      <motion.div
        variants={{
          thisProjectSelected: { opacity: 0 },
          closed: { opacity: 1 },
        }}
        initial="closed"
        animate={thisProjectSelected ? "thisProjectSelected" : "closed"}
        transition={{ duration: 0.1, ease: "easeInOut", delay: 0 }}
        className="absolute inset-y-0 left-2/3 right-0 flex flex-col overflow-visible pl-2 pt-2 md:p-0"
      >
        {opts && <ProjectSummary opts={opts} />}
      </motion.div>
    </aside>
  );
};

const ProjectVideoCarousel = ({
  video,
  slides,
  thisProjectSelected,
}: {
  video: string;
  slides?: ReactNode[];
  thisProjectSelected: boolean;
}) => {
  const [carouselActive, setCarouselActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const onCarouselScroll = (
      api: EmblaCarouselType,
      eventName: EmblaEventType,
    ) => {
      if (eventName === "select") {
        setCurrentSlide(api.selectedScrollSnap());
      }
    };

    api.on("select", onCarouselScroll);

    if (thisProjectSelected) {
      setCarouselActive(true);
      // api.scrollTo(1, false);
    } else {
      api.scrollTo(0, true);
      setCarouselActive(false);
    }

    return () => {
      api.off("select", onCarouselScroll);
    };
  }, [thisProjectSelected]);

  return (
    <motion.div
      variants={{
        thisProjectSelected: { width: "100%", marginBottom: "2rem" },
        closed: { width: "66.666%", marginBottom: "0" },
      }}
      initial="closed"
      animate={thisProjectSelected ? "thisProjectSelected" : "closed"}
      transition={{ duration: 0.1, ease: "easeInOut", delay: 0 }}
      className={cn(
        "relative z-20 flex aspect-video w-2/3 flex-grow flex-col transition-all duration-300",
      )}
    >
      <Carousel setApi={setApi} opts={{ active: carouselActive }}>
        <CarouselContent className="items-center">
          <CarouselItem key={video}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className={cn(
                "w-full rounded-lg",
                thisProjectSelected && "cursor-grab active:cursor-grabbing",
              )}
            >
              <source src={video} type="video/mp4" />
            </video>
          </CarouselItem>
          {!!slides &&
            slides.map((slide, i) => (
              <CarouselItem
                key={i}
                className={cn(
                  "",
                  thisProjectSelected && "cursor-grab active:cursor-grabbing",
                )}
              >
                {slide}
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
      {!!api && (
        <motion.div
          className={cn(
            "absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 opacity-0 transition-opacity duration-100",
            thisProjectSelected && "opacity-100 duration-1000",
          )}
        >
          {/* INDICATORS */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              api.scrollTo(0, true);
            }}
            className={cn(
              `h-4 w-4 cursor-pointer rounded-full border border-foreground opacity-40 transition-all hover:scale-105 hover:border-solid hover:opacity-75 md:border-ff-cream`,
              currentSlide === 0 &&
                "scale-110 border-2 border-solid opacity-100",
            )}
          />
          {slides?.map((slide, i) => (
            <div
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                api.scrollTo(i + 1, true);
              }}
              className={cn(
                "h-4 w-4 cursor-pointer rounded-full border border-foreground opacity-40 transition-all hover:scale-105 hover:border-solid hover:opacity-75 md:border-ff-cream",
                currentSlide === i + 1 &&
                  "scale-110 border-2 border-solid opacity-100",
              )}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

const ProjectExtendedContent = ({ projOpts }: { projOpts: ProjectOpts }) => {
  const ExpandedDescription = projOpts.longDescription;
  const ExternalLinks = projOpts.externalLinks;
  return (
    <motion.div
      initial={{ height: "0" }}
      animate={{ height: "auto" }}
      exit={{ height: "0" }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
      className={cn(
        "flex h-auto w-full flex-col gap-4 overflow-hidden px-1 md:hidden",
      )}
    >
      <ProjectSummary opts={projOpts} />
      <TechDisplay techList={projOpts.tech} />
      <ExpandedDescription />
      {ExternalLinks && <ExternalLinks />}
      <Separator className="bg-current" />
    </motion.div>
  );
};

const Project = ({ index, opts }: { index: number; opts: ProjectOpts }) => {
  const { selectedProject, setSelectedProject } = useProjectSelector(
    (state) => state,
  );
  const [showExtendedContent, setShowExtendedContent] = useState(false);
  const windowDimensions = useWindowDimensions();
  const noProjectSelected = selectedProject === null;
  const thisProjectSelected = selectedProject === opts.id;
  const ref = useRef<HTMLLIElement>(null);

  const [top, setTop] = useState(0);
  const setPosition = useCallback(() => {
    if (!ref.current) return;
    const liTop = ref.current.getBoundingClientRect().top;
    setTop(-liTop + 147);
  }, [ref.current]);

  useEffect(() => {
    const removeListeners = () => {
      window.removeEventListener("scroll", setPosition);
      window.removeEventListener("resize", setPosition);
    };

    if (!selectedProject || !ref.current) {
      removeListeners();
      return;
    }

    window.addEventListener("scroll", setPosition);
    window.addEventListener("resize", setPosition);
    return removeListeners;
  }, [selectedProject, ref.current]);

  useEffect(() => {
    if (showExtendedContent) {
      const top = ref.current?.offsetTop;
      if (!top) {
        console.error("No top value found");
        return;
      }
      window.scrollTo({
        top: top - 106,
      });
    }
  }, [showExtendedContent]);

  useEffect(() => {
    if (windowDimensions.width && windowDimensions.width > 768) {
      setShowExtendedContent(false);
    } else if (windowDimensions.width && windowDimensions.width < 768) {
      document.body.style.overflow = "";
      setSelectedProject(null);
    }
  }, [windowDimensions.width]);

  return (
    <motion.li
      ref={ref}
      id={opts.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "linear",
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.7 + 0.25 * index,
      }}
      className={cn(
        "md:group relative aspect-[16/6] w-full scroll-m-36 transition-all duration-300",
        "group-hover/list:hover:opacity-100 group-hover/list:hover:blur-0",
        thisProjectSelected &&
          "pointer-events-none z-selected-project blur-0 md:-translate-y-4",
        !thisProjectSelected &&
          "cursor-pointer md:hover:-translate-y-4 md:group-hover/list:opacity-50",
        noProjectSelected &&
          !thisProjectSelected &&
          "md:group-hover/list:blur-sm",
        !noProjectSelected && !thisProjectSelected && "opacity-50 blur-xl",
      )}
    >
      <motion.button
        initial={{ top: 0 }}
        animate={{
          top: thisProjectSelected ? `${top}px` : "0",
        }}
        transition={{
          duration: thisProjectSelected ? 0.5 : 0.25,
          type: "linear",
          ease: "easeOut",
          delay: 0,
        }}
        className={cn(
          "pointer-events-auto md:absolute",
          thisProjectSelected && "z-selected-project",
        )}
        onClick={() => {
          // if small screen, scroll to top of the project, expand project and video
          if (windowDimensions.width && windowDimensions.width < 768) {
            setShowExtendedContent((prev) => !prev);
          } else {
            if (selectedProject !== opts.id) {
              document.body.style.overflow = "hidden";
              setSelectedProject(opts.id);
              setPosition();
            }
          }
        }}
      >
        <ProjectHoveredBackground thisProjectSelected={thisProjectSelected} />
        <div className="flex w-full flex-col">
          <motion.div
            variants={{
              open: { gap: "0" },
              closed: { gap: "1.5rem" },
            }}
            initial="closed"
            animate={
              thisProjectSelected || showExtendedContent ? "open" : "closed"
            }
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
            className={cn("flex flex-col md:flex-row")}
          >
            <ProjectVideoCarousel
              thisProjectSelected={thisProjectSelected || showExtendedContent}
              video={opts.video}
              slides={opts.slides}
            />
            <AsideContent
              opts={opts}
              thisProjectSelected={thisProjectSelected || showExtendedContent}
            />
          </motion.div>
          <AnimatePresence mode="wait">
            {showExtendedContent && <ProjectExtendedContent projOpts={opts} />}
          </AnimatePresence>
        </div>
        <CloseButton thisProjectSelected={thisProjectSelected} />
      </motion.button>
    </motion.li>
  );
};

export default Project;
