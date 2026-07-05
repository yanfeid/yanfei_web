"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";
import Reveal from "./Reveal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

/** Procedural cover for projects without a screenshot — dotted field + mono index. */
function GeneratedCover({ project, index }: ProjectCardProps) {
  return (
    <div className="dots-bg relative flex h-full w-full items-center justify-center bg-card">
      <span className="absolute left-5 top-4 font-mono text-xs text-terminal/80">
        [{String(index + 1).padStart(2, "0")}]
      </span>
      <p className="max-w-[80%] text-center font-mono text-lg text-muted transition-colors duration-500 group-hover:text-foreground">
        {project.title}
      </p>
      <span className="absolute bottom-4 right-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/50">
        {project.technologies[0]}
      </span>
    </div>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Reveal inView delay={(index % 2) * 0.1} className="h-full">
      <Link
        href={`/projects/${project.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card/40 transition-colors hover:bg-card hover:border-muted/40"
      >
        {/* Cover */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
          {project.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.imageUrl}
              alt={`${project.title} cover`}
              loading="lazy"
              className="h-full w-full object-cover grayscale-[0.35] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
            />
          ) : (
            <GeneratedCover project={project} index={index} />
          )}
        </div>

        {/* Body */}
        <div className="flex flex-grow flex-col p-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-xl font-medium tracking-tight">
              {project.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-muted opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
            />
          </div>

          <p className="mb-5 flex-grow text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <p className="border-t border-border pt-4 font-mono text-xs text-muted/70">
            {project.technologies.slice(0, 4).join(" · ")}
            {project.technologies.length > 4 &&
              ` +${project.technologies.length - 4}`}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
