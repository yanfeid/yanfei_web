"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-fit md:max-w-none mx-auto md:flex md:justify-center">
        <div className="flex items-center justify-between gap-6 rounded-full border border-border bg-background/70 backdrop-blur-xl px-5 py-2.5 shadow-lg shadow-black/20">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-sm tracking-wide hover:text-accent transition-colors"
          >
            YD
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-1.5 font-mono text-[13px] lowercase transition-colors hover:text-foreground ${
                  pathname === link.href ? "text-foreground" : "text-muted"
                }`}
              >
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-card border border-border"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {pathname === link.href && (
                    <span className="text-terminal">./</span>
                  )}
                  {link.label}
                </span>
              </Link>
            ))}
            <button
              onClick={() =>
                window.dispatchEvent(new Event("open-command-palette"))
              }
              className="ml-1 rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted transition-colors hover:text-terminal hover:border-muted/50"
              aria-label="Open command palette"
            >
              ⌘K
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden mt-2 rounded-2xl border border-border bg-background/90 backdrop-blur-xl"
            >
              <div className="p-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-2 font-mono text-sm lowercase transition-colors hover:text-foreground ${
                      pathname === link.href ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
