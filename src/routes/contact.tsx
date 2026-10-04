import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Mail, ShieldAlert } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { socials } from "@/content/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Work With Debbie Taprandich | Project Inquiry" },
      {
        name: "description",
        content:
          "Enquire about social media management, content creation, UGC, makeup sessions or virtual assistant services with Debbie Taprandich.",
      },
      { property: "og:title", content: "Work With Debbie Taprandich" },
      { property: "og:description", content: "Let’s create something people can’t scroll past." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

// Minimum budget requirements per service (in KES) with clear, friendly naming
const SERVICE_MINIMUMS: Record<string, { min: number; label: string }> = {
  "Social Media Management": { min: 10000, label: "Ksh 10,000" },
  "Book a Makeup Session": { min: 2000, label: "Ksh 2,000" },
  "Content Creation": { min: 5000, label: "Ksh 5,000" },
  "Virtual Assistant Services": { min: 8000, label: "Ksh 8,000" },
  "UGC": { min: 5000, label: "Ksh 5,000" },
  "Brand Collaboration": { min: 15000, label: "Ksh 15,000" },
  "Other": { min: 3000, label: "Ksh 3,000" },
};

const schema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name.").max(100),
    email: z.string().trim().email("Please enter a valid email.").max(255),
    company: z.string().trim().max(120).optional(),
    interest: z.string().min(1, "Choose a service."),
    budget: z.string().trim().min(1, "Please enter your budget.").max(80),
    timeline: z.string().trim().min(1, "Please select a date and time.").max(80),
    message: z.string().trim().min(15, "Please share at least 15 characters.").max(1500),
  })
  .superRefine((data, ctx) => {
    const serviceConfig = SERVICE_MINIMUMS[data.interest];
    
    if (!serviceConfig) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please choose a valid service.",
        path: ["interest"],
      });
      return;
    }

    const numericBudget = parseInt(data.budget.replace(/[^0-9]/g, ""), 10);

    if (isNaN(numericBudget) || numericBudget < serviceConfig.min) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Minimum budget for ${data.interest} is ${serviceConfig.label}. Feel free to increase it!`,
        path: ["budget"],
      });
    }
  });

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [selectedInterest, setSelectedInterest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isMakeupService = selectedInterest === "Book a Makeup Session";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const data = Object.fromEntries(form.entries());
    const parsed = schema.safeParse(data);
    
    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    formEl.submit();
  };

  const currentMinimum = SERVICE_MINIMUMS[selectedInterest];

  return (
    <>
      <PageIntro
        eyebrow="Start a project"
        title="Have a project in mind?"
        copy="Let’s create something people can’t scroll past."
      />
      <section className="page-shell pb-24 pt-8">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <aside>
            <p className="section-kicker">Contact</p>
            <h2 className="mt-4 font-display text-4xl">A simple first step.</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Share what you’re building, what support you need and your ideal timing. Inquiries route
              directly to Debbie's inbox.
            </p>
            <div className="mt-8 rounded-2xl border border-dashed border-border p-5">
              <Mail className="size-5 text-primary" />
              <p className="mt-4 text-sm font-semibold">debbietaprandich@gmail.com</p>
            </div>
            <p className="section-kicker mt-10">Social profiles</p>
            <div className="mt-3 grid gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-border py-3 text-sm transition-all duration-300 hover:border-primary hover:pl-2"
                >
                  <span className="font-medium transition-colors group-hover:text-primary">
                    {s.name}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground transition-all duration-300 group-hover:text-primary">
                    <span>Explore</span>
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </aside>

          <form
            action="https://formsubmit.co/debbietaprandich@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            noValidate
            className="grid gap-5 rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-8"
          >
            <input type="hidden" name="_subject" value="New Inquiry from Portfolio!" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
              
              {/* Service Selection comes first */}
              <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
                I’m interested in
                <select
                  name="interest"
                  value={selectedInterest}
                  onChange={(e) => setSelectedInterest(e.target.value)}
                  className="h-12 rounded-xl border border-input bg-background px-4 font-normal outline-none focus:border-primary"
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  {Object.keys(SERVICE_MINIMUMS).map((o) => (
                    <option key={o} value={o}>
                      {o} (From {SERVICE_MINIMUMS[o].label})
                    </option>
                  ))}
                </select>
                {errors.interest && (
                  <span className="text-xs text-destructive">{errors.interest}</span>
                )}
              </label>

              {/* Company / Brand automatically disappears if Book a Makeup Session is chosen */}
              {!isMakeupService && (
                <Field label="Company / Brand" name="company" error={errors.company} />
              )}

              <Field
                label="Budget (KES)"
                name="budget"
                placeholder={currentMinimum ? `Min. ${currentMinimum.label}` : "e.g. 10000"}
                error={errors.budget}
              />

              {/* Calendar & Time Timeline Picker */}
              <label className={`grid gap-2 text-sm font-semibold ${isMakeupService ? "sm:col-span-2" : ""}`}>
                Preferred Date & Time
                <input
                  name="timeline"
                  type="datetime-local"
                  className="h-12 rounded-xl border border-input bg-background px-4 font-normal outline-none focus:border-primary"
                />
                {errors.timeline && <span className="text-xs text-destructive">{errors.timeline}</span>}
              </label>

              {currentMinimum && (
                <div className="sm:col-span-2 flex items-center gap-2 text-xs text-muted-foreground bg-secondary/50 p-3 rounded-xl border border-border">
                  <ShieldAlert className="size-4 text-primary shrink-0" />
                  <span>
                    Minimum investment for <strong>{selectedInterest}</strong> is set at{" "}
                    <strong className="text-foreground">{currentMinimum.label}</strong> (can be added, not reduced).
                  </span>
                </div>
              )}
            </div>

            <label className="grid gap-2 text-sm font-semibold">
              {isMakeupService ? "Tell me about your look or event" : "What do you need help with?"}
              <textarea
                name="message"
                rows={7}
                maxLength={1500}
                className="rounded-xl border border-input bg-background p-4 font-normal outline-none focus:border-primary"
                placeholder={
                  isMakeupService
                    ? "Share your event type, preferred look, or specific inspiration..."
                    : "Tell me about your brand, challenge and what a great result would look like."
                }
              />
              {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
            </label>

            <Button type="submit" size="lg" className="justify-self-start" disabled={isSubmitting}>
              {isSubmitting ? "Sending inquiry..." : "Send inquiry"} <ArrowUpRight className="size-4" />
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error: string | undefined;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="h-12 rounded-xl border border-input bg-background px-4 font-normal outline-none focus:border-primary"
      />
      {error && <span className="text-xs text-destructive">{error}</span>}
    </label>
  );
}