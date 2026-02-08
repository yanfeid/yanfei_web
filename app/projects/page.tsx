import { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Yanfei Dai",
  description: "Featured projects and work by Yanfei Dai - ML systems, LLM applications, and distributed computing.",
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Projects
      </h1>
      <p className="text-muted text-center mb-16 max-w-2xl mx-auto">
        A selection of projects I&apos;ve built, from production ML systems to
        open-source tools.
      </p>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + featuredProjects.length}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
