import Image from "next/image";
import PhocusLogo from "@/public/images/phocus-logo-dark.png";
import PhocusNew from "@/public/images/phocus-new.png";
import PhocusCreated from "@/public/images/phocus-created.png";
import PhocusSubmit from "@/public/images/phocus-submit.png";
import Link from "../ui/link";
import { Roboto } from "next/font/google";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-family-body",
  fallback: ["Arial", "sans-serif"],
  weight: ["400", "500", "700"],
});

const EmptyDialog = () => {
  return (
    <div
      className={`flex flex-col gap-6 rounded-lg border border-ff-cream bg-[#9cc6c9] p-10 tracking-wide text-[#181b1b]`}
    ></div>
  );
};

export default EmptyDialog;
