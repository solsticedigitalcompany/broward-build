import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BUSINESS } from "./data";
import logo from "@/assets/logo.png";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#areas", label: "Service Area" },
  { href: "#faq", label: "FAQ" },
];

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-accent transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled ? "glass-light shadow-[var(--shadow-card)]" : "bg-transparent",
          )}
        >
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo}
              alt="FL Remodeling Services logo"
              width={1152}
              height={576}
              className={cn(
                "h-9 w-auto transition-all duration-500 sm:h-10",
                scrolled ? "" : "brightness-0 invert",
              )}
            />
            <span className="sr-only">FL Remodeling Services</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-accent",
                  scrolled ? "text-navy" : "text-primary-foreground/90",
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={BUSINESS.phoneHref}
              className={cn(
                "hidden items-center gap-2 text-sm font-bold sm:flex",
                scrolled ? "text-navy" : "text-primary-foreground",
              )}
            >
              <Phone className="size-4 text-accent" />
              {BUSINESS.phone}
            </a>
            <Button asChild variant="accent" size="pill" className="hidden sm:inline-flex">
              <a href="#estimate">Get Free Estimate</a>
            </Button>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "grid size-11 place-items-center rounded-xl lg:hidden",
                scrolled ? "text-navy" : "text-primary-foreground",
              )}
            >
              {open ? <Menu className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass-light mt-2 rounded-2xl p-4 shadow-[var(--shadow-card)] lg:hidden">
            <div className="flex items-center justify-between pb-2">
              <span className="eyebrow">Menu</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="size-5 text-navy" />
              </button>
            </div>
            <nav className="grid gap-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-navy hover:bg-surface"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}