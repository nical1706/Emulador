import { ArrowRight } from "lucide-react";
import type { ExternalGame } from "../data/externalGames";

type Props = {
  game: ExternalGame;
  rank: number;
};

export function ExploreRecommendationCard({ game, rank }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/70">
      <div className={`relative aspect-5/4 bg-linear-to-br ${game.accentClassName}`}>
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-transparent" />

        <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-slate-950/25 px-2 py-1 text-[11px] font-semibold text-white/80">
          {game.source}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-white">
              {game.title}
            </h3>
          </div>
        </div>
      </div>

      <div className="space-y-1 p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            {game.genre}
          </p>
          <span className="rounded-full bg-slate-700 px-2 py-1 text-[11px] font-semibold text-sky-100">
            {game.availability}
          </span>
        </div>

        <p className="text-sm text-slate-300">{game.summary}</p>

        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400">
          <ArrowRight size={14} />
          Simulado · #{rank}
        </div>
      </div>
    </article>
  );
}
