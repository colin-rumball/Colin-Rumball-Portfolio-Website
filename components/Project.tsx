import { cn } from "@/libs/utils";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  links: { label: ReactNode; href: string }[];
  image: { src: StaticImageData; alt: string };
  title: string;
  technologies: string[];
}

const Project = ({
  image,
  className,
  title,
  links,
  technologies,
  ...props
}: Props) => {
  return (
    <div className={cn("relative", className)} {...props}>
      <div className="group relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 bg-ff-navy-blue opacity-0 transition-all duration-300 group-hover:opacity-80">
          {links.map((link) => (
            <Link
              target="_blank"
              key={link.href}
              className="flex items-baseline gap-2 border-b border-b-ff-pink px-2 py-3 text-xl text-white transition-all hover:px-12 hover:text-ff-pink"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Image src={image.src} alt={image.alt} />
      </div>
      <div className="pt-3">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <ul className="flex gap-4 pl-1 text-sm">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
