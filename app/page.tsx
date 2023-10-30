import { BsCaretRightFill, BsCaretLeftFill, BsBriefcase } from "react-icons/bs";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { PiRocket } from "react-icons/pi";
import { TbMushroom } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";

export default function Home() {
  return (
    <main className="min-h-screen md:flex-1 md:pt-20">
      <section id="about" className="scroll-mt-16" aria-label="About me">
        <h3 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:sr-only md:relative md:top-auto md:mx-auto md:w-full md:px-12 md:py-0 md:opacity-0">
          <strong>About</strong>
        </h3>
        <p className="mb-4">
          I&apos;ve been passionate about software development since high
          school, and being a lifelong gamer, I originally sought an outlet for
          my interest in the games industry, studying game development at school
          and then working in the mobile games industry.
        </p>
        <p className="mb-4">
          In recent years, I became captivated by the creativity and challenge
          of web development, and I&apos;ve found a new sense of enjoyment from
          this different medium, a new canvas for my passion for problem
          solving. In my spare time I find myself dabbling in side projects,
          searching for a more streamlined development process, and finding that
          perfect stack 🥞
        </p>
        <p className="mb-4">
          Besides web and games I enjoy climbing mountains, doing yoga,
          tinkering with tech, camping, and travelling with my wife.
        </p>
      </section>
      <section
        id="experience"
        className="mb-20 scroll-mt-16"
        aria-label="My experience"
      >
        <h3 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:sr-only md:relative md:top-auto md:mx-auto md:w-full md:px-12 md:py-0 md:opacity-0">
          <strong>Experience</strong>
        </h3>
        <div className="relative flex flex-col py-6">
          {/* Vertical line */}
          <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-slate-800 bg-opacity-50" />
          {/* GEORGE BROWN */}
          <div className="relative grid grid-cols-2 gap-28 py-4">
            <span className="background-site-background absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-800 p-4 text-3xl">
              <LiaGraduationCapSolid />
            </span>
            <div className="relative rounded-lg border-2 border-slate-700 px-6 py-4">
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

          {/* UI Dev */}
          <div className="relative grid grid-cols-2 gap-28 py-4">
            <span className="background-site-background absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-800 p-4 text-3xl">
              <BsBriefcase />
            </span>
            <div className="flex flex-col items-end justify-center">
              <span className="">2015</span>
            </div>
            <div className="relative rounded-lg border-2 border-slate-700 px-6 py-4">
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

          {/* Gameplay Dev */}
          <div className="relative grid grid-cols-2 gap-28 py-4">
            <span className="background-site-background absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-800 p-4 text-3xl">
              <PiRocket />
            </span>
            <div className="relative rounded-lg border-2 border-slate-700 px-6 py-4">
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

          {/* Mushrooms */}
          <div className="relative grid grid-cols-2 gap-28 py-4">
            <span className="background-site-background absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-800 p-4 text-3xl">
              <TbMushroom />
            </span>
            <div className="flex flex-col items-end justify-center">
              <span className="">2020</span>
            </div>
            <div className="relative rounded-lg border-2 border-slate-700 px-6 py-4">
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

          {/* React */}
          <div className="relative grid grid-cols-2 gap-28 py-4">
            <span className="background-site-background absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-800 p-4 text-3xl">
              <GrReactjs />
            </span>
            <div className="relative rounded-lg border-2 border-slate-700 px-6 py-4">
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
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="scroll-mt-16"
        aria-label="Things I've built"
      >
        <div>Projects</div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
      </section>
      <section id="posts" className="scroll-mt-16" aria-label="Posts">
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
      </section>
    </main>
  );
}
