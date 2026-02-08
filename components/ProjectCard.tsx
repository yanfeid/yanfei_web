"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-card border border-border rounded-xl p-6 flex flex-col h-full hover:border-accent transition-all duration-300"
    >
      {project.featured && (
        <span className="inline-block px-2 py-1 text-xs font-mono bg-accent/10 text-accent rounded mb-4 w-fit">
          Featured
        </span>
      )}

      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
        {project.title}
      </h3>

      <p className="text-muted text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-mono bg-background rounded border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-border">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm"
          >
            <Github size={16} />
            <span>Code</span>
          </Link>
        )}
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
