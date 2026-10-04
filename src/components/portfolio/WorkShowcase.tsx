import { ArrowRight, BarChart3, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/content/portfolio";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { Reveal } from "./Reveal";

type Study = (typeof caseStudies)[number];

export function WorkShowcase({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState<Study | null>(null);
  
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const studies = compact ? caseStudies.slice(0, 3) : caseStudies;

  return (
    <>
      <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-3">
        {studies.map((study, index) => (
          <Reveal key={study.id} delay={index * 90} className="h-full">
            <article
              className={`case-card case-${study.accent} flex h-full min-h-[31rem] flex-col bg-card p-6 sm:p-8`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  CASE / {study.index}
                </span>
                <BarChart3 className="size-5 text-primary" />
              </div>
              <div className="my-auto py-12">
                <p className="mb-4 text-xs font-bold uppercase text-primary">{study.subtitle}</p>
                <h3 className="font-display text-4xl leading-[.95] sm:text-5xl">{study.title}</h3>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">{study.summary}</p>
              </div>
              <div className="border-t border-border pt-5">
                <p className="font-display text-2xl text-primary">{study.result}</p>
                <Button variant="ghost" className="mt-4 px-0" onClick={() => setSelected(study)}>
                  View case study <ArrowRight className="size-4" />
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-background"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} case study`}
        >
          <div className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
            <div className="page-shell flex h-20 items-center justify-between">
              <span className="font-mono text-xs">CASE / {selected.index}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelected(null)}
                aria-label="Close case study"
              >
                <X className="size-5" />
              </Button>
            </div>
          </div>
          
          <div className="page-shell py-12 sm:py-20">
            <p className="text-xs font-bold uppercase text-primary">{selected.subtitle}</p>
            <h2 className="mt-4 max-w-5xl font-display text-5xl leading-[.9] sm:text-7xl lg:text-8xl">
              {selected.title}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              {selected.summary}
            </p>
            
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              <div className="bg-card p-6">
                <p className="metric-label">My role</p>
                <p className="mt-3 font-display text-2xl">{selected.role}</p>
              </div>
              <div className="bg-card p-6">
                <p className="metric-label">Starting point</p>
                <p className="mt-3 font-display text-2xl">{selected.startingPoint}</p>
              </div>
              <div className="bg-primary p-6 text-primary-foreground">
                <p className="metric-label text-primary-foreground/60">Result</p>
                <p className="mt-3 font-display text-3xl">{selected.result}</p>
              </div>
            </div>

            {selected.id === "tizika-t" && (
              <div className="my-16 rounded-3xl bg-ink p-7 text-paper sm:p-12">
                <p className="text-xs font-bold uppercase text-lilac">Audience growth</p>
                <div className="mt-7 flex items-center gap-4">
                  <span className="font-display text-5xl sm:text-8xl">2K</span>
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-paper/15">
                    <div className="growth-line h-full bg-lilac" />
                  </div>
                  <span className="font-display text-5xl text-lilac sm:text-8xl">400K+</span>
                </div>
                <div className="mt-7 grid grid-cols-5 gap-1 text-center text-[9px] font-bold uppercase text-paper/50">
                  <span>Start</span>
                  <span>Strategy</span>
                  <span>Content</span>
                  <span>Growth</span>
                  <span>Results</span>
                </div>
              </div>
            )}

            <div className="mt-14 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="section-kicker">The approach</p>
                <div className="mt-5 grid gap-3">
                  {selected.approach.map((item, i) => (
                    <div key={item} className="flex items-center gap-3 border-b border-border pb-3">
                      <span className="font-mono text-[10px] text-primary">0{i + 1}</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="section-kicker mt-10">Key achievements</p>
                <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                  {selected.achievements.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </div>

              {/* Proof grid where each item autosizes based on its actual media content */}
              <div className="grid gap-4 sm:grid-cols-2">
                {selected.proof.map((proofItem, i) => {
                  const mediaSrc = "image" in proofItem ? proofItem.image : "videoUrl" in proofItem ? proofItem.videoUrl : "";
                  const isVideo = "videoUrl" in proofItem || (typeof mediaSrc === "string" && (mediaSrc.includes("tiktok") || mediaSrc.includes("instagram")));

                  return (
                    <MediaPlaceholder
                      key={proofItem.label}
                      label={proofItem.label}
                      src={mediaSrc}
                      kind={isVideo ? "video" : "image"}
                      index={String(i + 1).padStart(2, "0")}
                      className="h-auto w-full"
                    />
                  );
                })}
              </div>
            </div>

            <div className="mt-16 rounded-3xl border border-dashed border-primary/40 bg-accent/40 p-8 text-center">
              <p className="font-display text-3xl">Evidence belongs here.</p>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                Add verified screenshots, analytics and approved post links to turn these
                placeholders into a complete proof library.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}