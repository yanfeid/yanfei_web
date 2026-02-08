"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yanfei.dai@example.com",
    href: "mailto:yanfei.dai@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yanfei-dai",
    href: "https://linkedin.com/in/yanfei-dai",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/yanfei-dai",
    href: "https://github.com/yanfei-dai",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco Bay Area, CA",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4"
      >
        Get in Touch
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted text-center mb-16 max-w-2xl mx-auto"
      >
        I&apos;m always open to discussing new opportunities, interesting
        projects, or just connecting with fellow engineers.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {info.href ? (
              <Link
                href={info.href}
                target={info.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  info.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-accent transition-all duration-300"
              >
                <div className="p-3 bg-background rounded-lg border border-border group-hover:border-accent transition-colors">
                  <info.icon
                    size={24}
                    className="text-muted group-hover:text-accent transition-colors"
                  />
                </div>
                <div>
                  <p className="text-sm text-muted">{info.label}</p>
                  <p className="font-medium group-hover:text-accent transition-colors">
                    {info.value}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl">
                <div className="p-3 bg-background rounded-lg border border-border">
                  <info.icon size={24} className="text-muted" />
                </div>
                <div>
                  <p className="text-sm text-muted">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Resume CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Link
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-xl font-medium hover:bg-accent/90 transition-colors"
        >
          <FileText size={20} />
          Download Resume
        </Link>
      </motion.div>

      {/* Open to work message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-16 p-8 bg-card border border-border rounded-xl text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm font-mono mb-4">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Open to opportunities
        </div>
        <p className="text-muted max-w-lg mx-auto">
          Currently exploring new opportunities in machine learning and AI. If
          you&apos;re working on something interesting, I&apos;d love to hear about it!
        </p>
      </motion.div>
    </div>
  );
}
