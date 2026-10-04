import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="mb-4 text-[11px] font-bold uppercase text-primary">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-[0.95] text-balance text-foreground sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {copy}
        </p>
      )}
    </div>
  );
}
