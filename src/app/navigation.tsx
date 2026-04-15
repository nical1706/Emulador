import { Compass, Library, User } from "lucide-react";
import type { ReactNode } from "react";

export type NavigationId = "catalog" | "explore" | "profile";

export type NavigationItem = {
  id: NavigationId;
  label: string;
  title: string;
  to: string;
  icon: ReactNode;
};

export const navigationItems: NavigationItem[] = [
  {
    id: "catalog",
    label: "Catálogo",
    title: "Catálogo",
    to: "/catalog",
    icon: <Library className="h-full w-auto p-2" strokeWidth={2} />,
  },
  {
    id: "explore",
    label: "Explorar",
    title: "Explorar",
    to: "/explore",
    icon: <Compass className="h-full w-auto p-2" strokeWidth={2} />,
  },
  {
    id: "profile",
    label: "Perfil",
    title: "Perfil",
    to: "/profile",
    icon: <User className="h-full w-auto p-2" strokeWidth={2} />,
  },
];
