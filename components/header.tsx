import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
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

interface HeaderProps extends React.ComponentPropsWithoutRef<"header"> {}

const Header = (props: HeaderProps) => {
  return (
    <header
      {...props}
      className="flex flex-col gap-5 pt-12 lg:sticky lg:top-0 lg:h-screen lg:w-4/12 lg:pl-12 lg:pr-6"
    >
      <section id="info" className="px-4 lg:px-0">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Colin Rumball
        </h1>
        <div className="h-[28px] text-lg font-medium tracking-tight sm:text-xl">
          <OccupationTyper />
        </div>
      </section>

      <section id="tech" className="">
        <StickyHeadline as="h3">Tech</StickyHeadline>
        <div className="flex flex-col gap-2 px-4 text-4xl text-ff-green lg:px-0">
          <div className="flex gap-4">
            <span className="flex items-end gap-2 text-3xl">
              <TbBrandTypescript />
              <span className="text-lg font-medium tracking-tight">
                TypeScript
              </span>
            </span>
            <span className="flex items-end gap-2 text-3xl">
              <TbBrandReact />
              <span className="text-lg font-medium tracking-tight">React</span>
            </span>
            <span className="flex items-end gap-2 text-3xl">
              <TbBrandNextjs />
              <span className="text-lg font-medium tracking-tight">
                Next<span className="text-xs">.js</span>
              </span>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-end gap-2 text-3xl">
              <TbBrandPrisma />
              <span className="text-lg font-medium tracking-tight">Prisma</span>
            </span>
            <span className="flex items-end gap-2 text-3xl">
              <TbBrandTailwind />
              <span className="text-lg font-medium tracking-tight">
                Tailwind<span className="text-xs">css</span>
              </span>
            </span>
          </div>
        </div>
      </section>

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
            When not immersed in my work, I enjoy refining my tech skills,
            partaking in personal interests like hiking, yoga, tech tinkering,
            camping, and globe-trotting with my wife. Notably, I embarked on a
            journey as the founder and operator of a gourmet culinary mushroom
            farm, a venture that spanned three years and deepened my
            understanding of entrepreneurship and sustainable agriculture.
          </p>
        </div>
      </section>

      <section id="contact" className="">
        <div className="flex flex-col gap-3 px-4 lg:px-0">
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
          <div className="flex flex-col gap-0">
            <Link
              className="group flex items-center font-semibold leading-tight"
              href={"mailto:hello@colinrumball.com"}
            >
              <span className="border-b-2 border-transparent transition-all group-hover:border-b-ff-pale-cyan">
                Contact
              </span>
              <span className="text-2xl transition-all duration-300 group-hover:translate-x-2">
                <BsArrowRightShort />
              </span>
            </Link>
            <Link
              className="group flex items-center font-semibold leading-tight"
              href={"/resume.pdf"}
            >
              <span className="border-b-2 border-transparent transition-all group-hover:border-b-ff-pale-cyan">
                Download CV
              </span>
              <span className="text-2xl transition-all duration-300 group-hover:translate-x-2">
                <BsArrowRightShort />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
