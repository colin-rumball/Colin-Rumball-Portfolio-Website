import Image from "next/image";
import TLPAbout from "@/../public/images/tlp/tlp-about.png";
import TLPStory from "@/../public/images/tlp/tlp-story.png";
import TLPHome from "@/../public/images/tlp/tlp-main-phone.png";
import TLPEdit from "@/../public/images/tlp/tlp-edit-phone.png";
import TLPDash from "@/../public/images/tlp/tlp-dashboard-phone.png";
import Link from "../ui/link";

const TLPDialog = () => {
  return (
    <div className="flex flex-col gap-6 rounded-lg border border-ff-cream bg-[#1b2334] p-10 text-ff-cream">
      <div className="overflow-clip rounded-lg border border-ff-cream object-contain">
        <video autoPlay muted loop className="object-contain">
          <source src="/videos/tlp-main.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="grid grid-cols-3 gap-6 px-4 leading-5 tracking-tight">
        <div className="col-span-3 flex flex-col justify-center gap-4 lg:col-span-1">
          <p>
            The Loneliness Project is a passion project started by my dear
            friend Marissa Korda. It began small and found fast success
            receiving press coverage and thousands of stories.
          </p>
          <div className="flex flex-col justify-center gap-1 text-center text-lg">
            <Link
              href={"https://thelonelinessproject.org/"}
              target="_blank"
              className="hover:underline"
            >
              Visit Website
            </Link>
            <Link
              href={"https://github.com/colin-rumball/The-Loneliness-Project"}
              target="_blank"
              className="hover:underline"
            >
              See on Github
            </Link>
          </div>
        </div>
        <div className="col-span-3 h-full rounded-lg bg-ff-cream p-10 text-[#1b2334] lg:col-span-2">
          <p>
            At The Loneliness Project, we believe that stories have power—the
            power to heal both listener and teller, and to show us that we
            aren't ever truly alone. Stories are powerful tools for building
            empathy and growing kindness. Those shared on the site are deeply
            personal yet profoundly universal.
          </p>
        </div>
      </div>
      <p className="">
        Marissa expressed her wish to move the site off of its exiting hosting
        to have more control over its development and its future. The original
        site was built using vanilla HTML, CSS, and Javascript, but access to
        the source code was limited, so I took on the task of rebuilding the
        site from the ground up using modern technologies, as well as making
        several quality of life improvements to the experience.
      </p>
      <div className="overflow-hidden rounded-lg border border-ff-cream">
        <Image
          src={TLPAbout}
          alt="screenshot of about page on the loneliness project"
          className="rounded-lg border border-ff-cream"
        />
      </div>
      <div className="overflow-clip rounded-lg border border-ff-cream">
        <Image
          src={TLPStory}
          alt="screenshot of about page on the loneliness project"
          className="object-contain"
        />
      </div>
      <div className="my-12 flex flex-col items-center gap-8 lg:flex-row">
        <div className="overflow-clip rounded-lg">
          <Image
            src={TLPHome}
            alt="a screenshot of the homepage on the loneliness project on a phone"
          />
        </div>
        <div className="overflow-clip rounded-lg">
          <Image
            src={TLPDash}
            alt="a screenshot of the of the dashboard on the loneliness project on a phone"
          />
        </div>
        <div className="overflow-clip rounded-lg">
          <Image
            src={TLPEdit}
            alt="a screenshot of the of apartment details edit modal on the loneliness project on a phone"
          />
        </div>
      </div>
    </div>
  );
};

export default TLPDialog;
