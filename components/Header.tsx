import Link from "next/link";
import BusinessCard from "./BusinessCard";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import { cn } from "@/libs/utils";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { UrlObject } from "url";

const NavItem = (label: string, href: UrlObject) => {
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
            "absolute left-0 top-0 -z-10 h-full w-full origin-right scale-x-0 bg-pink-500 transition-transform duration-700",
            "group-hover/item:origin-left group-hover/item:scale-x-100",
          )}
        />
        {label}
      </Link>
    </li>
  );
};

interface Props extends React.ComponentPropsWithoutRef<"header"> {}

const Header = (props: Props) => {
  return (
    <header
      {...props}
      className="mb-12 md:sticky md:top-0 md:mb-auto md:mr-3 md:flex md:h-screen md:w-1/2 md:flex-1 md:flex-col md:justify-between"
    >
      <BusinessCard />
      <nav className="text-md my-16 hidden md:block">
        <ul className="group/list relative space-y-4 py-8 font-bold">
          {NavItem("About", { href: "#about" })}
          {NavItem("Experience", { href: "#experience" })}
          {NavItem("Projects", { href: "#projects" })}
        </ul>
      </nav>
      <div className="mb-16 flex flex-1 flex-col justify-end">
        <ul className="flex flex-row items-stretch gap-2">
          <li>
            <button className="flex items-center space-x-5 rounded-full bg-slate-700 px-4 py-2 text-slate-100 transition-all hover:scale-105 hover:bg-slate-800">
              <span>Contact me here</span>
              <BsArrowRight />
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-5 rounded-full bg-slate-700 px-4 py-2 text-slate-100 transition-all hover:scale-105 hover:bg-slate-800">
              <span>Download CV</span>
              <BsDownload />
            </button>
          </li>
          <li className="flex">
            <Link
              href="https://github.com/colin-rumball"
              className="flex flex-col justify-center rounded-full bg-slate-700 px-4 py-2 text-slate-100 transition-all hover:scale-105 hover:bg-slate-800"
              target="_blank"
            >
              <FiGithub />
            </Link>
          </li>
          <li className="flex">
            <Link
              href="https://www.linkedin.com/in/colinrumball/"
              className="flex flex-col justify-center rounded-full bg-slate-700 px-4 py-2 text-slate-100 transition-all hover:scale-105 hover:bg-slate-800"
              target="_blank"
            >
              <FiLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
