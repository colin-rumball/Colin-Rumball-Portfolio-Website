"use client";

import { cn } from "@/lib/utils";
import {
  type ComponentPropsWithRef,
  forwardRef,
  type ElementType,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type StickyHeadlineProps = ComponentPropsWithRef<"h3">;

const StickyHeadline = ({ className, children }: StickyHeadlineProps) => {
  const [background, setBackground] = useState<"hidden" | "visible">("hidden");
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // use observer to track when the ref is in view and set background to visible when we've scrolled past the top position of the ref
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setBackground("visible");
        } else {
          setBackground("hidden");
        }
      },
      { rootMargin: "0px 0px -100% 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref.current]);

  return (
    <h3
      ref={ref}
      className={cn(
        "sticky inset-x-0 top-0 z-50 p-4 text-xl font-bold text-foreground backdrop-blur",
        background === "visible" && "bg-background/60",
        "md:sr-only md:relative md:top-auto md:mx-auto md:w-full md:px-12 md:py-0 md:opacity-0",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default StickyHeadline;
