export type CatalogGame = {
  id: string;
  title: string;
  system: string;
  genre: string;
  year: number;
  players: string;
  accentClassName: string;
  description: string;
  installStatus: "installed" | "not-installed";
};

export const catalogGames: CatalogGame[] = [
  {
    id: "chrono-trigger",
    title: "Chrono Trigger",
    system: "SNES",
    genre: "RPG",
    year: 1995,
    players: "1 jugador",
    accentClassName: "from-fuchsia-500 via-violet-500 to-sky-500",
    description: "Viaja entre eras para cambiar el destino del mundo.",
    installStatus: "installed",
  },
  {
    id: "metal-slug-x",
    title: "Metal Slug X",
    system: "Neo Geo",
    genre: "Arcade",
    year: 1999,
    players: "2 jugadores",
    accentClassName: "from-orange-500 via-amber-500 to-yellow-400",
    description: "Accion frenética y cooperativa con estilo arcade clásico.",
    installStatus: "installed",
  },
  {
    id: "castlevania-sotn",
    title: "Castlevania: SOTN",
    system: "PlayStation",
    genre: "Metroidvania",
    year: 1997,
    players: "1 jugador",
    accentClassName: "from-rose-500 via-red-500 to-orange-500",
    description: "Explora un castillo inmenso con combate y progresión libre.",
    installStatus: "not-installed",
  },
  {
    id: "zelda-minish-cap",
    title: "The Minish Cap",
    system: "GBA",
    genre: "Aventura",
    year: 2004,
    players: "1 jugador",
    accentClassName: "from-emerald-500 via-teal-500 to-cyan-500",
    description: "Una aventura compacta de mazmorras, secretos y puzles.",
    installStatus: "not-installed",
  },
  {
    id: "street-fighter-iii",
    title: "Street Fighter III",
    system: "Arcade",
    genre: "Lucha",
    year: 1999,
    players: "2 jugadores",
    accentClassName: "from-blue-500 via-indigo-500 to-purple-500",
    description: "Combate técnico con parry preciso y ritmo competitivo.",
    installStatus: "installed",
  },
  {
    id: "sonic-3-knuckles",
    title: "Sonic 3 & Knuckles",
    system: "Mega Drive",
    genre: "Plataformas",
    year: 1994,
    players: "2 jugadores",
    accentClassName: "from-sky-500 via-cyan-500 to-teal-400",
    description: "Velocidad, rutas alternativas y fases icónicas en 2D.",
    installStatus: "not-installed",
  },
];
