import { Phone, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "./data";
import { EstimateForm } from "./EstimateForm";
import heroImg from "@/assets/hero-kitchen.jpg";

const PILLS = [
  "Kitchen Remodeling",
  "Bathroom Renovations",
  "Flooring",
  "Interior Renovations",
  "Home Improvements",
];

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-navy">
      <img
        src={heroImg}
        alt="Luxury remodeled kitchen with marble island in a South Florida home"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-28 pb-24 sm:px-6 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="max-w-3xl">
            <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-primary-foreground">
              <ShieldCheck className="size-4 text-accent" />
              <span className="text-xs font-bold tracking-[0.14em] uppercase">
                Licensed &amp; Insured · Serving Broward County
              </span>
            </div>

            <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold text-primary-foreground sm:text-5xl lg:text-6xl">
              Transform Your Home With Broward County&apos;s{" "}
              <span className="text-accent">Trusted Remodeling Experts</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Kitchens, bathrooms, flooring and full interior renovations built by licensed
              professionals. Free estimates, honest pricing, and craftsmanship that lasts.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {PILLS.map((p) => (
                <li
                  key={p}
                  className="glass-panel rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground/90 sm:text-sm"
                >
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="accent" size="xl">
                <a href="#estimate">Get Free Estimate</a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href={BUSINESS.phoneHref}>
                  <Phone className="size-4" /> Call {BUSINESS.phone}
                </a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-3 text-primary-foreground/80">
              <div className="flex gap-0.5 text-accent" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-medium">
                Trusted by Broward County homeowners · {BUSINESS.hours}
              </p>
            </div>
          </div>

          <div>
            <EstimateForm variant="navy" />
          </div>
        </div>
      </div>
    </section>
  );
}
