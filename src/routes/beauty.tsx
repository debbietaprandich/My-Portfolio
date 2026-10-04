import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/portfolio/MediaPlaceholder";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/beauty")({
  head: () => ({
    meta: [
      { title: "Book Professional Makeup & Beauty Services | Debbie Taprandich" },
      {
        name: "description",
        content:
          "Book professional makeup sessions, beauty social media management, and virtual assistant support backed by Debbie Taprandich’s Diploma in Beauty Therapy.",
      },
      { property: "og:title", content: "Makeup & Beauty Services | Debbie Taprandich" },
      {
        property: "og:description",
        content: "Professional makeup artistry meets stunning content and social media strategy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BeautyPage,
});

function BeautyPage() {
  const pillars = [
    ["I speak makeup & beauty", "Professional training creates real skill, fluency, and trust."],
    ["I know what looks good on camera", "Ideas are shaped for visual, high-converting short-form videos."],
    ["I grow beauty audiences", "Strategy connects daily publishing directly with loyal clients."],
    ["I understand clients", "Clear, friendly communication makes every client feel special."],
  ];

  const audiences = [
    "Makeup clients & brides",
    "Salons & spas",
    "Makeup artists",
    "Beauty brands",
    "Skincare brands",
    "Nail technicians",
    "Lash artists",
    "Hair businesses",
    "Beauty clinics",
    "Wellness brands",
  ];

  return (
    <>
      <PageIntro
        eyebrow="Makeup & Beauty Services"
        title="Flawless makeup & smart beauty content."
        copy="I’m not only a digital creator. My professional beauty training means I know how to glam you up, connect with clients, and bring real visual polish to your brand."
      />

      <section className="page-shell py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <MediaPlaceholder
              label="Debbie’s beauty work"
              kind="portrait"
              src="/images/makeup.jpeg"
              className="aspect-[4/5] min-h-0 overflow-hidden [&_img]:object-contain"
            />
          </Reveal>
          <Reveal delay={100}>
            <Award className="size-8 text-primary" />
            <p className="section-kicker mt-8">Certified Professional</p>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl">Diploma in Beauty Therapy</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Whether you want to book a professional makeup session or need an expert to manage your beauty brand's social media and content, my certified background covers it all from the ground up.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {audiences.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-accent/50 px-4 py-2 text-xs font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a Makeup Session <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="page-shell">
          <p className="text-xs font-bold uppercase text-primary-foreground/60">
            Why work with me
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-primary-foreground/20 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map(([title, copy]) => (
              <article key={title} className="bg-primary p-7">
                <span className="font-display text-4xl text-primary-foreground/35">+</span>
                <p className="mt-12 font-display text-3xl">{title}</p>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/65">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20 text-center sm:py-28">
        <h2 className="mx-auto max-w-4xl font-display text-5xl sm:text-7xl">
          Ready to look stunning or grow your beauty brand?
        </h2>
        <Button asChild size="lg" className="mt-8">
          <Link to="/contact">
            Book now / Get in touch <ArrowRight className="size-4" />
          </Link>
        </Button>
      </section>
    </>
  );
}