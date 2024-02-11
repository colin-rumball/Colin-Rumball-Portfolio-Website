import Page from "@/components/ui/page";
import { cn } from "@/lib/utils";
import ProjectList from "@/components/project-list";

export default function Home() {
  return (
    <Page className="lg:w-7/12">
      <section
        id="experience"
        className="scroll-mt-16"
        aria-label="My experience"
      >
        <h3
          className={cn(
            "sticky inset-x-0 top-0 z-20 mb-4 px-6 py-5 font-bold backdrop-blur",
            "lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-12 lg:py-0 lg:opacity-0",
          )}
        >
          Experience
        </h3>
        <div className="lg:pl-6 lg:pr-12 lg:pt-12">
          <ProjectList />
        </div>
      </section>
    </Page>
  );
}
