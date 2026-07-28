import { Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { EstimateForm } from "./EstimateForm";
import { BUSINESS } from "./data";
import logo from "@/assets/logo.png";


const TESTIMONIALS = [
  {
    quote:
      "The kitchen was finished on schedule and the crew protected every floor and doorway. Communication was excellent from estimate to walkthrough.",
    name: "Sample Review",
    meta: "Hollywood, FL · Kitchen Remodel",
  },
  {
    quote:
      "Clear written pricing with no surprises. The tile work in our master bathroom looks like something out of a magazine.",
    name: "Sample Review",
    meta: "Pembroke Pines, FL · Bathroom Remodel",
  },
  {
    quote:
      "They handled flooring, drywall and paint for the whole house and left the job site spotless every single day.",
    name: "Sample Review",
    meta: "Davie, FL · Interior Renovation",
  },
];

export function Reviews() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Reviews</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-5xl">
            What a great remodel should sound like
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Sample content: the testimonials below are illustrative examples written by us, not real
            customer reviews. They will be replaced with verified reviews as they are collected.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.meta} delay={i * 80}>
              <blockquote className="h-full rounded-3xl border border-navy/5 bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
                <div className="flex gap-0.5 text-accent" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-relaxed text-navy">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 text-sm">
                  <span className="font-bold text-navy">{t.name}</span>
                  <span className="block text-muted-foreground">{t.meta}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export const FAQS = [
  {
    q: "How long does remodeling take?",
    a: "Most bathrooms take 2–4 weeks, kitchens typically 4–8 weeks, and full interior renovations vary with scope. You receive a written schedule before work begins.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes. Estimates and on-site consultations are always free with no obligation anywhere in Broward County.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We are a licensed and insured remodeling contractor and can provide documentation before your project starts.",
  },
  {
    q: "Do you serve all of Broward County?",
    a: "We serve Hollywood, Pembroke Pines, Miramar, Davie, Cooper City, Weston, Plantation, Fort Lauderdale and the surrounding South Florida area.",
  },
  {
    q: "Can I live in my home during renovations?",
    a: "In most cases yes. We phase the work, seal off active areas, protect your floors and clean the site daily so your home stays livable.",
  },
  {
    q: "Do you help with design ideas?",
    a: "Absolutely. We help with layouts, materials, tile and cabinetry selections so the finished space matches the look you want and your budget.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Answers before you commit
          </h2>
          <p className="mt-5 text-muted-foreground">
            Still have a question? Call {BUSINESS.phone} — we answer 24 hours a day.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-navy/10">
                <AccordionTrigger className="text-left text-base font-bold text-navy hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function EstimateSection() {
  return (
    <section id="estimate" className="bg-navy py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Free Estimate</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">Ready to Upgrade Your Home?</h2>
          <p className="mt-4 text-lg text-primary-foreground/75">
            Let&apos;s bring your vision to life. Tell us about your project and we&apos;ll follow
            up with a free, no-pressure estimate.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <a href={BUSINESS.phoneHref} className="flex items-center gap-3 font-semibold">
              <Phone className="size-5 text-accent" /> {BUSINESS.phone}
            </a>
            <p className="flex items-center gap-3 text-primary-foreground/75">
              <MapPin className="size-5 text-accent" /> {BUSINESS.street}, {BUSINESS.city},{" "}
              {BUSINESS.state} {BUSINESS.zip}
            </p>
            <p className="flex items-center gap-3 text-primary-foreground/75">
              <Clock className="size-5 text-accent" /> {BUSINESS.hours}
            </p>
          </div>
          <Button asChild variant="accent" size="xl" className="mt-10">
            <a href={BUSINESS.phoneHref}>Call Now — 24/7</a>
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <EstimateForm variant="glass" />
        </Reveal>
      </div>
    </section>
  );
}


export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="FL Remodeling Services logo"
            width={1152}
            height={576}
            loading="lazy"
            className="h-10 w-auto"
          />
          <address className="mt-5 space-y-2 text-sm not-italic text-muted-foreground">
            <p className="font-bold text-navy">{BUSINESS.name}</p>
            <p>{BUSINESS.street}</p>
            <p>
              {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
            </p>
            <p>
              <a href={BUSINESS.phoneHref} className="font-semibold text-navy hover:text-accent">
                {BUSINESS.phone}
              </a>
            </p>
            <p>{BUSINESS.hours}</p>
          </address>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-[0.14em] text-navy uppercase">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="#services" className="hover:text-accent">
                Services
              </a>
            </li>
            <li>
              <a href="#why" className="hover:text-accent">
                About
              </a>
            </li>
            <li>
              <a href="#estimate" className="hover:text-accent">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-accent">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-[0.14em] text-navy uppercase">Service Area</h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Hollywood, Pembroke Pines, Miramar, Davie, Cooper City, Weston, Plantation, Fort
            Lauderdale and all of Broward County, South Florida.
          </p>
          <a
            href="mailto:info@flremodelingservices.com"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-accent"
          >
            <Mail className="size-4 text-accent" /> Email us
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-navy/10 px-4 pt-6 text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} {BUSINESS.name}. Licensed &amp; insured remodeling contractor
        serving Broward County.
      </div>
    </footer>
  );
}