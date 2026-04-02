import { ArrowDownToLine, Play, Trash2 } from "lucide-react";
import type { ReactNode } from "react";
import type { CatalogGame } from "../../catalog/data/catalogGames";

type Props = {
  installStatus: CatalogGame["installStatus"];
};

type Action = {
  id: string;
  label: string;
  icon: ReactNode;
  variant: "primary" | "secondary";
};

export function GameActions({ installStatus }: Props) {
  const actions: Action[] =
    installStatus === "installed"
      ? [
          {
            id: "play",
            label: "Jugar",
            icon: <Play size={16} />,
            variant: "primary",
          },
          {
            id: "delete",
            label: "Borrar",
            icon: <Trash2 size={16} />,
            variant: "secondary",
          },
        ]
      : [
          {
            id: "download",
            label: "Descargar",
            icon: <ArrowDownToLine size={16} />,
            variant: "primary",
          },
        ];

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {actions.map((action) => (
        <button
          key={action.id}
          type="button"
          className={[
            "inline-flex items-center gap-2 rounded-full border-2 px-3 py-1.5 text-xs font-semibold outline-offset-4 focus:outline-2 focus:outline-amber-400",
            action.variant === "primary"
              ? "border-slate-600 bg-slate-700 text-sky-100"
              : "border-slate-700 text-slate-200 hover:bg-slate-800",
          ].join(" ")}
        >
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  );
}
