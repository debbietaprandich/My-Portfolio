# Debbie Taprandich Portfolio — Build Plan

## Goal
Build a premium, mobile-first portfolio that positions Debbie as a proven social media and content specialist with beauty-industry expertise. The first screen will establish her identity, services, and results immediately, while deeper sections provide case-study evidence and clear ways to enquire.

## Experience and visual direction
- Use a polished editorial composition with deep purple, soft lavender, white, and charcoal themes, plus a working light/dark toggle.
- Create a dramatic opening with oversized typography and a reel-style media collage. Because no personal media was supplied, use clearly labeled, attractive media placeholders rather than invented photos or copied social content.
- Vary the section compositions: editorial introduction, horizontal social strip, large case-study panels, masonry content gallery, beauty-focused statement band, service columns, proof grid, and high-impact closing call to action.
- Add restrained premium motion: entrance reveals, count-up statistics, subtle parallax, animated media frames, project hover states, smooth scrolling, and polished overlays. Respect reduced-motion preferences.
- Prioritize phone layouts while ensuring tablet and desktop compositions remain intentional and readable.

## Site structure
Build a focused multi-page portfolio with shared sticky navigation:
- **Home** — opening experience, social links placeholder strip, concise introduction, featured results, selected case studies, “Numbers tell the story,” and final call to action.
- **About** — Debbie’s multidisciplinary profile, Beauty Therapy diploma, experience areas, portrait placeholder, and animated achievements.
- **Work** — three substantial interactive case studies: Personal Brand, Tizika T, and Tizika U. Each includes role, starting point, strategy, results, timeline, evidence placeholders, and a full-screen detail view.
- **Services** — Social Media Management, Content Support, Beauty Business Support, and Creator Support, without claiming unprovided tools.
- **Beauty** — beauty-industry positioning, qualifications, relevant audiences, and the four-part “why hire me” value statement.
- **Contact** — complete inquiry form and clearly marked placeholders for email/social links.

CV access will remain a global modal opened from navigation and calls to action, with an editable-looking premium resume layout, contact action, and a disabled/placeholder download state until a real CV file is supplied.

## Interactive content
- Filterable masonry-style “Content I Create” gallery using labeled media placeholders across Beauty, Dance, Lifestyle, Fashion, UGC, Branded Content, Social Media, and Trend Content.
- Clickable portfolio items opening an accessible lightbox with platform, content type, project, and result fields.
- Full-screen case-study overlays for all three projects.
- Accessible mobile navigation, theme switch, focus handling, Escape-to-close behavior, and keyboard-friendly controls.
- Floating contact/social menu showing only non-clickable “link coming soon” states where URLs are missing, so no URLs are invented.
- Testimonial and brand/project areas will be honest empty states designed for later verified content, not fabricated endorsements or logos.
- Inquiry submission will validate locally and provide a clear ready-to-connect state; it will not claim to send messages until an email destination or form service is provided.

## Editable content system
- Centralize all names, copy, statistics, case studies, services, social profiles, portfolio entries, testimonials, contact details, and asset references in one clearly documented content file.
- Create reusable media placeholder components that state exactly what Debbie should add: portrait, reel/video, platform screenshot, analytics evidence, logo, or CV file.
- Keep each metric tied to the supplied brief and avoid creating new claims.

## Technical details
- Use TanStack Start routes and shared site chrome, with route-specific metadata for search and social sharing.
- Use semantic Tailwind design tokens in the global theme and persist theme preference in the browser after hydration.
- Use CSS and browser observers for performance-conscious animation; no autoplaying heavy embeds or unauthorized downloaded media.
- Use responsive image/media containers, lazy loading, accessible dialogs, clear labels, and reduced-motion fallbacks.
- Use the supplied SEO title, description, and Kenya/Nairobi-related terms naturally in page copy and metadata.
- Keep all current factual figures exactly as provided: 28K+ TikTok, 18K+ Instagram, 1M+ views, Tizika T 2K to 400K+, and Tizika U 8.2K+ from April to August.

## Validation
- Verify all pages, navigation, theme switching, mobile menu, content filters, lightbox, case-study views, CV modal, and inquiry validation in the live preview.
- Check desktop and mobile viewport screenshots for clipping, overlap, visual hierarchy, and readable text.
- Confirm the latest build is clean and every content route has unique metadata.
