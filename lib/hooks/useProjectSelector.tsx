"use client";

import { create } from "zustand";
import { type ProjectID } from "../projects-data";

export type ProjectSelectorState = {
  selectedProject: ProjectID | null;
  setSelectedProject: (project: ProjectID | null) => void;
};

const useProjectSelector = create<ProjectSelectorState>()((set) => ({
  selectedProject: null,
  setSelectedProject: (_proj) => {
    set(() => {
      return { selectedProject: _proj };
    });
  },
}));

export default useProjectSelector;
