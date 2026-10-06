export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Weather Sandbox Wiki",
  shortName: "Weather Sandbox",
  logoText: "WS",
  tagline: "Weather Controls, Storm Experiments, Biomes & Guides",
  description: "Fan-made Weather Sandbox wiki for the Roblox weather simulation sandbox. Learn weather controls, storm experiments, biomes, tools, contracts, and rare weather combinations.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://weathersandbox.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://weathersandbox.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/70412932199344/Weather-Sandbox",
  heroVideoId: "9qoghhZDuK8", // Roblox Weather Sandbox gameplay & tornado tutorial
  social: {},
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
