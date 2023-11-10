"use client";

import Lottie from "lottie-react";
import anim from "@/public/lottie/404.json";
import Link from "@/components/ui/link";

export default function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <Lottie animationData={anim} className="max-w-sm" />
      <h2 className="mb-8">Not Found</h2>
      <Link href="/">Return Home</Link>
    </main>
  );
}
