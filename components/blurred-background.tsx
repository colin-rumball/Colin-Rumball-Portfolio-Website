"use client";

import useProjectSelector from "@/lib/hooks/useProjectSelector";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const BlurredBackground = () => {
  const { selectedProject, setSelectedProject } = useProjectSelector(
    (state) => state,
  );

  if (selectedProject === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, transition: { duration: 0.4, delay: 0.1 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        onClick={() => {
          document.body.style.overflow = "";
          setSelectedProject(null);
        }}
        className="absolute inset-0 z-blurred-background overflow-hidden bg-slate-800 blur-sm"
      />
    </AnimatePresence>
  );
};

export default BlurredBackground;
