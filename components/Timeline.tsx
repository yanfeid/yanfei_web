"use client";

import { motion } from "framer-motion";
import { Experience } from "@/data/experience";

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="border-b border-border pb-8 last:border-b-0"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
            <div>
              <h3 className="text-xl font-bold">{exp.company}</h3>
              <p className="text-muted">{exp.role}</p>
            </div>
            <div className="text-sm text-muted md:text-right">
              <p>{exp.period}</p>
              <p>{exp.location}</p>
            </div>
          </div>

          {/* Achievements */}
          <ul className="space-y-2 mt-4">
            {exp.achievements.map((achievement, i) => (
              <li
                key={i}
                className="text-sm text-muted leading-relaxed flex items-start gap-2"
              >
                <span className="text-accent mt-0.5">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono text-muted bg-card rounded border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
