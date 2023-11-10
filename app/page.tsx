"use client";

import {
  BsCaretRightFill,
  BsCaretLeftFill,
  BsBriefcase,
  BsCaretUpFill,
} from "react-icons/bs";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { PiRocket } from "react-icons/pi";
import { TbMushroom } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import Project from "@/components/Project";
import TLPModal from "@/components/modals/TLPModal";
import useModalSystemHelper from "@/lib/hooks/useModalSystemHelper";
import { ModalSystemState } from "@/lib/contexts/ModalSystem/actions/common";
import GGImage from "@/public/images/Logo_Icon_Square.png";
import ShineImage from "@/public/images/sun.png";
import Image from "next/image";

export default function Home() {
  const { system } = useModalSystemHelper();
  return (
    <main
      className={`min-h-screen lg:flex-1 lg:pt-20 ${
        system.state === ModalSystemState.OPENING ? "overflow-hidden" : ""
      }`}
    >
      <section
        id="experience"
        className="mb-20 scroll-mt-16"
        aria-label="My experience"
      >
        <h3 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-12 lg:py-0 lg:opacity-0">
          <strong>Experience</strong>
        </h3>
        <ol className="group/list">
          <Project
            location="MyRatings.monster"
            title="Creator"
            date="2023"
            description="A tool for viewing and analyzing your ratings on the popular movie rating site IMDB."
            image={{ src: "/images/TLP.png", alt: "" }}
            video="/videos/tlp-main.mp4"
          />
          <Project
            location="FaceCraft.me"
            title="Creator"
            date="2023"
            description="A platform for creating and sharing AI generated faces."
            image={{ src: "/images/TLP.png", alt: "" }}
            video="/videos/tlp-main.mp4"
          />
          <Project
            location="Growing Good Co"
            title="founder"
            date="2020-2023"
            description="A homegrown indoor farming operation, growing culinary mushrooms for use in cooking, as well as functional mushrooms for medicinal uses."
            image={{ src: "/images/TLP.png", alt: "" }}
            video="/videos/ggco-main.mp4"
          />
          <Project
            location="The Loneliness Project"
            title="Web Developer"
            date="2020"
            description="Sharing stories and starting a conversation about loneliness. Become
            part of our community of people who are not as alone as they think."
            image={{ src: "/images/TLP.png", alt: "" }}
            video="/videos/tlp-main.mp4"
          />
          <Project
            location="LEGO Legacy: Heroes Unboxed"
            title="Game Programmer"
            date="2017-2020"
            description="Immerse yourself in a vibrant LEGO® universe full of action, battles, sets and heroes! Your favourite minifigures and sets are busting out of the box in the most vibrant turn-based RPG ever assembled."
            image={{ src: "/images/TLP.png", alt: "" }}
            video="/videos/lego-main.mp4"
          />
          <Project
            location="UNO & Friends"
            title="UI Engineer"
            date="2015-2017"
            description="UNO™ &amp; Friends brings an entirely new social dimension to the classic, fast-paced, and competitive gameplay of UNO™. With engaging multiplatform play, which promises fast fun for everyone."
            image={{ src: "/images/TLP.png", alt: "" }}
            video="/videos/uno-main.mp4"
          />
        </ol>
      </section>
    </main>
  );
}
