"use client";

import { cn } from "@/libs/utils";
import Link from "next/link";
import { FiLinkedin, FiGithub, FiCompass } from "react-icons/fi";
import TypeIt from "typeit-react";

interface Props extends React.ComponentPropsWithoutRef<"div"> {}

const BusinessCard = ({ className, ...props }: Props) => {
  return (
    <article
      className={cn(
        className,
        "bg-ff-navy-blue text-ff-cream relative m-3 rounded-md p-6",
      )}
    >
      <div className="absolute left-4 top-4 h-1/2 w-1/2 rounded-md bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px]" />
      <div className="absolute bottom-4 right-4 h-1/2 w-1/2 rounded-md bg-gradient-to-r from-[#9333EA] via-[#3B82F6] to-[#6EE7B7] p-[6px]" />
      <div className="bg-ff-navy-blue relative z-10 rounded-md p-4">
        <div className="mb-6">
          <h1 className="text-4xl">Colin Rumball</h1>
          <span className="text-xl">
            <TypeIt
              options={{
                strings: [
                  "Software Engineer",
                  "UI Engineer",
                  "Mushroom Farmer",
                  "Entrepreneur",
                  "Problem Solver",
                ],
                html: true,
                speed: 85,
                loopDelay: 1750,
                nextStringDelay: 1750,
                startDelete: true,
                cursor: false,
                loop: true,
                breakLines: false,
              }}
            />
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex space-x-3">
            <Link
              href="https://github.com/colin-rumball"
              className="hover:text-ff-pink active:text-ff-dark-pink"
              target="_blank"
            >
              <FiGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/colinrumball/"
              className="hover:text-ff-pink active:text-ff-dark-pink"
              target="_blank"
            >
              <FiLinkedin />
            </Link>
          </div>
          <div className="text-7xl">
            <FiCompass />
          </div>
        </div>
      </div>
    </article>
  );
};

export default BusinessCard;
