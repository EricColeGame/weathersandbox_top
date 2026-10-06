import type { LucideIcon } from "lucide-react";

export type NavItem = {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG: NavItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
