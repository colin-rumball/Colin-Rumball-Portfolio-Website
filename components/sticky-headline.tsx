import { cn } from "@/lib/utils";
import { type ComponentPropsWithRef, forwardRef } from "react";

type StickyHeadlineProps = ComponentPropsWithRef<"div"> & {
  as: keyof JSX.IntrinsicElements;
};

const StickyHeadline = forwardRef<HTMLDivElement, StickyHeadlineProps>(
  ({ className, children, as }, ref) => {
    const Element = as;
    return (
      <div
        ref={ref}
        className={cn(
          "sticky inset-x-0 top-0 z-20 my-4 p-4 text-xl font-semibold backdrop-blur ",
          "lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-12 lg:py-0 lg:opacity-0",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

export default StickyHeadline;
