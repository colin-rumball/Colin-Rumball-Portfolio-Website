"use client";
import ModalContext from "@/lib/contexts/ModalContext";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ModalContext.Provider value={1}>{children}</ModalContext.Provider>;
};

export default Providers;
