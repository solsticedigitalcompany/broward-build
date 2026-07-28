import { createFileRoute, Link } from "@tanstack/react-router";
import { BUSINESS } from "@/components/site/data";

const TITLE = "Privacy Policy | FL Remodeling Services";
const DESCRIPTION =
  "How FL Remodeling Services collects, uses and protects the information you submit through our Broward County remodeling estimate requests.";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <Link to="/" className="eyebrow">
        ← Back home
      </Link>
      <h1 className="mt-6 text-4xl font-extrabold text-navy">Privacy Policy</h1>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          This page is maintained by {BUSINESS.name} to explain how information submitted through
          this website is handled.
        </p>
        <h2 className="text-xl font-bold text-navy">Information we collect</h2>
        <p>
          When you submit an estimate request we collect the name, phone number, email address,
          project type, project description and preferred contact method you provide.
        </p>
        <h2 className="text-xl font-bold text-navy">How we use it</h2>
        <p>
          We use your information only to respond to your request, schedule a consultation and
          discuss your remodeling project. We do not sell your information.
        </p>
        <h2 className="text-xl font-bold text-navy">Third-party content</h2>
        <p>
          This site embeds a Google Maps frame to show our service area. Google may collect data
          according to its own privacy policy.
        </p>
        <h2 className="text-xl font-bold text-navy">Contact</h2>
        <p>
          {BUSINESS.name}, {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip} ·{" "}
          <a href={BUSINESS.phoneHref} className="font-semibold text-navy hover:text-accent">
            {BUSINESS.phone}
          </a>
        </p>
      </div>
    </main>
  );
}