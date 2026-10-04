import { createFileRoute } from "@tanstack/react-router";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { WorkShowcase } from "@/components/portfolio/WorkShowcase";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Social Media Case Studies | Debbie Taprandich" },
      {
        name: "description",
        content:
          "Explore Debbie Taprandich’s social media growth case studies, creator portfolio and evidence-ready content work.",
      },
      { property: "og:title", content: "Social Media Case Studies | Debbie Taprandich" },
      {
        property: "og:description",
        content: "From 2K to 400K+, plus creator and community growth work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});
function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Selected work"
        title="The work behind the numbers."
        copy="Not just a gallery—three social media stories with context, strategy, contribution and room for verified evidence."
      />
      <section className="page-shell py-16 sm:py-24">
        <WorkShowcase />
      </section>
      <section className="bg-accent/50 py-20 sm:py-28">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Content portfolio"
              title="Content I create."
              copy="Filter by discipline, then open any frame to see its platform, purpose, project and available result."
            />
          </Reveal>
          <div className="mt-10">
            <PortfolioGallery />
          </div>
        </div>
      </section>
      <section className="page-shell py-20 sm:py-28">
        <Reveal>
          <div className="rounded-3xl border border-dashed border-primary/50 p-8 text-center sm:p-14">
            <p className="section-kicker">Evidence library</p>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl">Ready for the real receipts.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
              Verified analytics screenshots, platform captures and approved video links can be
              added to each case study without redesigning this portfolio.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
