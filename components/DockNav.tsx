"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  FolderGit2,
  Camera,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { Dock, DockIcon } from "./magicui/Dock";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/gallery", label: "Gallery", icon: Camera },
  { href: "/contact", label: "Contact", icon: Mail },
];

const socials = [
  { href: "https://github.com/yanfeid", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/yanfeidai/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

export default function DockNav() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 120, damping: 16 }}
      className="fixed bottom-5 left-0 right-0 z-50 hidden md:block"
    >
      <Dock>
        {links.map(({ href, label, icon: Icon }) => (
          <DockIcon key={href} label={label}>
            <Link
              href={href}
              aria-label={label}
              className="flex h-full w-full items-center justify-center"
            >
              <Icon className="h-full w-full" />
            </Link>
          </DockIcon>
        ))}
        <div className="mx-1 h-8 w-px self-center bg-border" />
        {socials.map(({ href, label, icon: Icon }) => (
          <DockIcon key={href} label={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-full w-full items-center justify-center"
            >
              <Icon className="h-full w-full" />
            </a>
          </DockIcon>
        ))}
      </Dock>
    </motion.div>
  );
}
