import { Filter } from "lucide-react";
import {
  externalCollections,
  externalSourceOptions,
  type ExternalSource,
} from "../data/externalGames";

type Props = {
  activeSource: ExternalSource;
  onSourceChange: (source: ExternalSource) => void;
};

export function ExploreFiltersPanel({ activeSource, onSourceChange }: Props) {
  return (
    <section className="rounded-2xl border-2 border-slate-800 bg-slate-900 p-4">
      <div className="flex items-center gap-2">
        <Filter className="text-slate-400" size={18} />
        <div>
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            Fuentes rapidas
          </p>
          <h2 className="text-lg font-semibold text-white">Filtra por tienda</h2>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {externalSourceOptions.map((source) => (
          <button
            key={source}
            type="button"
            onClick={() => onSourceChange(source)}
            aria-pressed={activeSource === source}
            className={[
              "rounded-full border px-3 py-1.5 text-sm font-semibold outline-offset-4 focus:outline-2 focus:outline-amber-400",
              activeSource === source
                ? "border-slate-600 bg-slate-700 text-sky-100"
                : "border-slate-700 bg-slate-800 text-slate-200",
            ].join(" ")}
          >
            {source}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {externalCollections.map((collection) => (
          <article
            key={collection.title}
            className="rounded-xl border border-slate-800 bg-slate-800 px-3 py-2"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">
                  {collection.title}
                </p>
                <p className="text-xs text-slate-400">{collection.description}</p>
              </div>

              <span className="shrink-0 rounded-full bg-slate-700 px-2 py-1 text-xs font-semibold text-sky-100">
                {collection.count}
              </span>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-4 text-xs text-slate-500">
        La exploracion aqui es una simulacion de fuentes externas con descargas
        gratuitas; la API real sigue pendiente.
      </p>
    </section>
  );
}
