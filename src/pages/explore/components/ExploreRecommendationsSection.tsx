import { Globe2, SearchX } from "lucide-react";
import type { ExternalGame, ExternalSource } from "../data/externalGames";
import { ExploreRecommendationCard } from "./ExploreRecommendationCard";

type Props = {
  games: ExternalGame[];
  activeSource: ExternalSource;
};

export function ExploreRecommendationsSection({ games, activeSource }: Props) {
  return (
    <section className="rounded-2xl border-2 border-slate-800 bg-slate-900 p-4">
      <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-sky-100">
            <Globe2 size={14} />
            Fuentes externas simuladas
          </div>
          <h2 className="text-lg font-semibold text-white">Resultados externos</h2>
          <p className="text-sm text-slate-400">
            No incluye tu catálogo local. Muestra coincidencias simuladas de
            tiendas externas y todas las descargas son gratuitas.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-800 px-3 py-2 text-right">
          <p className="text-[11px] uppercase tracking-widest text-slate-400">
            Fuente
          </p>
          <p className="text-sm font-semibold text-white">
            {activeSource}
          </p>
        </div>
      </div>

      {games.length > 0 ? (
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {games.map((game, index) => (
            <ExploreRecommendationCard key={game.id} game={game} rank={index + 1} />
          ))}
        </div>
      ) : (
        <div className="mt-4 flex min-h-48 items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/30 p-6 text-center text-slate-300">
          <div className="space-y-2">
            <SearchX className="mx-auto text-slate-500" size={24} />
            <p className="text-sm font-semibold text-white">
              No hay coincidencias en las fuentes simuladas
            </p>
            <p className="text-sm text-slate-400">
              Prueba otra búsqueda o cambia la fuente externa.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
