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
          className="z-blurred-background absolute inset-0 overflow-hidden blur-sm"
        />
      )}
    </>
  );
};

export default BlurredBackground;
