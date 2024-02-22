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
        "inset-x-0 top-0 z-50 p-4 text-xl font-bold text-foreground backdrop-blur",
        "md:sr-only md:relative md:top-auto md:mx-auto md:w-full md:px-12 md:py-0 md:opacity-0",
      )}
    >
      <span className={className}>{children}</span>
    </Element>
  );
};

export default Headline;
