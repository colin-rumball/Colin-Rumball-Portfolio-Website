"use client";

import { cn } from "@/libs/utils";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import {
  MouseEventHandler,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import { GoArrowUpRight } from "react-icons/go";
import TLPImage from "@/../public/images/TLP.png";
import ImageSlider from "./ImageSlider";
import useModal from "@/lib/hooks/useModal";
import useModalSystemHelper from "@/lib/hooks/useModalSystemHelper";
import TLPModal from "./modals/TLPModal";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  video: string;
  image: { src: string; alt: string };
  location: string;
  title: string;
  date: string;
  description: string;
  modalContent?: ReactNode;
}

const Project = ({
  title,
  date,
  description,
  video,
  image,
  location,
  modalContent,
  ...props
}: Props) => {
  // const { Modal, close, show } = useModal(modalContent);
  const { pushModal } = useModalSystemHelper();
  return (
    <li
      className="mb-12 cursor-pointer"
      onClick={() => pushModal(<TLPModal />)}
    >
      <div className="group relative grid pb-1 transition-all group-hover/list:hover:opacity-100 group-hover/list:hover:blur-0 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 lg:group-hover/list:blur-sm">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-ff-green/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <aside
          className="z-10 mb-2 mt-1 text-xs font-semibold tracking-wide lg:col-span-3"
          aria-label="2018 to Present"
        >
          {/* <a
            className="group/line inline-flex items-baseline text-base font-medium leading-tight hover:text-ff-pink focus-visible:text-ff-pink"
            href="https://upstatement.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Lead Engineer at Upstatement"
          > */}
          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          <h3 className="uppercase tracking-tight group-hover:text-ff-pink">
            {location}
          </h3>
          {/* </a> */}
          <h4 className="uppercase tracking-normal">{title}</h4>
          <h5 className="uppercase">{date}</h5>
          <p className="my-2 text-sm font-medium leading-snug">{description}</p>
        </aside>
        <div className="z-10 col-span-5 flex items-center justify-center">
          {/* <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
            className="block group-hover:hidden"
          /> */}
          <video autoPlay muted loop playsInline className="">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </li>
    // <div className={cn("relative", className)} {...props}>
    //   <div className="group relative">
    //     <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 bg-ff-navy-blue opacity-0 transition-all duration-300 group-hover:opacity-80">
    //       {links.map((link) => (
    //         <Link
    //           target="_blank"
    //           key={link.href}
    //           className="flex items-baseline gap-2 border-b border-b-ff-pink px-2 py-3 text-xl text-white transition-all hover:px-12 hover:text-ff-pink"
    //           href={link.href}
    //         >
    //           {link.label}
    //         </Link>
    //       ))}
    //     </div>
    //     <Image src={image.src} alt={image.alt} />
    //   </div>
    //   <div className="pt-3">
    //     <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
    //     <ul className="flex gap-4 pl-1 text-sm">
    //       {technologies.map((tech) => (
    //         <li key={tech}>{tech}</li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Project;
