/**
 * DEBBIE'S EDITABLE CONTENT
 * Replace placeholder links and media here when verified assets are ready.
 * Keep unverified links as empty strings so the site never sends visitors to an invented URL.
 */
export const profile = {
  name: "Debbie Taprandich",
  shortName: "DT",
  location: "Kenya",
  email: "debbietaprandich@gmail.com",
  cvUrl: "",
  tagline: "I turn ideas, personalities and brands into content people stop scrolling for.",
  positioning: "I create, manage and grow digital brands that people actually want to engage with.",
  disciplines: ["Social Media", "Content", "Beauty", "Digital Growth"],
  roles: [
    "Social Media & Content Specialist",
    "Digital Creator",
    "Beauty Industry Virtual Assistant",
    "Beauty Therapist",
    "Makeup Artist",
    "Dance & Fitness Coach",
  ],
};

export const socials = [
  { name: "TikTok", handle: "28K+ community", url: "https://www.tiktok.com/@debbie_taprandich?_r=1&_t=ZS-9AHP4Lp8R3G" },
  { name: "Instagram", handle: "18K+ community", url: "https://www.instagram.com/@debbietaprandich" },
  { name: "YouTube", handle: "2k+ subscribers", url: "https://www.youtube.com/@Debbie_Taprandich254" },
  { name: "Facebook", handle: "2k+ followers", url: "https://www.facebook.com/share/18YsmQuGWg/?mibextid=wwXIfr" },
] as const;

export const metrics = [
  { value: 400000, display: "400K+", label: "Followers grown", detail: "Tizika T" },
  { value: 1000000, display: "1M+", label: "Views", detail: "Content reach" },
  { value: 8200, display: "8.2K+", label: "Community grown", detail: "Tizika U" },
  { value: 28000, display: "28K+", label: "Personal TikTok audience", detail: "Creator platform" },
] as const;

export const caseStudies = [
  {
    id: "personal-brand",
    index: "01",
    title: "Building My Own Personal Brand",
    subtitle: "From creator to digital brand.",
    summary: "Creating and managing beauty, dance, lifestyle and trend-led content across my own social platforms.",
    result: "28K+ TikTok · 18K+ Instagram",
    accent: "lavender",
    role: "Creator, strategist and community manager",
    startingPoint: "An evolving creator presence built around personality, performance and beauty.",
    approach: ["Trend-led concepts", "Short-form storytelling", "Beauty and dance content", "Audience-aware publishing"],
    achievements: ["28K+ TikTok followers", "18K+ Instagram followers", "1M+ monthly views", "Strong beauty and dance content"],
    proof: [
      { label: "TikTok profile screenshot", image: "/images/proof/personal-tiktok.jpeg" },
      { label: "Instagram profile screenshot", image: "/images/proof/personal-ig.jpeg" },
      { label: "Viral video", image: "/images/proof/personal-viral.jpeg" },
      { label: "Content analytics", image: "/images/proof/personal-analytics.jpeg" },
    ],
    image: "/images/debbie(1).jpeg",
    videoUrl: "https://vt.tiktok.com/ZSb9F3QQr/",
  },
  {
    id: "tizika-t",
    index: "02",
    title: "Tizika T — Social Media Growth",
    subtitle: "One year. A community transformed.",
    summary: "I ran Tizika T’s social media for one year, shaping content, identifying trends and building an active audience.",
    result: "2K → 400K+ · 1M+ views",
    accent: "violet",
    role: "Social media management and creative direction",
    startingPoint: "2,000 followers",
    approach: ["Strategy", "Content creation", "Trend identification", "Posting and engagement", "Video selection"],
    achievements: ["Growth from 2K to 400K+", "1M+ views", "Sustained community growth", "High-performing social content"],
    proof: [
      
      { label: "After profile screenshot", image: "/images/proof/tizika-t-after.jpeg" },
      { label: "Growth analytics", image: "/images/proof/tizika-t-analytics.jpeg" },
      { label: "Viral post", videoUrl: "https://www.tiktok.com/@tizika_t/video/7527367048880459014?_r=1&_t=ZS-9AHEwgI2a5U"},
      // { label: "Before profile screenshot", image: "/images/proof/tizika-t-before.jpeg" },
    ],
  },
  {
    id: "tizika-u",
    index: "03",
    title: "Tizika U — Building a Growing Digital Community",
    subtitle: "April to August. Momentum built with intention.",
    summary: "Content planning, publishing, audience engagement and trend adaptation created a growing digital community.",
    result: "8.2K+ followers",
    accent: "coral",
    role: "Social media management and community building",
    startingPoint: "Growth period began in April",
    approach: ["Content planning", "Publishing", "Audience engagement", "Trend adaptation", "Creative direction"],
    achievements: ["8.2K+ followers by August", "Consistent publishing", "Growing digital community", "Responsive creative direction"],
    proof: [
      { label: "April profile screenshot", image: "/images/proof/tizika-u-april.jpeg" },
      { label: "August profile screenshot", image: "/images/proof/tizika-u-august.jpeg" },
      { label: "Audience analytics", image: "/images/proof/tizika-u-analytics.jpeg" },
      { label: "High-performing post", videoUrl: "https://www.tiktok.com/@tizika_u/video/7634628373611875605?_r=1&_t=ZS-9AHFMzZemC9" },
    ]
    
  },
] as const;

