import Page from "@/components/ui/page";
import { cn } from "@/lib/utils";
import ProjectList from "@/components/project-list";
import StickyHeadline from "@/components/sticky-headline";
import BlurredBackground from "@/components/blurred-background";

export default function Home() {
  return (
    <Page className="lg:w-7/12">
      <section id="experience" className="" aria-label="My experience">
        <StickyHeadline as="h3">Experience</StickyHeadline>
        <ProjectList />
        <BlurredBackground />
      </section>
    </Page>
  );
}
