import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const PROJECT_TYPES = [
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Floor Installation",
  "Drywall & Painting",
  "Interior Renovation",
  "Tile Installation",
  "Cabinet Installation",
  "Other Home Improvement",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  projectType: z.string().trim().min(1, "Please select a project type").max(100),
  description: z.string().trim().min(10, "Tell us a bit about the project").max(1000),
});

interface EstimateFormProps {
  variant?: "navy" | "glass";
  showTitle?: boolean;
  onSuccess?: () => void;
}

export function EstimateForm({
  variant = "navy",
  showTitle = true,
  onSuccess,
}: EstimateFormProps) {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      projectType: fd.get("projectType"),
      description: fd.get("description"),
      contactMethod,
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Request received — we'll reach out shortly.");
      form.reset();
      onSuccess?.();
    }, 600);
  };

  const isGlass = variant === "glass";

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-3xl p-6 shadow-[var(--shadow-elegant)] sm:p-8 ${
        isGlass
          ? "glass-panel border border-white/20"
          : "bg-white text-navy"
      }`}
    >
      {showTitle && (
        <h3 className={`text-xl font-bold ${isGlass ? "text-primary-foreground" : "text-navy"}`}>
          Request Your Free Estimate
        </h3>
      )}
      <div className={`grid gap-5 sm:grid-cols-2 ${showTitle ? "mt-6" : ""}`}>
        <div className="grid gap-2">
          <Label htmlFor="estimate-name">Name</Label>
          <Input id="estimate-name" name="name" maxLength={100} placeholder="Jane Smith" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="estimate-phone">Phone</Label>
          <Input
            id="estimate-phone"
            name="phone"
            type="tel"
            maxLength={30}
            placeholder="(954) 000-0000"
            required
          />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="estimate-email">Email</Label>
          <Input
            id="estimate-email"
            name="email"
            type="email"
            maxLength={255}
            placeholder="you@email.com"
            required
          />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="estimate-projectType">Project Type</Label>
          <select
            id="estimate-projectType"
            name="projectType"
            required
            defaultValue=""
            className={`h-10 rounded-md border px-3 text-sm ${
              isGlass
                ? "border-white/25 bg-navy-soft text-primary-foreground"
                : "border-navy/20 bg-surface text-navy"
            }`}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {PROJECT_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="estimate-description">Project Description</Label>
          <Textarea
            id="estimate-description"
            name="description"
            rows={4}
            maxLength={1000}
            placeholder="Tell us about the space, timeline and any ideas you have."
            required
          />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium">Preferred Contact Method</span>
          <div className="flex flex-wrap gap-2">
            {["Phone", "Text", "Email"].map((m) => (
              <button
                type="button"
                key={m}
                onClick={() => setContactMethod(m)}
                aria-pressed={contactMethod === m}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  contactMethod === m
                    ? "bg-accent text-accent-foreground"
                    : isGlass
                      ? "border border-white/25 text-primary-foreground/80 hover:border-accent"
                      : "border border-navy/20 text-navy/80 hover:border-accent"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Button
        type="submit"
        variant="accent"
        size="xl"
        disabled={submitting}
        className="mt-8 w-full"
      >
        {submitting ? "Sending…" : "Request Your Free Estimate"}
      </Button>
      <p
        className={`mt-4 text-center text-xs ${
          isGlass ? "text-primary-foreground/60" : "text-muted-foreground"
        }`}
      >
        Free estimates · No obligation · We respond 24/7
      </p>
    </form>
  );
}
