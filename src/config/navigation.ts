import type { LucideIcon } from "lucide-react";
import { BookOpen, Cloud, Gamepad2, History, MonitorSmartphone, Users, Boxes } from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cloud, isContentType: true },
  { key: "controls", path: "/controls", icon: Gamepad2, isContentType: true },
  { key: "platforms", path: "/platforms", icon: MonitorSmartphone, isContentType: true },
  { key: "versions", path: "/versions", icon: History, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
  { key: "roblox", path: "/roblox", icon: Boxes, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
