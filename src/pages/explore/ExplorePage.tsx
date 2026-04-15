import { ExploreFiltersPanel } from "./components/ExploreFiltersPanel";
import { ExploreHeroSection } from "./components/ExploreHeroSection";
import { ExploreRecommendationsSection } from "./components/ExploreRecommendationsSection";
import { externalGames, type ExternalSource } from "./data/externalGames";
import { useMemo, useState } from "react";

export function ExplorePage() {
  const [query, setQuery] = useState("");
  const [activeSource, setActiveSource] = useState<ExternalSource>("Todas");

  const filteredGames = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return externalGames.filter((game) => {
      const matchesSource =
        activeSource === "Todas" || game.source === activeSource;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [
          game.title,
          game.source,
          game.platform,
          game.genre,
          game.downloadLabel,
          String(game.year),
        ].some((value) => value.toLowerCase().includes(normalizedQuery));

      return matchesSource && matchesQuery;
    });
  }, [activeSource, query]);

  return (
    <div className="flex w-full flex-col gap-4">
      <ExploreHeroSection
        query={query}
        resultCount={filteredGames.length}
        onQueryChange={setQuery}
      />

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <ExploreRecommendationsSection
          games={filteredGames}
          activeSource={activeSource}
        />
        <ExploreFiltersPanel
          activeSource={activeSource}
          onSourceChange={setActiveSource}
        />
      </div>
    </div>
  );
}
