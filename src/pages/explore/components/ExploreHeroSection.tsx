import { Search } from "lucide-react";

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

          <div className="space-y-1">
            <p className="text-md font-bold tracking-wide text-slate-400 uppercase">
              Explorar
            </p>
            <h1 className="text-2xl font-bold text-white">
              Busca juegos externos gratuitos
            </h1>
          </div>
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
    </section>
  );
}
