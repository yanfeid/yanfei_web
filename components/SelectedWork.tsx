"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";

// Homepage highlights the work-adjacent ML projects; the full list
// (including games and apps) lives on /projects.
const HIGHLIGHT_IDS = [
  "agentic-fraud-analysis",
  "core-shopping-recsys",
  "mini-model",
  "ml-pipeline-agent",
];

const featured = HIGHLIGHT_IDS.map(
  (id) => projects.find((p) => p.id === id)!
).filter(Boolean);

export default function SelectedWork() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal inView>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-3">
                <span className="text-terminal normal-case tracking-normal">
                  {"//"}
                </span>{" "}
                fig. 02 — selected work
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Things I&apos;ve <em className="font-serif italic">built</em>
              </h2>
            </div>
            <Link
              href="/projects"
              className="group hidden sm:inline-flex items-center gap-1.5 font-mono text-sm text-muted hover:text-foreground transition-colors"
            >
              All projects
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>

        <div>
          {featured.map((project, i) => (
            <Reveal inView delay={i * 0.08} key={project.id}>
              <Link
                href={`/projects/${project.id}`}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-6 md:gap-x-10 border-t border-border py-7 transition-colors hover:bg-card/50 -mx-4 px-4 rounded-sm last:border-b"
              >
                <span className="font-mono text-sm text-muted/60 tabular-nums group-hover:text-terminal transition-colors">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-1.5 group-hover:translate-x-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed max-w-2xl mb-3">
                    {project.description}
                  </p>
                  <p className="font-mono text-xs text-muted/70">
                    {project.technologies.slice(0, 4).join(" · ")}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 self-center"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
