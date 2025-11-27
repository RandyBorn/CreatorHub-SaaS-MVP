// data/mockDb.ts

export interface Follower {
  name: string;
  goal: string;
  level: string;
}

export interface Creator {
  id: number;
  name: string;
  email: string;
  category: string;
  followers: Follower[];
}

// Achtung: hier klein geschrieben: creators (nicht Creators)
export const creators: Creator[] = [
  {
    id: 1,
    name: "Lena Fit",
    email: "lena@fitmail.com",
    category: "Fitness",
    followers: [
      { name: "Anna", goal: "Abnehmen", level: "Anfängerin" },
      { name: "Sophie", goal: "Muskelaufbau", level: "Fortgeschritten" },
    ],
  },
];
