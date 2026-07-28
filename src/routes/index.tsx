import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header, ScrollProgress } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import {
  Process,
  Projects,
  ServiceArea,
  Services,
  SocialProof,
  WhyUs,
} from "@/components/site/Sections";
import { EstimateSection, FAQ, FAQS, Footer, Reviews } from "@/components/site/Closing";
import { BUSINESS, CITIES } from "@/components/site/data";

const TITLE = "Remodeling Contractor Broward County | FL Remodeling Services";
const DESCRIPTION =
  "Kitchen & bathroom remodeling in Hollywood FL and all of Broward County. Licensed, insured home remodeling contractor. Free estimates — call (954) 300-2186.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "remodeling contractor Broward County, kitchen remodeling Hollywood FL, bathroom remodeling Hollywood FL, home remodeling Broward County, remodeling company Hollywood FL, general contractor Broward County",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: BUSINESS.name,
          description: DESCRIPTION,
          telephone: "+1-954-300-2186",
          address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS.street,
            addressLocality: BUSINESS.city,
            addressRegion: BUSINESS.state,
            postalCode: BUSINESS.zip,
            addressCountry: "US",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          ],
          areaServed: CITIES.map((c) => ({ "@type": "City", name: `${c}, FL` })),
          priceRange: "$$",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <WhyUs />
        <Projects />
        <Process />
        <ServiceArea />
        <Reviews />
        <FAQ />
        <EstimateSection />
      </main>
      <Footer />
      <div className="h-20 md:hidden" />
      <FloatingCTA />
      <Toaster position="top-center" />
    </div>
  );
}
