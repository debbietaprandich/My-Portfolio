import { Play, X, ExternalLink, Video } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/content/portfolio";
import { MediaPlaceholder } from "./MediaPlaceholder";

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  platform: string;
  type: string;
  project: string;
  result: string;
  format: "wide" | "portrait" | "square" | string;
  image?: string;
  videoUrl?: string;
}

const categories = [
  "All",
  "Beauty",
  "Dance",
  "Lifestyle",
  "Fashion",
  "UGC",
  "Branded Content",
  "Social Media",
  "Trend Content",
];

export function PortfolioGallery() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  
  // 1. Filter items by category
  // 2. Remove the specific first "Beauty Ritual" item
  // 3. Force every item's format to 'portrait'
  const items: PortfolioItem[] = (
    category === "All"
      ? (portfolioItems as unknown as PortfolioItem[])
      : (portfolioItems as unknown as PortfolioItem[]).filter((item) => item.category === category)
  )
    .filter((item, index) => {
      // If it's a beauty item / titled Beauty Ritual, check if it's the first occurrence to remove it
      if (item.title.toLowerCase().includes("beauty ritual")) {
        // Find if this is the very first one across the full array or filtered state
        const globalIndex = portfolioItems.findIndex(p => p.id === item.id);
        // Assuming the target one to remove is index 0 or matches the specific first instance
        return globalIndex !== 0; // Adjust condition if its ID is different, e.g. item.id !== "specific-id"
      }
      return true;
    })
    .map((item) => ({
      ...item,
      format: "portrait",
    }));

  // Load TikTok script when modal opens if TikTok link is present
  useEffect(() => {
    if (!selected?.videoUrl || !selected.videoUrl.includes("tiktok")) return;
    const scriptId = "tiktok-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [selected]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  // Safe YouTube Embed URL Extractor with strict undefined guards
  const getYouTubeEmbedUrl = (url: string | undefined): string | null => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2] && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
  };

  // Safe TikTok Video ID extractor
  const getTikTokVideoId = (url: string | undefined): string => {
    if (!url) return "";
    const parts = url.split("/");
    const lastPart = parts[parts.length - 1] || "";
    return lastPart.split("?")[0] || "";
  };

  return (
    <>
      <div className="hide-scrollbar mb-8 flex gap-2 overflow-x-auto pb-2">
        {categories.map((item) => (
          <Button
            key={item}
            variant={category === item ? "primary" : "outline"}
            className="shrink-0"
            onClick={() => setCategory(item)}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="grid auto-rows-[14rem] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={item.id}
            className="gallery-item group relative overflow-hidden rounded-2xl text-left row-span-2"
            onClick={() => setSelected(item)}
            aria-label={`Open ${item.title}`}
          >
            <MediaPlaceholder
              label={item.title}
              kind={item.videoUrl ? "video" : "image"}
              src={item.image}
              index={String(index + 1).padStart(2, "0")}
              className="h-full min-h-0 rounded-2xl transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-xl bg-background/85 p-3 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-display text-lg">{item.title}</p>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground">
                    {item.category} · {item.platform}
                  </p>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  {item.videoUrl ? <Play className="size-4" /> : <Video className="size-4" />}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-ink/85 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-2xl rounded-3xl bg-background p-4 shadow-deep sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-display text-2xl">{selected.title}</h3>
                <p className="text-xs uppercase font-bold text-muted-foreground">{selected.category} / {selected.project}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelected(null)}
                aria-label="Close media"
              >
                <X className="size-5" />
              </Button>
            </div>

            {/* Platform-Specific Embed or Image Rendering with strict null checking */}
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-media flex justify-center">
              {selected.videoUrl ? (
                getYouTubeEmbedUrl(selected.videoUrl) ? (
                  <div className="aspect-video w-full">
                    <iframe
                      src={getYouTubeEmbedUrl(selected.videoUrl)!}
                      title={selected.title}
                      className="size-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : selected.videoUrl.includes("tiktok.com") ? (
                  <div className="w-full flex justify-center py-4 overflow-x-auto max-h-[500px]">
                    <blockquote 
                      className="tiktok-embed" 
                      cite={selected.videoUrl} 
                      data-video-id={getTikTokVideoId(selected.videoUrl)} 
                      style={{ maxWidth: "605px", minWidth: "325px" }}
                    >
                      <section>
                        <a target="_blank" href={selected.videoUrl}>View on TikTok</a>
                      </section>
                    </blockquote>
                  </div>
                ) : (
                  <div className="aspect-video w-full flex flex-col items-center justify-center p-6 text-center bg-zinc-950/80 relative">
                    <div 
                      className="absolute inset-0 opacity-40 bg-cover bg-center" 
                      style={{ backgroundImage: selected.image ? `url(${selected.image})` : undefined }} 
                    />
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
                    
                    <div className="relative z-15 max-w-md grid place-items-center gap-4">
                      <span className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl">
                        <Play className="size-8 ml-1" />
                      </span>
                      <div>
                        <p className="font-display text-xl text-foreground">View on {selected.platform}</p>
                        <p className="text-xs text-muted-foreground mt-1">Click below to open the official post or video.</p>
                      </div>
                      <a 
                        href={selected.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-2"
                      >
                        <Button variant="primary" className="gap-2 shadow-lg">
                          <span>Open {selected.platform} Link</span>
                          <ExternalLink className="size-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                )
              ) : selected.image ? (
                <div className="aspect-video w-full overflow-hidden">
                  <img src={selected.image} alt={selected.title} className="size-full object-cover" />
                </div>
              ) : (
                <MediaPlaceholder label={`Add ${selected.title} media`} kind="image" className="aspect-video min-h-0 rounded-2xl border-0" />
              )}
            </div>

            <div className="grid gap-4 p-3 pt-6 sm:grid-cols-4">
              <div>
                <p className="metric-label">Platform</p>
                <p className="mt-2">{selected.platform}</p>
              </div>
              <div>
                <p className="metric-label">Type</p>
                <p className="mt-2">{selected.type}</p>
              </div>
              <div>
                <p className="metric-label">Project</p>
                <p className="mt-2">{selected.project}</p>
              </div>
              <div>
                <p className="metric-label">Result</p>
                <p className="mt-2">{selected.result}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}