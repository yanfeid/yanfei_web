"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://linkedin.com/in/yanfei-dai",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/yanfei-dai",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "mailto:yanfei.dai@example.com",
    icon: Mail,
    label: "Email",
  },
];

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
}

export default function SocialLinks({ size = "md" }: SocialLinksProps) {
  const iconSize = size === "sm" ? 18 : size === "lg" ? 28 : 22;

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          <Link
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="flex items-center justify-center p-3 rounded-full bg-card border border-border hover:border-accent hover:text-accent transition-all duration-300"
            aria-label={link.label}
          >
            <link.icon size={iconSize} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
