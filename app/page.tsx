export default function Home() {
  return (
    <main className="min-h-screen md:flex-1 md:pt-20">
      <section id="about" className="scroll-mt-16" aria-label="About me">
        <h3 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:sr-only md:relative md:top-auto md:mx-auto md:w-full md:px-12 md:py-0 md:opacity-0">
          <strong>About</strong>
        </h3>
        <p className="mb-4">
          I&apos;ve been passionate about software development since high
          school, and being a lifelong gamer, I originally sought an outlet for
          my interest in the games industry, studying game development at school
          and then working in the mobile games industry.
        </p>
        <p className="mb-4">
          In recent years, I became captivated by the creativity and challenge
          of web development, and I&apos;ve found a new sense of enjoyment from
          this different medium, a new canvas for my passion for problem
          solving. In my spare time I find myself dabbling in side projects,
          searching for a more streamlined development process, and finding that
          perfect stack 🥞
        </p>
        <p className="mb-4">
          Besides web and games I enjoy climbing mountains, doing yoga,
          tinkering with tech, camping, and travelling with my wife.
        </p>
      </section>
      <section
        id="experience"
        className="scroll-mt-16"
        aria-label="My experience"
      >
        <h3 className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:sr-only md:relative md:top-auto md:mx-auto md:w-full md:px-12 md:py-0 md:opacity-0">
          <strong>Experience</strong>
        </h3>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
      </section>
      <section
        id="projects"
        className="scroll-mt-16"
        aria-label="Things I've built"
      >
        <div>Projects</div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
      </section>
      <section id="posts" className="scroll-mt-16" aria-label="Posts">
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
        <div className="m-4 h-96 border-red-600 bg-slate-600"></div>
      </section>
    </main>
  );
}
