import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export type ProjectProps = {
  video: string;
  location: string;
  title: string;
  date: string;
  description: string;
  dialogContent: React.ReactNode;
};

const Project = ({
  title,
  date,
  description,
  video,
  location,
  dialogContent,
}: ProjectProps) => {
  return (
    <li className="mb-8 cursor-pointer">
      <Dialog>
        <DialogTrigger>
          <Card
            className={cn(
              "group relative grid rounded-lg border-none bg-ff-cream text-ff-navy-blue shadow-none transition-all duration-500 motion-reduce:transition-none sm:grid-cols-8 sm:gap-8 md:gap-4",
              "group-hover/list:hover:opacity-100 group-hover/list:hover:blur-0 lg:group-hover/list:opacity-50 lg:group-hover/list:blur-sm",
              "hover:-translate-y-2",
            )}
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-ff-green/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <aside
              className="z-10 mx-1 mb-2 mt-1 text-left text-xs font-semibold tracking-wide lg:col-span-3"
              aria-label="2018 to Present"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <h3 className="uppercase tracking-tight group-hover:text-ff-green">
                {location}
              </h3>
              <h4 className="uppercase tracking-normal">{title}</h4>
              <h5 className="uppercase">{date}</h5>
              <p className="my-2 text-sm font-medium leading-snug">
                {description}
              </p>
            </aside>
            <div className="relative z-10 col-span-5 flex items-center justify-center">
              <video autoPlay muted loop playsInline className="">
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </Card>
        </DialogTrigger>
        <DialogContent className="flex h-[900px] w-[900px] max-w-full flex-col gap-0 overflow-y-auto p-0 text-ff-cream">
          {dialogContent}
        </DialogContent>
      </Dialog>
    </li>
  );
};

export default Project;
