import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects, getProjectById } from "@/data/projects";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectById(params.id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Yanfei Dai`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-muted text-lg leading-relaxed">
          {project.longDescription || project.description}
        </p>
      </div>

      {/* Links */}
      <div className="flex gap-4 mb-12">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            <Github size={20} />
            View on GitHub
          </Link>
        )}
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:border-accent transition-colors"
          >
            <ExternalLink size={20} />
            Live Demo
          </Link>
        )}
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm font-mono bg-card rounded-lg border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Details */}
      {project.details && (
        <div className="space-y-8">
          {project.details.problem && (
            <section className="p-6 bg-card border border-border rounded-xl">
              <h2 className="text-xl font-bold mb-3 text-accent">Problem</h2>
              <p className="text-muted leading-relaxed">{project.details.problem}</p>
            </section>
          )}

          {project.details.solution && (
            <section className="p-6 bg-card border border-border rounded-xl">
              <h2 className="text-xl font-bold mb-3 text-accent">Solution</h2>
              <p className="text-muted leading-relaxed">{project.details.solution}</p>
            </section>
          )}

          {project.details.impact && (
            <section className="p-6 bg-card border border-border rounded-xl">
              <h2 className="text-xl font-bold mb-3 text-accent">Impact</h2>
              <p className="text-muted leading-relaxed">{project.details.impact}</p>
            </section>
          )}

          {project.details.keyFeatures && project.details.keyFeatures.length > 0 && (
            <section className="p-6 bg-card border border-border rounded-xl">
              <h2 className="text-xl font-bold mb-4 text-accent">Key Features</h2>
              <ul className="space-y-3">
                {project.details.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted">
                    <span className="text-accent mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
