"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { toggleTheme } from "./ThemeToggle";

type Command = {
  id: string;
  label: string;
  hint: string;
  keywords?: string;
  run: () => string | void; // may return an output line to print
};

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [output, setOutput] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo<Command[]>(
    () => [
      {
        id: "home",
        label: "cd ~/",
        hint: "go home",
        keywords: "home index",
        run: () => router.push("/"),
      },
      {
        id: "projects",
        label: "cd ./projects",
        hint: "the workshop",
        keywords: "projects work portfolio",
        run: () => router.push("/projects"),
      },
      {
        id: "gallery",
        label: "cd ./gallery",
        hint: "field notes",
        keywords: "gallery photos photography",
        run: () => router.push("/gallery"),
      },
      {
        id: "contact",
        label: "cd ./contact",
        hint: "say hello",
        keywords: "contact email",
        run: () => router.push("/contact"),
      },
      {
        id: "email",
        label: "pbcopy < email",
        hint: "copy email address",
        keywords: "email copy mail",
        run: () => {
          navigator.clipboard?.writeText("yanfeidai0811@gmail.com");
          return "> copied: yanfeidai0811@gmail.com";
        },
      },
      {
        id: "github",
        label: "open github",
        hint: "github.com/yanfeid",
        keywords: "github code",
        run: () => {
          window.open("https://github.com/yanfeid", "_blank");
        },
      },
      {
        id: "linkedin",
        label: "open linkedin",
        hint: "linkedin.com/in/yanfeidai",
        keywords: "linkedin",
        run: () => {
          window.open("https://www.linkedin.com/in/yanfeidai/", "_blank");
        },
      },
      {
        id: "theme",
        label: "toggle --theme",
        hint: "light / dark",
        keywords: "theme light dark mode toggle",
        run: () => {
          const next = toggleTheme();
          window.dispatchEvent(new Event("theme-changed"));
          return `> theme set to ${next}`;
        },
      },
      {
        id: "coffee",
        label: "sudo make coffee",
        hint: "?",
        keywords: "sudo coffee easter",
        run: () =>
          "> permission denied — try a mountain sunrise instead ⛰",
      },
    ],
    [router]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.label} ${c.hint} ${c.keywords ?? ""}`.toLowerCase().includes(q)
    );
  }, [commands, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setCursor(0);
    setOutput(null);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        close();
      }
    };
    const onOpenEvent = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpenEvent);
    };
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    setCursor(0);
  }, [query]);

  const runCommand = (cmd: Command) => {
    const out = cmd.run();
    if (typeof out === "string") {
      setOutput(out);
    } else {
      close();
    }
  };

  const onInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter" && filtered[cursor]) {
      runCommand(filtered[cursor]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm px-4 pt-[18vh]"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-background/95 shadow-2xl shadow-black/50 font-mono text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* prompt */}
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <span className="text-terminal">~/yanfei $</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="type a command…"
                spellCheck={false}
                className="flex-1 bg-transparent outline-none placeholder:text-muted/50"
              />
              <span className="animate-blink text-terminal">▍</span>
            </div>

            {/* results */}
            <ul className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <li className="px-5 py-3 text-muted">
                  command not found: {query}
                </li>
              )}
              {filtered.map((cmd, i) => (
                <li key={cmd.id}>
                  <button
                    onMouseEnter={() => setCursor(i)}
                    onClick={() => runCommand(cmd)}
                    className={`flex w-full items-baseline justify-between px-5 py-2.5 text-left transition-colors ${
                      i === cursor
                        ? "bg-card text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span>
                      {i === cursor && (
                        <span className="text-terminal mr-2">›</span>
                      )}
                      {cmd.label}
                    </span>
                    <span className="text-xs text-muted/60">{cmd.hint}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* output line */}
            {output && (
              <p className="border-t border-border px-5 py-3 text-terminal">
                {output}
              </p>
            )}

            {/* footer hints */}
            <div className="flex items-center gap-5 border-t border-border px-5 py-2.5 text-[11px] text-muted/60">
              <span>↑↓ navigate</span>
              <span>↵ run</span>
              <span>esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
