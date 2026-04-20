import { useState, useEffect } from "react";
import { ExploreHeroSection } from "./components/ExploreHeroSection";
import { ExploreRecommendationsSection } from "./components/ExploreRecommendationsSection";
import { fetchExternalGames, Juego } from "../../hooks/api";

export function ExplorePage() {
  const [query, setQuery] = useState("");
  const [activeSource, setActiveSource] = useState("Todas");
  const [juegos, setJuegos] = useState<Juego[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Nuevos estados para la paginación
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Manejadores personalizados para reiniciar la página cuando cambias filtros
  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1); // Si buscas otra cosa, vuelves a la página 1
  };

  const handleSourceChange = (newSource: string) => {
    setActiveSource(newSource);
    setPage(1); // Si cambias de consola, vuelves a la página 1
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      setLoading(true);
      try {
        const MAPEO_FILTROS: Record<string, string> = {
          "Todas": "Todas",
          "GBA": "gba",
          "DN": "ds",
          "GC": "gamecube"
        };
        
        const consolaParaBackend = MAPEO_FILTROS[activeSource] || "Todas";

        // Pasamos la página actual a la petición
        const resultado = await fetchExternalGames(query, page, consolaParaBackend);
        
        setJuegos(resultado.juegos);
        // Actualizamos el total de páginas según lo que diga el backend
        setTotalPages(resultado.total_paginas || 1);
      } catch (error) {
        console.error("Error al buscar juegos:", error);
      } finally {
        setLoading(false);
      }
    }, 500); 

    return () => clearTimeout(delayDebounceFn);
  }, [query, activeSource, page]); // Añadimos 'page' como dependencia del efecto

  return (
    <div className="flex w-full flex-col gap-4">
      <ExploreHeroSection
        query={query}
        resultCount={juegos.length}
        onQueryChange={handleQueryChange}
        activeSource={activeSource}
        onSourceChange={handleSourceChange}
      />

      <ExploreRecommendationsSection
        games={juegos}
        activeSource={activeSource}
        loading={loading}
        // Pasamos las nuevas propiedades de paginación
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}