export const services = [
  { number: "01", title: "Social Media Management", intro: "A thoughtful, consistent online presence.", items: ["Content scheduling", "Posting and captions", "Hashtag and trend research", "Community management", "Engagement", "Content calendars"] },
  { number: "02", title: "Content Support", intro: "Ideas and assets built for short-form attention.", items: ["Reels and TikTok concepts", "Content planning", "Basic video editing", "Content repurposing", "UGC coordination", "Short-form video ideas"] },
  { number: "03", title: "Beauty Business Support", intro: "Digital support informed by real beauty training.", items: ["Client communication", "Appointment coordination", "Social media support", "Beauty content planning", "Online presence management", "Basic admin support"] },
  { number: "04", title: "Creator Support", intro: "Keep campaigns, content and opportunities moving.", items: ["Brand outreach assistance", "Campaign organization", "Content calendars", "Deliverable tracking", "Research", "Digital organization"] },
] as const;

export const portfolioItems = [
  { 
    id: "beauty-ritual", 
    category: "Beauty", 
    title: "Beauty ritual", 
    platform: "Reels / TikTok", 
    type: "Short-form video", 
    project: "Personal brand", 
    result: "Add verified performance", 
    format: "portrait",
    image: "/images/debbie(4).jpeg",
    videoUrl: "https://vt.tiktok.com/ZSb9UXt2f/"
  },
  { 
    id: "dance-cut", 
    category: "Dance", 
    title: "Movement in frame", 
    platform: "TikTok", 
    type: "Performance video", 
    project: "Personal brand", 
    result: "Add verified performance", 
    format: "square",
    image: "/images/debbie(3).jpeg",
    videoUrl: "https://www.tiktok.com/@debbie_taprandich/video/7617921371741555989"
  },
  { 
    id: "trend-story", 
    category: "Trend Content", 
    title: "Trend, made personal", 
    platform: "TikTok / Reels", 
    type: "Trend-led video", 
    project: "Personal brand", 
    result: "Add verified performance", 
    format: "wide",
    image: "/images/debbie(2).jpeg",
    videoUrl: "https://www.instagram.com/@debbietaprandich"
  },
  { 
    id: "social-system", 
    category: "Social Media", 
    title: "A social growth system", 
    platform: "Multi-platform", 
    type: "Strategy and publishing", 
    project: "Tizika T", 
    result: "2K → 400K+", 
    format: "wide",
    image: "/images/debbie(3).jpeg",
    videoUrl: ""
  },
  { 
    id: "ugc-concept", 
    category: "UGC", 
    title: "Product story concept", 
    platform: "Reels", 
    type: "UGC concept", 
    project: "Portfolio", 
    result: "Add verified performance", 
    format: "portrait",
    image: "/images/debbie(1).jpeg",
    videoUrl: ""
  },
  { 
    id: "lifestyle-edit", 
    category: "Lifestyle", 
    title: "Everyday, elevated", 
    platform: "Instagram", 
    type: "Lifestyle content", 
    project: "Personal brand", 
    result: "Add verified performance", 
    format: "square",
    image: "/images/debbie(5).jpeg",
    videoUrl: "https://www.instagram.com/@debbietaprandich"
  },
  { 
    id: "fashion-motion", 
    category: "Fashion", 
    title: "Style in motion", 
    platform: "Reels", 
    type: "Fashion video", 
    project: "Personal brand", 
    result: "Add verified performance", 
    format: "portrait",
    image: "/images/debbie(2).jpeg",
    videoUrl: ""
  },
  { 
    id: "brand-frame", 
    category: "Branded Content", 
    title: "Built for the brand world", 
    platform: "Multi-platform", 
    type: "Campaign concept", 
    project: "Portfolio", 
    result: "Add verified performance", 
    format: "wide",
    image: "/images/debbie(3).jpeg",
    videoUrl: ""
  },
] as const;

export const testimonials: { quote: string; name: string; company: string }[] = [];
export const brands: { name: string; logo: string }[] = [];

export const cv = {
  profile: "Kenyan social media and content specialist, digital creator and beauty-industry virtual assistant combining audience insight, visual storytelling and professional beauty knowledge.",
  experience: [
    ["Personal Brand", "Content creation, social strategy and community management"],
    ["Tizika T", "Social media management; audience growth from 2K to 400K+"],
    ["Tizika U", "Social media management; community growth to 8.2K+ from April to August"],
    ["Beauty & Performance", "Beauty therapy, makeup, dance, fitness and kids dance coaching"],
  ],
  education: "Diploma in Beauty Therapy",
  skills: ["Social Media Management", "Content Creation", "Short-form Video", "Community Management", "Content Strategy", "Trend Research", "Basic Video Editing", "Beauty Content", "Makeup", "Client Communication", "Digital Marketing", "Creative Direction", "UGC"],
};