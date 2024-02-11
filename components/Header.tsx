"use client";

import Link from "next/link";
import { BsArrowRight, BsDownload, BsArrowRightShort } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { UrlObject } from "url";
import { TypeAnimation } from "react-type-animation";
import RevealOnScroll from "./RevealOnScroll";
import {
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbMushroom,
} from "react-icons/tb";

const NavItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <li
      className={cn(
        "group/item origin-left cursor-pointer transition-all ease-in-out",
        "group-hover/list:scale-125 group-hover/list:pl-2 group-hover/list:opacity-40 group-hover/list:blur-sm",
        "group-hover/list:hover:scale-150 group-hover/list:hover:pl-6 group-hover/list:hover:opacity-100 group-hover/list:hover:blur-0",
      )}
    >
      <Link className="relative p-1" href={href}>
        <div
          className={cn(
            "absolute left-0 top-0 -z-10 h-full w-full origin-right scale-x-0 bg-ff-pale-cyan transition-transform duration-700",
            "group-hover/item:origin-left group-hover/item:scale-x-100",
          )}
        />
        {label}
      </Link>
    </li>
  );
};

interface HeaderProps extends React.ComponentPropsWithoutRef<"header"> {}

const Header = (props: HeaderProps) => {
  return (
    <header
      {...props}
      className="lg:sticky lg:top-0 lg:h-screen lg:w-5/12 lg:pl-12 lg:pr-6 lg:pt-12"
    >
      <div className="mb-10">
        <RevealOnScroll duration="500ms">
          <h1 className="-ml-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Colin Rumball
          </h1>
        </RevealOnScroll>
        <RevealOnScroll duration="700ms">
          <TypeAnimation
            sequence={[
              400,
              // Same substring at the start will only be typed out once, initially
              "I'm a UI Engineer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "I'm a Game Programmer",
              1000,
              "I'm a Mushroom Farmer",
              1000,
              "I'm a Web Developer",
              1000,
              "I'm a Problem Solver",
              1000,
            ]}
            speed={40}
            wrapper="h2"
            className="mt-3 h-[60px] text-lg font-medium tracking-tight sm:text-xl"
            deletionSpeed={70}
            cursor={false}
            repeat={Infinity}
          />
        </RevealOnScroll>
        <RevealOnScroll duration="1s">
          <div className="flex space-x-3 text-xl">
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
        </RevealOnScroll>
      </div>

      <section className="mb-10">
        <h3 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-12 lg:py-0 lg:opacity-0">
          <strong>Tech</strong>
        </h3>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-4xl">
          <span className="flex items-end text-5xl">
            <TbBrandTypescript />
            <span className="text-xl">TypeScript</span>
          </span>
          <span className="flex items-end text-5xl">
            <TbBrandReact />
            <span className="text-xl">React</span>
          </span>
          <span className="flex items-end text-5xl">
            <TbBrandNextjs />
            <span className="text-xl">
              Next<span className="text-xs">.js</span>
            </span>
          </span>
          <span className="flex items-end text-5xl">
            <TbBrandPrisma />
            <span className="text-xl">Prisma</span>
          </span>
          <span className="flex items-end text-5xl">
            <TbBrandTailwind />
            <span className="text-xl">
              Tailwind<span className="text-xs">css</span>
            </span>
          </span>
        </div>
      </section>

      <section id="about" className="relative" aria-label="About me">
        <h3 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-12 lg:py-0 lg:opacity-0">
          <strong>About</strong>
        </h3>
        <div>
          <p className="mb-4">
            I have a strong passion for software development that has evolved
            over time. Initially drawn to the gaming industry, I pursued game
            development and worked in mobile gaming. In recent years, I&apos;ve
            shifted my focus to web development, embracing its creative
            challenges.
          </p>
          <p className="mb-4">
            When not immersed in my work, I enjoy refining my tech skills,
            partaking in personal interests like hiking, yoga, tech tinkering,
            camping, and globe-trotting with my wife. Notably, I embarked on a
            remarkable journey as the founder and operator of a gourmet culinary
            mushroom farm, a venture that spanned three enriching years and
            deepened my understanding of entrepreneurship and sustainable
            agriculture.
          </p>
          <p className="mb-4">
            These diverse experiences, from the dynamic gaming industry to the
            tranquil realm of mushroom farming, have shaped me into a
            well-rounded individual with a fervor for innovation and
            problem-solving. I am excited to bring this unique blend of skills
            and experiences to every project I undertake.
          </p>
        </div>
      </section>
      <div className="mt-12 flex flex-col items-start">
        <Link
          className="group flex items-center justify-center font-semibold leading-tight"
          href={"mailto:hello@colinrumball.com"}
        >
          <span className="border-b-2 border-transparent px-2 pb-1 transition-all group-hover:border-b-ff-pale-cyan">
            Contact
          </span>
          <span className="pb-1 text-2xl transition-all duration-300 group-hover:translate-x-2">
            <BsArrowRightShort />
          </span>
        </Link>
        <Link
          className="group flex items-center justify-center font-semibold leading-tight"
          href={"/resume.pdf"}
        >
          <span className="border-b-2 border-transparent px-2 pb-1 transition-all group-hover:border-b-ff-pale-cyan">
            Download CV
          </span>
          <span className="pb-1 text-2xl transition-all duration-300 group-hover:translate-x-2">
            <BsArrowRightShort />
          </span>
        </Link>
      </div>
      {/* <nav className="text-md my-16 hidden lg:block">
        <ul className="group/list relative space-y-4 py-8 font-bold">
          <NavItem label="About" href="#about" />
          <NavItem label="Experience" href="#experience" />
          <NavItem label="Projects" href="#projects" />
        </ul>
      </nav> */}
      {/* <div className="mb-16 flex flex-1 flex-col justify-end">
        <ul className="flex flex-row items-stretch gap-2">
          <li>
            <button className="flex items-center space-x-5 rounded-full bg-slate-700 px-4 py-2 text-slate-100 transition-all hover:scale-105 hover:bg-ff-navy-blue">
              <span>Contact me here</span>
              <BsArrowRight />
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-5 rounded-full bg-slate-700 px-4 py-2 text-slate-100 transition-all hover:scale-105 hover:bg-ff-navy-blue">
              <span>Download CV</span>
              <BsDownload />
            </button>
          </li>
          <li className="flex">
            <Link
              href="https://github.com/colin-rumball"
              className="flex flex-col justify-center rounded-full bg-slate-700 px-4 py-2 text-slate-100 transition-all hover:scale-105 hover:bg-ff-navy-blue"
              target="_blank"
            >
              <FiGithub />
            </Link>
          </li>
          <li className="flex">
            <Link
              href="https://www.linkedin.com/in/colinrumball/"
              className="flex flex-col justify-center rounded-full bg-slate-700 px-4 py-2 text-slate-100 transition-all hover:scale-105 hover:bg-ff-navy-blue"
              target="_blank"
            >
              <FiLinkedin />
            </Link>
          </li>
        </ul>
      </div> */}
    </header>
  );
};
export default Header;
