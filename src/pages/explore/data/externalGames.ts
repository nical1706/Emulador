export type ExternalSource = "Todas" | "Steam" | "GOG" | "itch.io" | "Epic";

export type ExternalGame = {
  id: string;
  title: string;
  source: Exclude<ExternalSource, "Todas">;
  platform: string;
  genre: string;
  year: number;
  downloadLabel: string;
  accentClassName: string;
};

export const externalSourceOptions: ExternalSource[] = [
  "Todas",
  "Steam",
  "GOG",
  "itch.io",
  "Epic",
];

export const externalGames: ExternalGame[] = [
  {
    id: "hollow-knight",
    title: "Hollow Knight",
    source: "Steam",
    platform: "PC / Switch",
    genre: "Metroidvania",
    year: 2017,
    downloadLabel: "Gratis",
    accentClassName: "from-slate-700 via-zinc-600 to-stone-500",
  },
  {
    id: "stardew-valley",
    title: "Stardew Valley",
    source: "GOG",
    platform: "PC / Mac / Linux",
    genre: "Simulacion",
    year: 2016,
    downloadLabel: "Gratis",
    accentClassName: "from-emerald-600 via-lime-500 to-amber-400",
  },
  {
    id: "dead-cells",
    title: "Dead Cells",
    source: "Steam",
    platform: "PC / Consolas",
    genre: "Roguelike",
    year: 2018,
    downloadLabel: "Gratis",
    accentClassName: "from-red-600 via-orange-500 to-amber-400",
  },
  {
    id: "celeste",
    title: "Celeste",
    source: "Epic",
    platform: "PC / Consolas",
    genre: "Plataformas",
    year: 2018,
    downloadLabel: "Gratis",
    accentClassName: "from-sky-600 via-blue-500 to-indigo-500",
  },
  {
    id: "hyper-light-drifter",
    title: "Hyper Light Drifter",
    source: "itch.io",
    platform: "PC / Switch",
    genre: "Accion",
    year: 2016,
    downloadLabel: "Gratis",
    accentClassName: "from-cyan-600 via-teal-500 to-emerald-400",
  },
  {
    id: "hades",
    title: "Hades",
    source: "Steam",
    platform: "PC / Switch",
    genre: "Accion roguelike",
    year: 2020,
    downloadLabel: "Gratis",
    accentClassName: "from-violet-700 via-fuchsia-600 to-rose-500",
  },
];

export const externalCollections = [
  {
    title: "Indies destacados",
    description: "Pequeños equipos, ideas claras y muy poca grasa visual.",
    count: "18 juegos",
  },
  {
    title: "Lanzamientos recientes",
    description: "Novedades simuladas de las tiendas conectadas.",
    count: "9 juegos",
  },
  {
    title: "Nuevas incorporaciones",
    description: "Selección rotatoria de títulos recientes en cada fuente.",
    count: "7 juegos",
  },
];