import { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Yanfei Dai",
  description:
    "Featured projects and work by Yanfei Dai - ML systems, LLM applications, and distributed computing.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <PageHeader
        overline="fig. 05 — the workshop"
        title={
          <>
            Built <em className="font-serif italic">after hours</em> &amp; in
            production
          </>
        }
        lede="A co-op game about a bankrupt retrieval agency, a community for mountaineers, multi-agent fraud analysis, recommender frameworks — side projects and shipped systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
