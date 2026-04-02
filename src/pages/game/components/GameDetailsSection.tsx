import { Calendar, Gamepad2, Joystick, Tag, Users } from "lucide-react";
import type { CatalogGame } from "../../catalog/data/catalogGames";

type Props = {
  game: CatalogGame;
};

export function GameDetailsSection({ game }: Props) {
  const details = [
    {
      id: "system",
      label: "Sistema",
      value: game.system,
      icon: <Joystick size={16} />,
    },
    {
      id: "genre",
      label: "Genero",
      value: game.genre,
      icon: <Tag size={16} />,
    },
    {
      id: "year",
      label: "Lanzamiento",
      value: String(game.year),
      icon: <Calendar size={16} />,
    },
    {
      id: "players",
      label: "Jugadores",
      value: game.players,
      icon: <Users size={16} />,
    },
  ];

  return (
    <section className="flex h-full min-h-0 flex-col rounded-2xl border-2 border-slate-800 bg-slate-900 p-3">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h2 className="text-base font-semibold text-white">Detalles</h2>
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-700 px-2.5 py-1 text-xs font-semibold text-sky-100">
          <Gamepad2 size={16} />
          {game.system}
        </div>
      </div>

      <ul className="grid gap-2 sm:grid-cols-2">
        {details.map((detail) => (
          <li
            key={detail.id}
            className="flex items-center justify-between rounded-lg bg-slate-800 px-3 py-2 text-sm"
          >
            <span className="inline-flex items-center gap-2 text-slate-300">
              {detail.icon}
              {detail.label}
            </span>
            <span className="font-semibold text-sky-100">{detail.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
