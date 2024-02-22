import Page from "@/components/ui/page";
import ProjectList from "@/components/project-list";

export default function Home() {
  return (
    <Page className="md:w-7/12">
      <section id="experience" className="" aria-label="My experience">
        <ProjectList />
      </section>
    </Page>
  );
}
