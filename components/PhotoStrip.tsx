"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import DraggableFilmStrip from "./DraggableFilmStrip";

const photos = [
  "/images/gallery/astronomy/astronomy-1.jpeg",
  "/images/gallery/landscape-2.jpeg",
  "/images/gallery/landscape-4.jpeg",
  "/images/gallery/astronomy/astronomy-2.jpeg",
  "/images/gallery/landscape-6.jpeg",
  "/images/gallery/landscape-8.jpeg",
  "/images/gallery/landscape-10.jpeg",
  "/images/gallery/landscape-12.jpeg",
];

export default function PhotoStrip() {
  return (
    <section className="py-24 overflow-hidden">
      <Reveal inView className="max-w-5xl mx-auto px-6 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-3">
              <span className="text-terminal normal-case tracking-normal">
                {"//"}
              </span>{" "}
              fig. 04 — field notes
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Through <em className="font-serif italic">my lens</em>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group hidden sm:inline-flex items-center gap-1.5 font-mono text-sm text-muted hover:text-foreground transition-colors"
          >
            All photographs
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Reveal>

      <Reveal inView>
        <DraggableFilmStrip speed={28}>
          {photos.map((src) => (
            <Link
              key={src}
              href="/gallery"
              draggable={false}
              className="group relative block h-52 md:h-64 w-80 md:w-96 shrink-0 overflow-hidden rounded-lg border border-border"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Photography by Yanfei Dai"
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover grayscale-[0.55] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
              />
            </Link>
          ))}
        </DraggableFilmStrip>
      </Reveal>
      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted/50">
        drag to explore
      </p>
    </section>
  );
}
