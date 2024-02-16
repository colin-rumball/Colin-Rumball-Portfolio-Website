import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  as: keyof JSX.IntrinsicElements;
};

const Headline = ({ className, children, as }: Props) => {
  const Element = as;
  return (
    <Element
      className={cn(
        "font-headline",
        as === "h1" && "text-heading leading-headline md:text-headline",
        as === "h2" && "text-heading leading-heading font-medium",
        (as === "h3" || as === "h4" || as === "h5") && "leading-lg text-lg",
      )}
    >
      <span className={className}>{children}</span>
    </Element>
  );
};

export default Headline;
