export type HeroLayout =
  | "posterRight"
  | "posterLeft"
  | "fullBleed"
  | "banner"
  | "minimal"
  | "splitCard";

export type GameTile = "square" | "tall" | "icon" | "wide";

export type SectionKey =
  | "stats"
  | "games"
  | "features"
  | "download"
  | "guide"
  | "earning"
  | "faq";

export type VariantConfig = {
  id: number;
  name: string;
  note: string;
  theme: {
    bg: string;
    bgAlt: string;
    surface: string;
    border: string;
    text: string;
    muted: string;
    accent: string;
    accentText: string;
    ctaFrom: string;
    ctaTo: string;
    ctaText: string;
    headerBg: string;
    footerBg: string;
  };
  font: "display" | "sans" | "serif";
  hero: HeroLayout;
  heroImage: string;
  gameTile: GameTile;
  showStats: boolean;
  ctaLabel: string;
  radius: string;
  eyebrow: string;
  legalBadge: string;
  sections: SectionKey[];
};

export const VARIANTS: VariantConfig[] = [
  {
    id: 1,
    name: "Classic Gold",
    note: "Cream + ruby, gold CTA, poster right (pehla favourite)",
    theme: {
      bg: "#FAF5EC",
      bgAlt: "#F3E8D5",
      surface: "#FFFFFF",
      border: "#E6D7BD",
      text: "#180B08",
      muted: "#6B5B4E",
      accent: "#A9121F",
      accentText: "#FFFFFF",
      ctaFrom: "#FFEDB2",
      ctaTo: "#E6A83B",
      ctaText: "#2B1608",
      headerBg: "rgba(20,8,6,0.95)",
      footerBg: "#100605",
    },
    font: "display",
    hero: "posterRight",
    heroImage: "./images/hero-queen.jpg",
    gameTile: "square",
    showStats: true,
    ctaLabel: "DOWNLOAD 3PATTI HOT",
    radius: "14px",
    eyebrow: "3Patti Hot · 2026 Edition",
    legalBadge: "18+",
    sections: ["stats", "games", "features", "download", "guide", "earning", "faq"],
  },
  {
    id: 2,
    name: "Dark Casino",
    note: "Near-black + gold, full-bleed hero, premium night look",
    theme: {
      bg: "#0B0705",
      bgAlt: "#150C08",
      surface: "rgba(255,255,255,0.045)",
      border: "rgba(243,196,94,0.20)",
      text: "#FBF7F0",
      muted: "#A8A29E",
      accent: "#F3C45E",
      accentText: "#1A0F07",
      ctaFrom: "#FFE9AE",
      ctaTo: "#D99A31",
      ctaText: "#2B1608",
      headerBg: "rgba(11,7,5,0.94)",
      footerBg: "#070403",
    },
    font: "display",
    hero: "fullBleed",
    heroImage: "./images/hero-table.jpg",
    gameTile: "square",
    showStats: false,
    ctaLabel: "DOWNLOAD APK",
    radius: "16px",
    eyebrow: "3Patti Hot · Play Big",
    legalBadge: "18+ WHERE LEGAL",
    sections: ["games", "download", "guide", "earning", "faq"],
  },
  {
    id: 3,
    name: "Emerald Felt",
    note: "Green felt table + gold, poster left, tall game cards",
    theme: {
      bg: "#06251B",
      bgAlt: "#0A3327",
      surface: "rgba(255,255,255,0.055)",
      border: "rgba(232,196,113,0.22)",
      text: "#F5EFE0",
      muted: "#A7C4B4",
      accent: "#E8C471",
      accentText: "#06251B",
      ctaFrom: "#FFE9AE",
      ctaTo: "#C99433",
      ctaText: "#2B1608",
      headerBg: "rgba(6,37,27,0.95)",
      footerBg: "#031812",
    },
    font: "display",
    hero: "posterLeft",
    heroImage: "./images/hero-table.jpg",
    gameTile: "tall",
    showStats: true,
    ctaLabel: "DOWNLOAD 3PATTI HOT",
    radius: "12px",
    eyebrow: "3Patti Hot · Card & Casino",
    legalBadge: "18+",
    sections: ["stats", "games", "download", "guide", "earning", "faq"],
  },
  {
    id: 4,
    name: "Neon Arcade",
    note: "Purple + cyan glow, gaming vibe, icon tiles",
    theme: {
      bg: "#120A2E",
      bgAlt: "#1B0F3F",
      surface: "rgba(255,255,255,0.06)",
      border: "rgba(167,139,250,0.28)",
      text: "#F5F3FF",
      muted: "#B9AEE0",
      accent: "#22D3EE",
      accentText: "#0B0618",
      ctaFrom: "#7C3AED",
      ctaTo: "#22D3EE",
      ctaText: "#FFFFFF",
      headerBg: "rgba(18,10,46,0.95)",
      footerBg: "#0C0620",
    },
    font: "display",
    hero: "splitCard",
    heroImage: "./images/hero-queen.jpg",
    gameTile: "icon",
    showStats: false,
    ctaLabel: "DOWNLOAD 3PATTI HOT",
    radius: "18px",
    eyebrow: "3Patti Hot · Season 2026",
    legalBadge: "18+",
    sections: ["games", "features", "download", "guide", "earning", "faq"],
  },
  {
    id: 5,
    name: "Light Premium",
    note: "Ivory editorial, serif headlines, dark CTA, wide tiles",
    theme: {
      bg: "#FBF9F4",
      bgAlt: "#F1EBDF",
      surface: "#FFFFFF",
      border: "#E4DCCB",
      text: "#1C1917",
      muted: "#6E6459",
      accent: "#8A6A2F",
      accentText: "#FFFFFF",
      ctaFrom: "#1C1917",
      ctaTo: "#403A31",
      ctaText: "#F5EFE0",
      headerBg: "rgba(251,249,244,0.96)",
      footerBg: "#1C1917",
    },
    font: "serif",
    hero: "banner",
    heroImage: "./images/hero-table.jpg",
    gameTile: "wide",
    showStats: true,
    ctaLabel: "DOWNLOAD 3PATTI HOT",
    radius: "6px",
    eyebrow: "3Patti Hot · Complete Guide",
    legalBadge: "18+",
    sections: ["stats", "games", "features", "download", "guide", "earning", "faq"],
  },
  {
    id: 6,
    name: "Royal Ruby",
    note: "Deep red gradient + gold, poster right, soft cards",
    theme: {
      bg: "#3B0710",
      bgAlt: "#4E0B17",
      surface: "rgba(255,255,255,0.07)",
      border: "rgba(255,217,138,0.24)",
      text: "#FFF7ED",
      muted: "#E8B9A8",
      accent: "#FFD98A",
      accentText: "#3B0710",
      ctaFrom: "#FFE9AE",
      ctaTo: "#C99433",
      ctaText: "#2B1608",
      headerBg: "rgba(59,7,16,0.95)",
      footerBg: "#25040A",
    },
    font: "display",
    hero: "posterRight",
    heroImage: "./images/hero-queen.jpg",
    gameTile: "square",
    showStats: true,
    ctaLabel: "DOWNLOAD 3PATTI HOT",
    radius: "20px",
    eyebrow: "3Patti Hot · 2026",
    legalBadge: "18+",
    sections: ["stats", "games", "download", "guide", "earning", "faq"],
  },
  {
    id: 7,
    name: "App Store",
    note: "Clean listing style: icon, rating, CTA (Play Store jaisa)",
    theme: {
      bg: "#F8FAFC",
      bgAlt: "#EEF2F7",
      surface: "#FFFFFF",
      border: "#DFE5EE",
      text: "#0F172A",
      muted: "#64748B",
      accent: "#1D4ED8",
      accentText: "#FFFFFF",
      ctaFrom: "#2563EB",
      ctaTo: "#1D4ED8",
      ctaText: "#FFFFFF",
      headerBg: "rgba(248,250,252,0.96)",
      footerBg: "#0F172A",
    },
    font: "sans",
    hero: "minimal",
    heroImage: "./images/hero-table.jpg",
    gameTile: "square",
    showStats: false,
    ctaLabel: "INSTALL 3PATTI HOT",
    radius: "14px",
    eyebrow: "3Patti Hot · Android",
    legalBadge: "18+",
    sections: ["games", "features", "download", "guide", "earning", "faq"],
  },
  {
    id: 8,
    name: "Sunset Amber",
    note: "Warm orange gradient, poster left, tall tiles",
    theme: {
      bg: "#FFF7ED",
      bgAlt: "#FFEDD5",
      surface: "#FFFFFF",
      border: "#FED7AA",
      text: "#431407",
      muted: "#8A5A3B",
      accent: "#C2410C",
      accentText: "#FFFFFF",
      ctaFrom: "#F97316",
      ctaTo: "#C2410C",
      ctaText: "#FFFFFF",
      headerBg: "rgba(255,247,237,0.96)",
      footerBg: "#431407",
    },
    font: "display",
    hero: "posterLeft",
    heroImage: "./images/hero-table.jpg",
    gameTile: "tall",
    showStats: true,
    ctaLabel: "DOWNLOAD 3PATTI HOT",
    radius: "12px",
    eyebrow: "3Patti Hot · Play Big",
    legalBadge: "18+",
    sections: ["stats", "games", "download", "guide", "earning", "faq"],
  },
  {
    id: 9,
    name: "Midnight Slate",
    note: "Monochrome slate + gold, minimal, full-bleed hero",
    theme: {
      bg: "#0F172A",
      bgAlt: "#16223A",
      surface: "rgba(255,255,255,0.05)",
      border: "rgba(255,255,255,0.12)",
      text: "#F1F5F9",
      muted: "#94A3B8",
      accent: "#D4AF37",
      accentText: "#1A1206",
      ctaFrom: "#D4AF37",
      ctaTo: "#A8842B",
      ctaText: "#1A1206",
      headerBg: "rgba(15,23,42,0.95)",
      footerBg: "#080D18",
    },
    font: "sans",
    hero: "fullBleed",
    heroImage: "./images/hero-queen.jpg",
    gameTile: "square",
    showStats: false,
    ctaLabel: "DOWNLOAD APK",
    radius: "8px",
    eyebrow: "3Patti Hot · APK",
    legalBadge: "18+",
    sections: ["games", "download", "guide", "earning", "faq"],
  },
  {
    id: 10,
    name: "Retro Arcade",
    note: "Dark purple + magenta/cyan, chunky arcade feel",
    theme: {
      bg: "#17062B",
      bgAlt: "#23093F",
      surface: "rgba(255,255,255,0.06)",
      border: "rgba(232,121,249,0.30)",
      text: "#FDF4FF",
      muted: "#C4A9D6",
      accent: "#F0ABFC",
      accentText: "#2B0736",
      ctaFrom: "#DB2777",
      ctaTo: "#7C3AED",
      ctaText: "#FFFFFF",
      headerBg: "rgba(23,6,43,0.95)",
      footerBg: "#0E0319",
    },
    font: "display",
    hero: "splitCard",
    heroImage: "./images/hero-queen.jpg",
    gameTile: "icon",
    showStats: false,
    ctaLabel: "DOWNLOAD 3PATTI HOT",
    radius: "18px",
    eyebrow: "3Patti Hot · Hot Tables",
    legalBadge: "18+",
    sections: ["games", "download", "guide", "earning", "faq"],
  },
  {
    id: 11,
    name: "Reference (Table)",
    note: "Saree hero + coins + blue CTA — screenshot jaisa",
    theme: {
      bg: "#1A0F08",
      bgAlt: "#241609",
      surface: "rgba(255,255,255,0.05)",
      border: "rgba(243,196,94,0.20)",
      text: "#FFF8EC",
      muted: "#C4AE97",
      accent: "#F3C45E",
      accentText: "#1A0F08",
      ctaFrom: "#1E40AF",
      ctaTo: "#3B82F6",
      ctaText: "#FFFFFF",
      headerBg: "rgba(26,15,8,0.95)",
      footerBg: "#120A05",
    },
    font: "display",
    hero: "posterRight",
    heroImage: "./images/hero-table.jpg",
    gameTile: "square",
    showStats: false,
    ctaLabel: "DOWNLOAD",
    radius: "12px",
    eyebrow: "3PATTI HOT APP DOWNLOAD",
    legalBadge: "18+ WHERE LEGAL",
    sections: ["games", "download", "guide", "earning", "faq"],
  },
];

export const DEFAULT_VARIANT_ID = 1;
