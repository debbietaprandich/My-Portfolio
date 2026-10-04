import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Heart, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/portfolio/Counter";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { metrics, profile } from "@/content/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Debbie Taprandich | Creator, Strategist & Beauty Professional" },
      {
        name: "description",
        content:
          "Meet Debbie Taprandich, a Kenyan content creator combining social strategy, beauty expertise, dance, fitness and visual storytelling.",
      },
      { property: "og:title", content: "About Debbie Taprandich" },
      {
        property: "og:description",
        content:
          "Content, community, beauty and creative strategy in one multidisciplinary professional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Debbie"
        title="More than a content creator."
        copy="I bring together content creation, social media management, community growth, beauty knowledge, trend awareness and performance."
      />
      <section className="page-shell py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            {/* Professional Portrait Image from public/images */}
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-deep aspect-[4/5] min-h-0 lg:sticky lg:top-28 bg-ink">
              <img
                src="/images/debbie(6).jpeg"
                alt="Debbie Taprandich professional portrait"
                className="size-full object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-full border border-border bg-background/90 px-4 py-2 text-xs font-bold uppercase shadow-soft backdrop-blur">
                Debbie Taprandich <span className="text-primary">✦</span>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-display text-4xl leading-tight sm:text-6xl">
                Creative instinct,{" "}
                <span className="italic text-primary">grounded in real-world skill.</span>
              </p>
              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                My work sits at the intersection of digital strategy and human connection. I
                understand trends, but I also understand why people respond to them—and how to turn
                that attention into a genuine community.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[...profile.roles, "Kids Dance Coach", "Visual Storyteller"].map((role, i) => (
                <Reveal key={role} delay={i * 50}>
                  <div className="flex items-center gap-3 border-b border-border py-4">
                    <span className="font-mono text-[10px] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-semibold">{role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mt-10 rounded-3xl bg-primary p-7 text-primary-foreground sm:p-9">
                <Award className="size-7" />
                <p className="mt-6 text-xs font-bold uppercase text-primary-foreground/60">
                  Professional qualification
                </p>
                <h2 className="mt-2 font-display text-4xl">Diploma in Beauty Therapy</h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-primary-foreground/75">
                  A professional foundation that gives beauty content and client communication
                  genuine category understanding.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-ink py-20 text-paper sm:py-28">
        <div className="page-shell">
          <p className="section-kicker text-lilac">At a glance</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-ink p-7">
                <p className="font-display text-5xl text-lilac">
                  <Counter value={metric.value} display={metric.display} />
                </p>
                <p className="mt-3 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="page-shell py-20 sm:py-28">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Heart,
              title: "People first",
              copy: "Relatable content begins with understanding an audience.",
            },
            {
              icon: Zap,
              title: "Trend aware",
              copy: "I turn timely ideas into content that still feels true to the brand.",
            },
            {
              icon: Sparkles,
              title: "Beauty fluent",
              copy: "Industry knowledge helps me communicate with confidence and care.",
            },
          ].map(({ icon: Icon, title, copy }) => (
            <article key={title} className="rounded-2xl border border-border p-7">
              <Icon className="size-6 text-primary" />
              <h3 className="mt-10 font-display text-3xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
        <Button asChild className="mt-10">
          <Link to="/contact">
            Start a conversation <ArrowRight className="size-4" />
          </Link>
        </Button>
      </section>
    </>
  );
}