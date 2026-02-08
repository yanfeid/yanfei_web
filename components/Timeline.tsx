"use client";

import { motion } from "framer-motion";
import { Experience } from "@/data/experience";

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background md:-translate-x-1/2 z-10" />

            {/* Content */}
            <div
              className={`ml-8 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}
            >
              <div
                className={`bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors ${
                  index % 2 === 0 ? "md:ml-auto" : ""
                } max-w-lg`}
              >
                <span className="text-accent font-mono text-sm">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold mt-2">{exp.company}</h3>
                <p className="text-muted mt-1">
                  {exp.role} • {exp.location}
                </p>
                <p className="text-muted mt-4 text-sm leading-relaxed">
                  {exp.description}
                </p>

                <ul
                  className={`mt-4 space-y-2 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className={`text-sm text-muted flex items-start gap-2 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-accent mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-6 flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-background rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Empty space for alternating layout */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
