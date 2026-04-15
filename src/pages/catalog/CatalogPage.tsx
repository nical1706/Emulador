import { CatalogHero } from "./components/CatalogHero";
import { CatalogGamesSection } from "./components/CatalogGamesSection";

export function CatalogPage() {
  return (
    <div className="flex w-full flex-col gap-4">
      <CatalogHero />
      <CatalogGamesSection />
    </div>
  );
}