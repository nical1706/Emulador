import { Link } from "react-router";
import type { CatalogGame } from "../data/catalogGames";

type CardGame = Pick<CatalogGame, "id" | "title" | "accentClassName">;

type Props = {
  game: CardGame;
  to?: string;
  topLeftBadge?: string;
};

export function GameCard({ game, to, topLeftBadge }: Props) {
  return (
    <article className="aspect-square">
      <Link
        to={to ?? `/catalog/${game.id}`}
        aria-label={`Abrir ${game.title}`}
        className="group relative block h-full w-full rounded-2xl outline-offset-4 focus:outline-2 focus:outline-amber-400"
      >
        <div
          className={`h-full w-full rounded-2xl bg-linear-to-br transition-opacity group-hover:opacity-95 ${game.accentClassName}`}
        />

        {topLeftBadge ? (
          <div className="pointer-events-none absolute left-2 top-2 rounded-full border border-white/15 bg-slate-950/25 px-2 py-1 text-[11px] font-semibold text-white/85">
            {topLeftBadge}
          </div>
        ) : null}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-2xl bg-linear-to-t from-slate-950 to-transparent p-2">
          <h3 className="truncate text-sm font-semibold text-white">
            {game.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}
