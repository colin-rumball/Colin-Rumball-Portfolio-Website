import {
  BsCaretRightFill,
  BsCaretLeftFill,
  BsBriefcase,
  BsCaretUpFill,
  BsArrowRight,
} from "react-icons/bs";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { PiRocket } from "react-icons/pi";
import { TbMushroom } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import TLPImage from "@/../public/images/TLP.png";
// import LEGOImage from "@/../public/images/lego.png";
// import UNOImage from "@/../public/images/uno.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="min-h-screen lg:flex-1 lg:pt-20">
      <section
        id="experience"
        className="mb-20 scroll-mt-16"
        aria-label="My experience"
      >
        <h3 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-12 lg:py-0 lg:opacity-0">
          <strong>Experience</strong>
        </h3>
        <div className="relative flex flex-col pb-6">
          {/* React */}
          <div className="relative grid grid-cols-2 gap-28 py-4">
            {/* Vertical line */}
            <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-ff-navy-blue bg-opacity-70" />
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ff-navy-blue bg-ff-cream p-4 text-3xl">
              <GrReactjs />
            </span>
            <div className="relative rounded-lg border-2 border-ff-navy-blue px-6 py-4">
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <BsCaretRightFill />
              </div>
              <h3 className="font-semibold capitalize">Frontend Engineer</h3>
              <p className="">Roseneath, ON</p>
              <p className="">
                Began working full-time as a frontend engineer, building
                websites and web apps.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <span className="">2023</span>
            </div>
            <div className="absolute inset-x-0 -top-3 flex justify-center text-center text-ff-navy-blue opacity-70">
              <BsCaretUpFill />
            </div>
          </div>

          {/* Mushrooms */}
          <div className="relative grid grid-cols-2 gap-28 py-4">
            {/* Vertical line */}
            <div className="absolute inset-y-0 left-1/2 -z-30 w-1 -translate-x-1/2 bg-ff-navy-blue bg-opacity-70" />
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ff-navy-blue bg-ff-cream p-4 text-3xl">
              <TbMushroom />
            </span>
            <div className="flex flex-col items-end justify-center">
              <span className="">2020</span>
            </div>
            <div className="relative rounded-lg border-2 border-ff-navy-blue px-6 py-4">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                <BsCaretLeftFill />
              </div>
              <h3 className="font-semibold capitalize">
                Founder & Operations Manager
              </h3>
              <p className="">Roseneath, ON</p>
              <p className="">
                Started my own indoor mushroom farm, growing gourmet mushrooms
                for restaurants and farmers markets.
              </p>
            </div>
          </div>

          {/* Gameplay Dev */}
          <div className="relative grid grid-cols-2 gap-28 py-4">
            {/* Vertical line */}
            <div className="absolute inset-y-0 left-1/2 -z-30 w-1 -translate-x-1/2 bg-ff-navy-blue bg-opacity-70" />
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ff-navy-blue bg-ff-cream p-4 text-3xl">
              <PiRocket />
            </span>
            <div className="relative rounded-lg border-2 border-ff-navy-blue px-6 py-4">
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <BsCaretRightFill />
              </div>
              <h3 className="font-semibold capitalize">
                Senior Gameplay Developer
              </h3>
              <p className="">Toronto, ON</p>
              <p className="">
                Promoted to senior gameplay programmer to work on the LEGO game.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <span className="">2017</span>
            </div>
          </div>

          {/* UI Dev */}
          <div className="relative grid grid-cols-2 gap-28 py-4">
            {/* Vertical line */}
            <div className="absolute inset-y-0 left-1/2 -z-30 w-1 -translate-x-1/2 bg-ff-navy-blue bg-opacity-70" />
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ff-navy-blue bg-ff-cream p-4 text-3xl">
              <BsBriefcase />
            </span>
            <div className="flex flex-col items-end justify-center">
              <span className="">2015</span>
            </div>
            <div className="relative rounded-lg border-2 border-ff-navy-blue px-6 py-4">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                <BsCaretLeftFill />
              </div>
              <h3 className="font-semibold capitalize">Junior UI Developer</h3>
              <p className="">Toronto, ON</p>
              <p className="">
                Hired as a UI developer to work on the UNO game.
              </p>
            </div>
          </div>

          {/* GEORGE BROWN */}
          <div className="relative grid grid-cols-2 gap-28 py-4">
            {/* Vertical line */}
            <div className="absolute bottom-1/2 left-1/2 top-0 -z-30 w-1 -translate-x-1/2 bg-ff-navy-blue bg-opacity-70" />
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ff-navy-blue bg-ff-cream p-4 text-3xl">
              <LiaGraduationCapSolid />
            </span>
            <div className="relative rounded-lg border-2 border-ff-navy-blue px-6 py-4">
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <BsCaretRightFill />
              </div>
              <h3 className="font-semibold capitalize">
                Graduated George Brown College
              </h3>
              <p className="">Toronto, ON</p>
              <p className="">Graduated after 3 years of study.</p>
            </div>
            <div className="flex flex-col justify-center">
              <span className="">2015</span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="scroll-mt-16"
        aria-label="Things I've built"
      >
        <h3 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-12 lg:py-0 lg:opacity-0">
          <strong>Projects</strong>
        </h3>
        <Project
          title="THE LONELINESS PROJECT"
          technologies={[
            "TYPESCRIPT",
            "REACT",
            "STYLE-COMPONENTS",
            "PRISMA",
            "GRAPHQL",
            "NEXTJS",
          ]}
          image={{ src: TLPImage, alt: "The Loneliness Project" }}
          links={[
            {
              label: (
                <>
                  VIEW WEBSITE <FiExternalLink />
                </>
              ),
              href: "https://www.thelonelinessproject.org/",
            },
            {
              label: (
                <>
                  VIEW INFO <FiGithub />
                </>
              ),
              href: "https://github.com/colin-rumball/The-Loneliness-Project",
            },
          ]}
        />
      </section>
      {/* <section id="posts" className="scroll-mt-16" aria-label="Posts">
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
      </section> */}
    </main>
  );
}
