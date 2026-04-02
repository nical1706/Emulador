import type { CatalogGame } from "../../catalog/data/catalogGames";
import { GameActions } from "./GameActions";

type Props = {
  game: CatalogGame;
};

export function GameOverviewSection({ game }: Props) {
  return (
    <section className="flex h-full min-h-0 flex-col rounded-2xl border-2 border-slate-800 bg-slate-900 p-3">
      <div className="flex min-h-0 flex-col gap-3 md:flex-row md:items-center md:gap-4">
        <div
          className={`aspect-square w-full max-w-45 self-center rounded-2xl bg-linear-to-br md:self-start lg:max-w-50 ${game.accentClassName}`}
        />

        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            FICHA
          </p>
          <h1 className="text-2xl leading-tight font-bold text-white lg:text-[1.85rem]">
            {game.title}
          </h1>
          <p className="mt-1 text-[11px] font-semibold tracking-widest text-slate-500 uppercase">
            {game.installStatus === "installed" ? "INSTALADO" : "NO INSTALADO"}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
            {game.description}
          </p>

          <GameActions installStatus={game.installStatus} />
        </div>
      </div>
    </section>
  );
}
