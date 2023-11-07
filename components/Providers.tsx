"use client";
import { ModalSystemProvider } from "@/lib/contexts/ModalSystem/ModalSystem";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ModalSystemProvider>{children}</ModalSystemProvider>;
};

export default Providers;
