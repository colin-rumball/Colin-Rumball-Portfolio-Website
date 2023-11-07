import Image from "next/image";
import TLPAbout from "@/../public/images/tlp-about.png";
import TLPStory from "@/../public/images/tlp-story.png";
import TLPHome from "@/../public/images/tlp-main-phone.png";
import TLPEdit from "@/../public/images/tlp-edit-phone.png";
import TLPDash from "@/../public/images/tlp-dashboard-phone.png";
import Link from "../ui/link";

const TLPModal = () => {
  return (
    <div className="max-w-screen-lg rounded-lg border border-ff-cream bg-tlp">
      <div className="p-10 text-ff-cream">
        <video
          autoPlay
          muted
          loop
          className="overflow-clip rounded-lg border border-ff-cream object-contain"
        >
          <source src="/videos/tlp-main.mp4" type="video/mp4" />
        </video>
        <div className="my-16 grid grid-cols-8 gap-8 px-6 leading-5 tracking-tight">
          <div className="col-span-8 flex max-w-prose flex-col lg:col-span-3">
            <p className="mb-4">
              The Loneliness Project is a passion project started by my dear
              friend Marissa Korda. It began small and found fast success
              receiving press coverage and thousands of stories.
            </p>
            <p>
              “At The Loneliness Project, we believe that stories have power—the
              power to heal both listener and teller, and to show us that we
              aren’t ever truly alone. Stories are powerful tools for building
              empathy and growing kindness. Those shared on the site are deeply
              personal yet profoundly universal.”
            </p>
          </div>
          <p className="col-span-8 max-w-prose lg:col-span-3">
            Marissa wished to move the site off of its exiting hosting that
            wasn’t under her ownership, to have more control over its
            development and its future. The original site was built using
            vanilla HTML, JS, and CSS, but access to the source code was
            limited, so I took on the task of rebuilding the site from the
            ground up using modern technologies, as well as making several
            quality of life improvements to the experience.
          </p>
          <div className="col-span-8 flex flex-col items-center gap-6 pt-10 lg:col-span-2">
            <Link href={"https://thelonelinessproject.org/"} externalLink>
              Visit Website
            </Link>
            <Link
              href={"https://github.com/colin-rumball/The-Loneliness-Project"}
              externalLink
            >
              See on Github
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div>
            <Image
              src={TLPAbout}
              alt="screenshot of about page on the loneliness project"
              className="overflow-clip rounded-lg border border-ff-cream object-contain"
            />
          </div>
          <div>
            <Image
              src={TLPStory}
              alt="screenshot of about page on the loneliness project"
              className="overflow-clip rounded-lg border border-ff-cream object-contain"
            />
          </div>
        </div>
        <div className="my-12 flex flex-col items-center gap-8 lg:flex-row">
          <div>
            <Image
              src={TLPHome}
              alt="a screenshot of the homepage on the loneliness project on a phone"
            />
          </div>
          <div>
            <Image
              src={TLPDash}
              alt="a screenshot of the of the dashboard on the loneliness project on a phone"
            />
          </div>
          <div>
            <Image
              src={TLPEdit}
              alt="a screenshot of the of apartment details edit modal on the loneliness project on a phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TLPModal;
