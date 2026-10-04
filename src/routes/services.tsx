import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { services } from "@/content/portfolio";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Social Media & Virtual Assistant Services | Debbie Taprandich" },
      {
        name: "description",
        content:
          "Social media management, content support, creator support and beauty virtual assistant services from Debbie Taprandich in Kenya.",
      },
      { property: "og:title", content: "Services | Debbie Taprandich" },
      {
        property: "og:description",
        content: "Flexible digital support for brands, beauty businesses and creators.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});
function ServicesPage() {
  const why = [
    ["I create", "Content designed to stop the scroll."],
    ["I understand people", "Relatable ideas built around real audience behaviour."],
    ["I understand beauty", "Professional beauty training gives me a category advantage."],
    ["I understand social media", "I have managed platforms and grown communities."],
    ["I watch the numbers", "Views, engagement, growth and results matter."],
    ["I’m creative", "Personality, trends and storytelling belong in the work."],
  ];
  return (
    <>
      <PageIntro
        eyebrow="Beauty & creative industry VA"
        title="Digital support that keeps your brand moving."
        copy="Flexible social media, content, beauty-business and creator support—shaped around what you actually need."
      />
      <section className="page-shell py-16 sm:py-24">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 70}>
              <article className="h-full bg-card p-7 sm:p-10">
                <span className="font-mono text-xs text-primary">{service.number}</span>
                <h2 className="mt-8 font-display text-4xl sm:text-5xl">{service.title}</h2>
                <p className="mt-4 text-muted-foreground">{service.intro}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-dashed border-border p-6">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Tools & platforms:</strong> This area is
            intentionally open until Debbie confirms the software she uses.
          </p>
        </div>
      </section>
      <section className="bg-ink py-20 text-paper sm:py-28">
        <div className="page-shell">
          <p className="section-kicker text-lilac">Why Debbie</p>
          <h2 className="mt-4 font-display text-5xl sm:text-7xl">
            Creative thinking. Commercial intent.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-paper/15 md:grid-cols-2 lg:grid-cols-3">
            {why.map(([title, copy], i) => (
              <article key={title} className="bg-ink p-7">
                <span className="font-mono text-[10px] text-lilac">0{i + 1}</span>
                <h3 className="mt-10 font-display text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-paper/60">{copy}</p>
              </article>
            ))}
          </div>
          <Button asChild className="mt-10">
            <Link to="/contact">
              Discuss your project <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
