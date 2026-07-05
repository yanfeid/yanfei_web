import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
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

const detailSections = [
  ["problem", "The problem"],
  ["solution", "The approach"],
  ["impact", "The outcome"],
] as const;

export default function ProjectPage({ params }: Props) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((p) => p.id === project.id);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Back */}
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-foreground transition-colors mb-14"
      >
        <ArrowLeft
          size={15}
          className="transition-transform group-hover:-translate-x-1"
        />
        All projects
      </Link>

      {/* Header */}
      <header className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-4">
          project {String(index + 1).padStart(2, "0")}
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
          {project.title}
        </h1>
        <p className="font-serif italic text-xl text-muted leading-relaxed">
          {project.longDescription || project.description}
        </p>
      </header>

      {/* Meta row: links + stack */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-border py-5 mb-14">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm border-b border-muted pb-0.5 hover:border-accent transition-colors"
          >
            <Github size={15} />
            Source
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        )}
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm border-b border-muted pb-0.5 hover:border-accent transition-colors"
          >
            Live demo
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        )}
        <p className="font-mono text-xs text-muted/80">
          {project.technologies.join(" · ")}
        </p>
      </div>

      {/* Screenshots */}
      {project.images && project.images.length > 0 && (
        <div className="mb-14 space-y-8">
          {project.images.map((img, i) => (
            <figure key={img.src}>
              <div className="overflow-hidden rounded-lg border border-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted/70">
                <span className="text-terminal normal-case tracking-normal">
                  {"//"}
                </span>{" "}
                fig. {String(i + 1).padStart(2, "0")} — {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {/* Details */}
      {project.details && (
        <div className="space-y-14">
          {detailSections.map(([key, heading]) =>
            project.details?.[key] ? (
              <section key={key}>
                <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-4">
                  {heading}
                </h2>
                <p className="text-foreground/85 leading-relaxed text-[17px]">
                  {project.details[key]}
                </p>
              </section>
            ) : null
          )}

          {project.details.architecture && (
            <section>
              <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-4">
                Architecture
              </h2>
              <div className="rounded-lg border border-border bg-card/60 p-5 font-mono text-sm text-muted overflow-x-auto">
                {project.details.architecture}
              </div>
            </section>
          )}

          {project.details.keyFeatures &&
            project.details.keyFeatures.length > 0 && (
              <section>
                <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-5">
                  Key features
                </h2>
                <ul className="space-y-3.5">
                  {project.details.keyFeatures.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-muted/50"
                    >
                      {feature}
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
