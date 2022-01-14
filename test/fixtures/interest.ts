import type { Interest } from "../../src/types";

export const interestsFixture = (): Interest[] => [
  {
    description:
      "China, Vietnam, Thaïland, Laos, Cambodia, Malaysia, Indonesia, India, Iceland, Ecuador, USA, Brazil, Spain, and more...",
    label: "Travel",
  },
  { description: "advanced PADI diver", label: "Scuba Diving" },
  {
    description: "Yosemite, lost coast, Zion, Yellow Stone, ...",
    label: "Backpacking",
  },
  { label: "Mountain & road biking" },
  { description: "SF, Fantasy, Manga/Comics", label: "Reading" },
  { label: "Roller skating" },
  {
    description: "Favorite directors: Stanley Kubrick's & Terry Gilliam's",
    label: "Cinema",
  },
  { label: "Animation" },
  { label: "Photography" },
  { label: "Cooking" },
];
