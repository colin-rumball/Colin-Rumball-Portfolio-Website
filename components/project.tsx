"use client";

import { cn } from "@/lib/utils";
import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
  FC,
} from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import useClickOutside from "@/lib/hooks/useClickOutside";
import { ProjectOpts } from "@/lib/projects-data";
import useProjectSelector from "@/lib/hooks/useProjectSelector";
import { stat } from "fs";

const ProjectHoveredBackground = ({
  thisProjectSelected,
}: {
  thisProjectSelected: boolean;
}) => {
  return (
    <div
      className={cn(
        "absolute -inset-4 -z-10 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:block lg:group-hover:bg-ff-green/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg",
        thisProjectSelected && "bg-ff-green/10",
      )}
    />
  );
};

type AsideContentProps = { opts: ProjectOpts; thisProjectSelected: boolean };

const AsideContent = ({ opts, thisProjectSelected }: AsideContentProps) => {
  const ShortDescription = opts.shortDescription;
  return (
    <aside
      className={cn(
        "z-10 transition-all",
        !thisProjectSelected && "duration-300 lg:w-1/3",
        thisProjectSelected && "w-0 overflow-hidden duration-300",
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
        className="absolute inset-y-0 left-2/3 right-0 flex overflow-hidden text-left text-xs font-semibold tracking-wide lg:flex-col"
      >
        {opts && (
          <>
            <h3
              className={cn(
                "mb-2 align-top text-lg font-medium leading-5 tracking-tight group-hover:text-ff-green",
              )}
            >
              {opts.name}
            </h3>
            <h4 className="uppercase tracking-normal">{opts.jobTitle}</h4>
            <h5 className="uppercase">{opts.date}</h5>
            <div className="my-2 max-h-[250px] min-w-full text-sm font-medium leading-snug">
              <ShortDescription />
            </div>
          </>
        )}
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
        closed: { marginBottom: "0" },
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
            <video autoPlay muted loop playsInline className="w-full">
              <source src={video} type="video/mp4" />
            </video>
          </CarouselItem>
          {!!slides &&
            slides.map((slide, i) => (
              <CarouselItem key={i}>{slide}</CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
      {!!api && (
        <motion.div
          className={cn(
            "absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-2 opacity-0 transition-opacity duration-100",
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
              `h-4 w-4 cursor-pointer rounded-full border border-dashed border-ff-green transition-all hover:scale-105 hover:border-solid`,
              currentSlide === 0 && "scale-110 border-2 border-solid",
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
                "h-4 w-4 cursor-pointer rounded-full border border-dashed border-ff-green transition-all hover:scale-105 hover:border-solid",
                currentSlide === i + 1 && "scale-110 border-2 border-solid",
              )}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

const ProjectExtendedContent = ({
  ExpandedDescription,
  thisProjectSelected,
}: {
  ExpandedDescription: FC;
  thisProjectSelected: boolean;
}) => {
  if (!thisProjectSelected) return null;
  return (
    <motion.div
      variants={{
        thisProjectSelected: { height: "auto" },
        closed: { height: "0" },
      }}
      initial="closed"
      animate={thisProjectSelected ? "thisProjectSelected" : "closed"}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
      className={cn("w-full overflow-hidden")}
    >
      <ExpandedDescription />
    </motion.div>
  );
};

export type ProjectProps = {
  opts: ProjectOpts;
};

const Project = ({ opts }: ProjectProps) => {
  const { selectedProject, setSelectedProject } = useProjectSelector(
    (state) => state,
  );
  const noProjectSelected = selectedProject === null;
  const thisProjectSelected = selectedProject === opts.id;
  const ref = useRef<HTMLLIElement>(null);

  const clickOutsideCallback = useCallback(() => {
    if (selectedProject === opts.id) {
      setSelectedProject(null);
    }
  }, [selectedProject, opts.name, setSelectedProject]);

  // useClickOutside(ref, clickOutsideCallback);

  useEffect(() => {
    const divElement = ref.current;

    if (divElement && thisProjectSelected) {
      // Function that scrolls the div into view
      const scrollIntoView = () => {
        divElement.scrollIntoView({ behavior: "smooth" });
      };

      // Create a MutationObserver to observe changes in the div
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === "childList" || mutation.type === "attributes") {
            scrollIntoView();
          }
        }
      });

      // Start observing the div for configured mutations
      observer.observe(divElement, {
        childList: true, // Observe direct children changes
        attributes: true, // Observe attribute changes
        subtree: true, // Observe all descendant elements as well
      });

      return () => observer.disconnect();
    }
  }, [thisProjectSelected]);

  return (
    <li
      ref={ref}
      className={cn(
        "group relative w-full scroll-m-36 transition-all duration-300",
        "group-hover/list:hover:opacity-100 group-hover/list:hover:blur-0",
        thisProjectSelected && "z-selected-project -translate-y-4 blur-0",
        !thisProjectSelected &&
          "cursor-pointer hover:-translate-y-4 lg:group-hover/list:opacity-50 lg:group-hover/list:blur-sm",
        !noProjectSelected && !thisProjectSelected && "opacity-50 blur-sm",
      )}
      onClick={() => {
        if (selectedProject !== opts.id) {
          setSelectedProject(opts.id);
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
          animate={thisProjectSelected ? "open" : "closed"}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
          onAnimationComplete={(definition) => {
            if (definition === "open") {
              // ref.current?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={cn("flex")}
        >
          <ProjectVideoCarousel
            thisProjectSelected={thisProjectSelected}
            video={opts.video}
            slides={opts.slides}
          />
          <AsideContent opts={opts} thisProjectSelected={thisProjectSelected} />
        </motion.div>
        {/* <ProjectExtendedContent
          ExpandedDescription={opts.longDescription}
          thisProjectSelected={thisProjectSelected}
        /> */}
      </div>
    </li>
  );
};

export default Project;
