import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { catalogGames } from "../catalog/data/catalogGames";
import { GameDetailsSection } from "./components/GameDetailsSection";
import { GameOverviewSection } from "./components/GameOverviewSection";

export function GamePage() {
  const { gameId } = useParams();
  const game = catalogGames.find((item) => item.id === gameId);

  if (!game) {
    return (
      <section className="flex h-full min-h-60 items-center justify-center rounded-2xl border-2 border-slate-800 bg-slate-900 p-8 text-center text-slate-200">
        <div className="space-y-4">
          <p className="text-sm font-bold tracking-[0.3em] text-slate-400 uppercase">
            No encontrado
          </p>
          <h1 className="text-3xl font-bold text-white">Juego no disponible</h1>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-1 rounded-full bg-slate-700 px-4 py-2 text-sm font-semibold text-sky-100 outline-offset-4 focus:outline-2 focus:outline-amber-400"
          >
            <ChevronLeft size={16} />
            Volver al catálogo
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="flex h-full min-h-0 w-full flex-col gap-3">
      <Link
        to="/catalog"
        className="inline-flex self-start items-center gap-1 text-sm font-semibold text-slate-300 outline-offset-4 focus:outline-2 focus:outline-amber-400"
      >
        <ChevronLeft size={16} />
        Volver al catálogo
      </Link>

      <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)]">
        <GameOverviewSection game={game} />
        <GameDetailsSection game={game} />
      </div>
    </div>
  );
}