import React, { useState } from "react";

interface MediaPlaceholderProps {
  label: string;
  src?: string | undefined;
  kind?: "image" | "video" | "portrait" | "analytics";
  className?: string;
  index?: string;
}

export function MediaPlaceholder({
  label,
  src = "",
  kind = "image",
  className = "",
  index,
}: MediaPlaceholderProps) {
  // Helper to transform standard TikTok/Instagram links into live embed-safe URLs
  const getEmbedUrl = (url: string | undefined) => {
    if (!url) return "";
    
    if (url.includes("tiktok.com")) {
      const match = url.match(/\/video\/(\d+)/);
      if (match && match[1]) {
        return `https://www.tiktok.com/embed/v2/${match[1]}`;
      }
    }
    
    if (url.includes("instagram.com") && !url.endsWith("/embed")) {
      const cleanUrl = url.split("?")[0]?.replace(/\/$/, "") ?? "";
      return `${cleanUrl}/embed`;
    }

    return url;
  };

  const isVideoContent =
    kind === "video" ||
    (typeof src === "string" && (src.includes("tiktok.com") && src.includes("/video/"))) ||
    (typeof src === "string" && src.includes("instagram.com"));

  const embedSrc = isVideoContent ? getEmbedUrl(src) : src;

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-muted/30 transition-all duration-300 ${className}`}
    >
      {/* Index and label overlay */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between bg-gradient-to-b from-background/90 via-background/50 to-transparent p-3 text-xs font-mono text-muted-foreground backdrop-blur-xs">
        {index && (
          <span className="rounded bg-background/90 px-2 py-0.5 font-bold text-primary shadow-xs">
            {index}
          </span>
        )}
        <span className="truncate pl-2 text-right font-sans font-medium text-foreground/90">
          {label}
        </span>
      </div>

      {/* Container that spans the full height and width to take up the whole card */}
      <div className="flex flex-1 w-full items-center justify-center overflow-hidden">
        {src ? (
          isVideoContent ? (
            <div className="relative w-full h-full overflow-hidden shadow-md">
              <iframe
                src={embedSrc}
                title={label}
                className="absolute inset-0 h-full w-full border-0 bg-background object-cover"
                allow="encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={src}
                alt={label}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )
        ) : (
          <div className="flex min-h-[160px] w-full flex-col items-center justify-center p-6 text-center text-muted-foreground">
            <p className="text-xs font-mono uppercase tracking-wider text-primary">Pending Media</p>
            <p className="mt-2 text-sm font-medium">{label}</p>
          </div>
        )}
      </div>
    </div>
  );
}