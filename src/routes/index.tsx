import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Play, RotateCcw } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/portfolio/Counter";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { WorkShowcase } from "@/components/portfolio/WorkShowcase";
import { metrics, profile, socials } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Debbie Taprandich | Social Media, Content & Beauty Virtual Assistant" },
      {
        name: "description",
        content:
          "Debbie Taprandich is a social media and content specialist, digital creator and beauty industry virtual assistant helping brands and beauty businesses grow.",
      },
      {
        property: "og:title",
        content: "Debbie Taprandich | Social Media, Content & Beauty Virtual Assistant",
      },
      {
        property: "og:description",
        content:
          "Social media strategy, standout content and beauty-industry digital support from Kenyan creator Debbie Taprandich.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayIntro = () => {
    setIsPlaying(true);
    setHasEnded(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleVideoEnded = () => {
    setHasEnded(true);
    setIsPlaying(false);
  };

  return (
    <>
      <section className="page-shell relative min-h-[92svh] overflow-hidden pb-10 pt-28 sm:pt-36">
        <div className="grid min-h-[calc(92svh-9rem)] items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal className="relative z-10">
            <div className="mb-6 flex flex-wrap gap-2">
              {profile.disciplines.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background/70 px-3 py-2 text-[10px] font-bold uppercase backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mb-4 text-[11px] font-bold uppercase text-primary">
              Kenyan digital creator & strategist
            </p>
            <h1 className="font-display text-[clamp(4.1rem,10vw,9.5rem)] leading-[.76]">
              Debbie
              <br />
              <span className="italic text-primary">Taprandich</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/work">
                  View my work <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="dark" size="lg">
                <Link to="/contact">Let’s work together</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.dispatchEvent(new Event("open-debbie-cv"))}
              >
                View my CV
              </Button>
            </div>
          </Reveal>

          {/* 16:9 Landscape Intro Video Feature with Post-Roll Half-Blur & Disciplines Reveal */}
          <Reveal delay={150} className="relative flex items-center justify-center">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-border shadow-deep bg-ink">
              {/* HTML5 Video Element pointing to public/videos */}
              <video
                ref={videoRef}
                className={`absolute inset-0 size-full object-cover transition-all duration-700 ${
                  hasEnded ? "blur-md scale-105 brightness-50" : "blur-0 scale-100"
                }`}
                onEnded={handleVideoEnded}
                playsInline
                controls={isPlaying && !hasEnded}
                src="/videos/intro.mp4"
              />

              {/* Initial Play Overlay */}
              {!isPlaying && !hasEnded && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity">
                  <button
                    onClick={handlePlayIntro}
                    className="group flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
                    aria-label="Play intro video"
                  >
                    <Play className="ml-1 size-8 fill-current" />
                  </button>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-paper">
                    Watch Intro Reel
                  </p>
                </div>
              )}

              {/* Post-Video Blur Overlay Showing Disciplines */}
              {hasEnded && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                  <span className="rounded-full bg-primary/20 border border-primary/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground mb-2 backdrop-blur">
                    Core Disciplines
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-paper mb-4">
                    What I Bring to the Table
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-md">
                    {profile.disciplines.map((discipline) => (
                      <span
                        key={discipline}
                        className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold uppercase text-paper backdrop-blur-md shadow-sm"
                      >
                        {discipline}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    onClick={handlePlayIntro}
                    className="gap-2 border-white/30 text-paper hover:bg-white/10"
                  >
                    <RotateCcw className="size-3.5" /> Replay Intro
                  </Button>
                </div>
              )}
            </div>

            <div className="absolute -bottom-6 left-0 z-20 rounded-full border border-border bg-background/90 px-4 py-3 text-xs font-bold uppercase shadow-soft backdrop-blur">
              1M+ views <span className="text-primary">↗</span>
            </div>
          </Reveal>
        </div>
        <ChevronDown className="absolute bottom-7 left-1/2 hidden size-5 -translate-x-1/2 animate-bounce text-muted-foreground lg:block" />
      </section>

      <section className="overflow-hidden border-y border-border bg-ink py-4 text-paper">
        <div className="marquee-track flex gap-12 pr-12">
          {[...socials, ...socials].map((social, i) => (
            <span
              key={`${social.name}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap text-xs font-bold uppercase"
            >
              <span className="size-1.5 rounded-full bg-lilac" />
              {social.name}{" "}
              <em className="font-normal not-italic text-paper/50">{social.handle}</em>
            </span>
          ))}
        </div>
      </section>

      <section className="page-shell py-20 sm:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <p className="section-kicker">More than a content creator</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              Beauty knowledge meets audience insight, movement, visual storytelling and digital
              strategy.
            </p>
            <Button asChild variant="outline" className="mt-7">
              <Link to="/about">
                Meet Debbie <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-4xl leading-[1.05] text-balance sm:text-6xl">
              I understand what makes people{" "}
              <span className="italic text-primary">watch, feel and respond.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-accent/50 py-20 sm:py-28">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Proof, not promises."
              copy="Strategy, content and community growth presented as the professional case studies behind the numbers."
            />
          </Reveal>
          <div className="mt-12">
            <WorkShowcase compact />
          </div>
        </div>
      </section>

      <section className="page-shell py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Content I create"
            title="Built for the scroll. Made to be remembered."
          />
        </Reveal>
        <div className="mt-10">
          <PortfolioGallery />
        </div>
      </section>

      <section className="border-y border-border bg-card py-20 sm:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="section-kicker">Social proof</p>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl">
              What people say about working with me.
            </h2>
            <div className="mt-8 rounded-2xl border border-dashed border-border p-7">
              <p className="font-display text-2xl">Verified words will live here.</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                No testimonials have been supplied yet. Client name, company, quote and approved
                photo or logo can be added here later.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-kicker">Brands & projects</p>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl">
              A wall for verified collaborations.
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Brand logo", "Project mark", "Campaign logo", "Partner name"].map((item) => (
                <div
                  key={item}
                  className="grid aspect-[2/1] place-items-center rounded-xl border border-dashed border-border text-xs font-bold uppercase text-muted-foreground"
                >
                  Add {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="page-shell">
          <Reveal>
            <p className="section-kicker text-primary-foreground/60">Results</p>
            <h2 className="mt-5 font-display text-5xl sm:text-7xl">Numbers tell the story.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-primary-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-primary p-6 sm:p-8">
                <p className="font-display text-5xl">
                  <Counter value={metric.value} display={metric.display} />
                </p>
                <p className="mt-3 text-sm font-semibold">{metric.label}</p>
                <p className="mt-1 text-xs text-primary-foreground/60">{metric.detail}</p>
              </div>
            ))}
          </div>
          <Button asChild variant="dark" className="mt-8">
            <Link to="/work">
              See the case studies <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="page-shell py-20 text-center sm:py-32">
        <Reveal>
          <p className="section-kicker">Ready when you are</p>
          <h2 className="mx-auto mt-5 max-w-5xl font-display text-5xl leading-[.95] sm:text-8xl">
            Your brand deserves content people remember.
          </h2>
          <p className="mt-7 text-muted-foreground">
            Social media. Content. Beauty. Digital support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Let’s work together</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/work">View my work</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
