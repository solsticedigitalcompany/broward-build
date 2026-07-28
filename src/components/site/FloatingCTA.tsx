import { useEffect, useState } from "react";
import { CalendarCheck, Phone } from "lucide-react";
import { BUSINESS } from "./data";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 p-3 transition-all duration-500 md:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="glass-light grid grid-cols-2 gap-2 rounded-2xl p-2 shadow-[var(--shadow-elegant)]">
        <a
          href={BUSINESS.phoneHref}
          className="flex h-13 items-center justify-center gap-2 rounded-xl bg-navy py-4 text-sm font-bold text-primary-foreground"
        >
          <Phone className="size-4" /> Call Now
        </a>
        <a
          href="#estimate"
          className="flex h-13 items-center justify-center gap-2 rounded-xl bg-accent py-4 text-sm font-bold text-accent-foreground"
        >
          <CalendarCheck className="size-4" /> Free Estimate
        </a>
      </div>
    </div>
  );
}