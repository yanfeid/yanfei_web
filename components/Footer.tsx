import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    href: "https://www.linkedin.com/in/yanfeidai/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/yanfeid", icon: Github, label: "GitHub" },
  { href: "mailto:yanfeidai0811@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 mt-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            © {currentYear} Yanfei Dai
          </p>

          <p className="font-mono text-[11px] text-muted/60 order-last md:order-none">
            <span className="text-terminal/70">$</span> echo &quot;built between
            commits &amp; summits&quot;
          </p>

          <div className="flex items-center gap-5">
            {socials.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="text-muted hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
