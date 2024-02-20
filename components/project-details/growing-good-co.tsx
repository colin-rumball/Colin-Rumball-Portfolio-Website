import Image from "next/image";
import GGCoBackyard from "@/../public/images/ggco/backyard-720p.png";
import GGCoGrowKit from "@/../public/images/ggco/grow-kit.png";
import GGCoGolden from "@/../public/images/ggco/golden-oyster.jpg";
import GGCoPink from "@/../public/images/ggco/pink-oyster.jpg";
import GGCoChestnut from "@/../public/images/ggco/chestnut-mushrooms.png";
import { ArrowLink } from "../ui/link";
import { type ProjectOpts } from "@/lib/projects-data";

const Background = () => {
  return <div className={`absolute inset-y-0 w-screen bg-ggco-green`} />;
};

const ShortDescription = () => {
  return (
    <p>
      A homegrown indoor farming operation, growing culinary mushrooms for use
      in cooking, as well as functional mushrooms for medicinal uses.
    </p>
  );
};

const LongDescription = () => {
  return (
    <div className="mx-auto flex flex-col gap-3">
      <p>
        During our 3 years of fresh mushroom production my wife and I supplied
        local restaurants and grocers with high quality specialty mushrooms and
        grow-at-home kits, attended local farmers markets, and supplied our
        community with fresh, local, and sustainable food.
      </p>
      <p>
        Our journey has been immensely rewarding, not just in terms of the
        business successes we had, but also in the personal growth and learning
        that comes with starting a business from the ground up.
      </p>
      <p>
        Though the business is on the back burner the website (made by my hand)
        still stands as a testament to all the things we achieved.
      </p>
    </div>
  );
};

const Slides = [
  <Image
    placeholder="blur"
    src={GGCoBackyard}
    className="rounded-lg"
    alt="picture of Colin and his wife Nora is the backyard of their home in Northumberland County, Ontario"
  />,
  <div className="flex aspect-video justify-center">
    <Image
      src={GGCoGrowKit}
      placeholder="blur"
      alt="picture of a blue oyster grow kit on a shelf"
      className="w-auto rounded-lg"
    />
  </div>,
  <div className="flex aspect-video justify-center">
    <Image
      src={GGCoChestnut}
      placeholder="blur"
      alt="picture of a cluster of chestnut mushrooms"
      className="w-auto rounded-lg"
    />
  </div>,
  <div className="flex aspect-video justify-center">
    <Image
      src={GGCoPink}
      placeholder="blur"
      alt="picture of a pink oyster mushroom"
      className="w-auto rounded-lg"
    />
  </div>,
  <div className="flex aspect-video justify-center">
    <Image
      src={GGCoGolden}
      placeholder="blur"
      alt="picture of a golden oyster mushroom"
      className="w-auto rounded-lg"
    />
  </div>,
];

const externalLinks = () => {
  return (
    <ArrowLink href={"https://growinggood.ca/"} target="_blank">
      Visit Growing Good Co.
    </ArrowLink>
  );
};

export const GGCoDetails: ProjectOpts = {
  id: "ggco",
  name: "Growing Good Co.",
  jobTitle: "Co-Founder",
  date: "2020-2023",
  video: "/videos/ggco-logo.mp4",
  foreground: "text-ff-cream",
  foregroundAlt: "text-ggco-yellow",
  background: <Background />,
  shortDescription: ShortDescription,
  longDescription: LongDescription,
  slides: Slides,
  tech: ["typescript", "react", "nextjs", "tailwindcss"],
  externalLinks: externalLinks,
};
