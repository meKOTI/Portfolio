export type Project = {
  slug: string;
  category: "web" | "game";
  title: string;
  shortDescription: {
    pl: string;
    en: string;
  };
  description: {
    pl: string;
    en: string;
  };
  technologies: string[];
  accent: "gold" | "purple";
};

export const projects: Project[] = [
  {
    slug: "popilo",
    category: "web",
    title: "Popilo",
    shortDescription: {
      pl: "Aplikacja webowa rozwijana wokół nauki języków i immersji.",
      en: "A web application built around language learning and immersion.",
    },
    description: {
      pl: "Miejsce na pełny opis projektu: założenia, problem, Twoja rola, najważniejsze decyzje techniczne oraz rezultat.",
      en: "A place for the full project story: goals, problem, your role, key technical decisions and the result.",
    },
    technologies: ["React", "TypeScript", "Supabase"],
    accent: "gold",
  },
  {
    slug: "pallet-designer",
    category: "web",
    title: "Pallet Designer",
    shortDescription: {
      pl: "Aplikacja desktopowa zbudowana przy użyciu technologii webowych.",
      en: "A desktop application built with web technologies.",
    },
    description: {
      pl: "Tutaj możesz opisać działanie aplikacji, architekturę, wyzwania związane z Electronem oraz sposób projektowania interfejsu.",
      en: "Here you can describe the application, its architecture, Electron-related challenges and your interface design process.",
    },
    technologies: ["React", "TypeScript", "Electron"],
    accent: "purple",
  },
  {
    slug: "game-jam",
    category: "game",
    title: "Game Jam Project",
    shortDescription: {
      pl: "Dopracowana gra stworzona w cztery dni podczas game jamu.",
      en: "A polished game created in four days during a game jam.",
    },
    description: {
      pl: "Na tej stronie możesz pokazać gameplay, mechaniki, ograniczenia czasowe game jamu, swój wkład oraz to, czego nauczyłeś się podczas produkcji.",
      en: "Use this page to show gameplay, mechanics, game-jam time constraints, your contribution and what you learned during production.",
    },
    technologies: ["Godot", "GDScript"],
    accent: "gold",
  },
];
