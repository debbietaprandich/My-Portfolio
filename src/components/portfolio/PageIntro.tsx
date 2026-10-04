import { Reveal } from "./Reveal";

export function PageIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="page-shell overflow-hidden border-b border-border pb-16 pt-36 sm:pb-24 sm:pt-44">
      <Reveal>
        <p className="mb-5 text-[11px] font-bold uppercase text-primary">{eyebrow}</p>
        <h1 className="max-w-5xl font-display text-5xl leading-[0.9] text-balance sm:text-7xl lg:text-[6.75rem]">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{copy}</p>
      </Reveal>
    </section>
  );
}
