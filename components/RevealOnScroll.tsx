import { cn } from "@/libs/utils";
import { useState, useRef, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  duration?: "100ms" | "200ms" | "300ms" | "500ms" | "700ms" | "1s";
}

const RevealOnScroll = ({ children, duration }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    if (ref.current) scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDuration: duration }}
      className={cn(
        "transition-all",
        isVisible ? "blur-0" : "blur-sm",
        isVisible ? "translate-x-0" : "-translate-x-4",
        isVisible ? " opacity-100" : " opacity-0",
      )}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
