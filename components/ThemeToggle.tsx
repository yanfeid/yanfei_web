"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {}
}

export function toggleTheme(): "light" | "dark" {
  const next = document.documentElement.classList.contains("light")
    ? "dark"
    : "light";
  applyTheme(next);
  return next;
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    setMounted(true);
    setTheme(
      document.documentElement.classList.contains("light") ? "light" : "dark"
    );
    const onTheme = () =>
      setTheme(
        document.documentElement.classList.contains("light")
          ? "light"
          : "dark"
      );
    window.addEventListener("theme-changed", onTheme);
    return () => window.removeEventListener("theme-changed", onTheme);
  }, []);

  return (
    <button
      onClick={() => {
        setTheme(toggleTheme());
        window.dispatchEvent(new Event("theme-changed"));
      }}
      className="rounded-md border border-border p-1.5 text-muted transition-colors hover:text-terminal hover:border-muted/50"
      aria-label="Toggle theme"
    >
      {mounted && theme === "light" ? <Sun size={13} /> : <Moon size={13} />}
    </button>
  );
}
