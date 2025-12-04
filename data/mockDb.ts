// data/mockDb.ts

export interface Follower {
  _id?: string; // optional, kommt von Mongo
  name: string;
  goal: string;
  level: string;
}

export interface Creator {
  _id: string;
  name: string;
  email: string;
  category: string;
  followers: Follower[];
}
