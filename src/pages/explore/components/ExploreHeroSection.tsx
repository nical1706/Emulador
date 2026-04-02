import { Search, Sparkles } from "lucide-react";

type Props = {
  query: string;
  resultCount: number;
  onQueryChange: (value: string) => void;
};

export function ExploreHeroSection({
  query,
  resultCount,
  onQueryChange,
}: Props) {
  return (
    <section className="rounded-2xl border-2 border-slate-800 bg-slate-900 p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-sky-100">
            <Sparkles size={14} />
            Buscador externo simulado
          </div>

          <div className="space-y-1">
            <p className="text-sm font-bold tracking-[0.3em] text-slate-400 uppercase">
              Explorar
            </p>
            <h1 className="text-2xl font-bold text-white">
              Busca juegos externos gratuitos
            </h1>
          </div>

          <p className="max-w-2xl text-slate-400">
            Consulta fuentes externas simuladas, filtra por título, tienda o
            plataforma y deja lista la descarga gratuita para cuando la API esté
            disponible.
          </p>
        </div>

        <label className="flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 outline-offset-4 focus-within:outline-2 focus-within:outline-amber-400">
          <Search size={16} className="text-slate-400" />
          <input
            aria-label="Buscar juegos"
            type="text"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Buscar por título, tienda o plataforma..."
            className="w-56 bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
          />
        </label>
      </div>

      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200">
        {resultCount} resultados gratuitos visibles
      </div>

      <p className="mt-2 text-xs text-slate-500">
        El backend de descargas ya está previsto; la API externa todavía no está
        implementada.
      </p>
    </section>
  );
}
