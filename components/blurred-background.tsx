"use client";

import useProjectSelector from "@/lib/hooks/useProjectSelector";
import { cn } from "@/lib/utils";

const BlurredBackground = () => {
  const { selectedProject, setSelectedProject } = useProjectSelector(
    (state) => state,
  );
  return (
    <>
      {selectedProject !== null && (
        <div
          onClick={() => setSelectedProject(null)}
          className="absolute inset-0 z-blurred-background overflow-hidden blur-sm"
        />
      )}
    </>
  );
};

export default BlurredBackground;
