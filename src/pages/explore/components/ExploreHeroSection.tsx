import { Search } from "lucide-react";

type Props = {
  query: string;
  resultCount: number;
  onQueryChange: (value: string) => void;
  // Cambiamos a string para evitar dependencias de archivos antiguos
  activeSource: string;
  onSourceChange: (source: string) => void;
};

export function ExploreHeroSection({
  query,
  resultCount, // Opcional: puedes mostrar este número en el HTML si quieres
  onQueryChange,
  activeSource,
  onSourceChange,
}: Props) {
  // Lista de fuentes simplificada
  const sources = ["Todas", "GBA", "DN", "GC"];

  return (
    <section className="rounded-2xl border-2 border-slate-800 bg-slate-900 p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-1">
          <p className="text-md font-bold tracking-wide text-slate-400 uppercase">Explorar</p>
          <h1 className="text-2xl font-bold text-white">Busca juegos externos</h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Filtro Estilizado */}
          <div className="flex items-center gap-2 rounded-full bg-slate-800 p-1">
            {sources.map((source) => (
              <button
                key={source}
                onClick={() => onSourceChange(source)}
                className={`rounded-full px-4 py-1 text-xs font-bold transition-colors ${
                  activeSource === source
                    ? "bg-slate-700 text-sky-100 shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {source}
              </button>
            ))}
          </div>

          {/* Buscador */}
          <label className="flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 outline-offset-4 focus-within:outline-2 focus-within:outline-amber-400">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Buscar título..."
              className="w-40 bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
            />
          </label>
        </div>
      </div>
    </section>
  );
}