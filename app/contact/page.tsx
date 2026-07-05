"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const channels = [
  {
    label: "Email",
    value: "yanfeidai0811@gmail.com",
    href: "mailto:yanfeidai0811@gmail.com",
    note: "Fastest way to reach me",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yanfeidai",
    href: "https://www.linkedin.com/in/yanfeidai/",
    note: "Work history & endorsements",
  },
  {
    label: "GitHub",
    value: "github.com/yanfeid",
    href: "https://github.com/yanfeid",
    note: "Code, experiments, templates",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <PageHeader
        overline="fig. 07 — correspondence"
        title={
          <>
            Say <em className="font-serif italic">hello</em>
          </>
        }
        lede="Open to conversations about ML systems, new opportunities, or trail recommendations. I read everything."
      />

      <div>
        {channels.map((c, i) => (
          <Reveal inView delay={i * 0.08} key={c.label}>
            <Link
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                c.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group grid grid-cols-[110px_1fr_auto] items-baseline gap-x-6 border-t border-border py-6 last:border-b transition-colors hover:bg-card/50 -mx-4 px-4 rounded-sm"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {c.label}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-lg group-hover:translate-x-1 transition-transform duration-300">
                  {c.value}
                </span>
                <span className="block text-sm text-muted mt-0.5">
                  {c.note}
                </span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-muted opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 self-center"
              />
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal inView delay={0.4}>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4">
          <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-terminal/80 animate-pulse" />
            open to opportunities
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted/70">
            San Jose, CA
          </p>
        </div>
      </Reveal>
    </div>
  );
}
