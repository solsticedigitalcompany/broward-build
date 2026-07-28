import { useEffect, useState } from "react";
import {
  Bath,
  Brush,
  ChefHat,
  Grid2x2,
  Hammer,
  Home,
  LayoutGrid,
  PaintRoller,
  Sparkles,
  BadgeCheck,
  Gem,
  HandCoins,
  MessageSquare,
  Broom,
  ShieldCheck,
  MapPin,
  FileText,
} from "lucide-react";
import { Reveal, useInView } from "./Reveal";
import { CITIES } from "./data";
import { Button } from "@/components/ui/button";
import kitchen from "@/assets/project-kitchen.jpg";
import bathroom from "@/assets/project-bathroom.jpg";
import living from "@/assets/project-living.jpg";
import flooring from "@/assets/project-flooring.jpg";
import cabinets from "@/assets/project-cabinets.jpg";
import interior from "@/assets/project-interior.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, visible } = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  const stats = [
    { value: 100, suffix: "%", label: "Satisfaction Focused" },
    { value: 24, suffix: "/7", label: "Fast Response" },
    { value: 8, suffix: "+", label: "Cities Served" },
    { value: 0, suffix: "$", label: "Cost For Estimates" },
  ];
  return (
    <section className="relative z-10 -mt-16 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="rounded-3xl bg-card p-8 shadow-[var(--shadow-elegant)] sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:items-center">
            <div>
              <p className="eyebrow">Trusted Locally</p>
              <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
                Quality craftsmanship, transparent pricing, and clean job sites.
              </h2>
            </div>
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-accent/40 pl-4">
                  <dt className="text-3xl font-extrabold text-navy sm:text-4xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: ChefHat,
    title: "Kitchen Remodeling",
    desc: "Full kitchen transformations — layout, cabinetry, countertops, lighting and finishes.",
  },
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    desc: "Spa-quality bathrooms with modern tile, vanities, glass enclosures and fixtures.",
  },
  {
    icon: LayoutGrid,
    title: "Floor Installation",
    desc: "Tile, luxury vinyl, laminate and wood flooring installed level, tight and lasting.",
  },
  {
    icon: PaintRoller,
    title: "Drywall & Painting",
    desc: "Seamless drywall repair, texture matching and clean interior and exterior painting.",
  },
  {
    icon: Home,
    title: "Interior Renovations",
    desc: "Open up walls, refresh trim and modernize every room of your home end to end.",
  },
  {
    icon: Hammer,
    title: "Custom Home Improvements",
    desc: "Built-ins, closets, laundry rooms and the custom upgrades you have been planning.",
  },
  {
    icon: Grid2x2,
    title: "Tile Installation",
    desc: "Precision tile work for floors, showers, backsplashes and feature walls.",
  },
  {
    icon: Brush,
    title: "Cabinet Installation",
    desc: "Stock or custom cabinetry measured, installed and finished to perfection.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-5xl">
            Remodeling services built for South Florida homes
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            One licensed team for every phase of your renovation — from a single bathroom to a
            whole-home interior rebuild.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group h-full rounded-3xl border border-navy/5 bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elegant)]">
                <div className="grid size-12 place-items-center rounded-2xl bg-navy text-primary-foreground transition-colors duration-500 group-hover:bg-accent">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  { icon: BadgeCheck, title: "Experienced Professionals" },
  { icon: Gem, title: "High Quality Materials" },
  { icon: HandCoins, title: "Honest Pricing" },
  { icon: MessageSquare, title: "Reliable Communication" },
  { icon: Sparkles, title: "Clean Job Sites" },
  { icon: ShieldCheck, title: "Licensed & Insured" },
  { icon: MapPin, title: "Locally Owned" },
  { icon: FileText, title: "Free Estimates" },
];

export function WhyUs() {
  return (
    <section id="why" className="bg-navy py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">
            A remodeling partner you can actually reach.
          </h2>
          <p className="mt-5 max-w-lg text-base text-primary-foreground/75 sm:text-lg">
            We keep projects predictable: clear scope, clear pricing, and daily communication from
            the first walkthrough to the final punch list.
          </p>
          <div className="mt-9 overflow-hidden rounded-3xl">
            <img
              src={living}
              alt="Renovated open living room with new flooring and ceiling detail"
              width={1200}
              height={900}
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {REASONS.map((r) => (
              <li
                key={r.title}
                className="glass-panel flex items-start gap-4 rounded-2xl p-5 transition-transform duration-500 hover:-translate-y-1"
              >
                <r.icon className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-sm font-semibold sm:text-base">{r.title}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const PROJECTS = [
  { img: kitchen, title: "Kitchen", desc: "Navy island, quartz tops, full cabinetry rebuild" },
  { img: bathroom, title: "Bathroom", desc: "Marble tile, frameless glass, floating vanity" },
  { img: living, title: "Living Room", desc: "Open concept refresh with new trim and paint" },
  { img: flooring, title: "Flooring", desc: "Wide plank installation across the main floor" },
  { img: cabinets, title: "Cabinet Installation", desc: "Custom shaker cabinetry and hardware" },
  { img: interior, title: "Interior Renovation", desc: "Whole-home drywall, paint and finishes" },
];

export function Projects() {
  return (
    <section id="projects" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured Projects</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-5xl">
              The level of finish we build toward
            </h2>
          </div>
          <Button asChild variant="outlineNavy" size="pill">
            <a href="#estimate">Start Your Project</a>
          </Button>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <figure className="group relative overflow-hidden rounded-3xl">
                <img
                  src={p.img}
                  alt={`${p.title} remodeling project example`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-90" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-lg font-bold text-primary-foreground">{p.title}</h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-sm text-primary-foreground/80 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {p.desc}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Imagery shown is representative of the finish quality we deliver.
        </p>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "1", t: "Request Estimate", d: "Call or send the form — we respond fast, any hour." },
  { n: "2", t: "Receive Consultation", d: "We walk the space, discuss ideas and measure." },
  { n: "3", t: "Approve Project", d: "Clear written scope and pricing before work starts." },
  { n: "4", t: "We Build", d: "Licensed crews, protected surfaces, daily updates." },
  { n: "5", t: "Final Walkthrough", d: "We review every detail together before we finish." },
];

export function Process() {
  return (
    <section id="process" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Our Process</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-5xl">
            Five simple steps, zero surprises
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} as="li">
              <div className="h-full rounded-3xl border border-navy/5 bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
                <span className="font-display text-5xl font-extrabold text-accent/25">{s.n}</span>
                <h3 className="mt-4 text-base font-bold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ServiceArea() {
  return (
    <section id="areas" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow">Service Area</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-5xl">
            Proudly remodeling across Broward County
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Based on Sheridan Street in Hollywood, FL and serving homeowners throughout Broward
            County and South Florida.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <li
                key={c}
                className="rounded-full border border-navy/10 bg-surface px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-accent hover:text-accent"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-[var(--shadow-card)]">
            <iframe
              title="Map of the Broward County service area for FL Remodeling Services"
              src="https://www.google.com/maps?q=Broward%20County,%20Florida&z=10&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}