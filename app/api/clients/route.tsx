// app/api/clients/route.ts
import { NextRequest, NextResponse } from "next/server";
import { creators, Follower } from "@/data/mockDb";

interface CreateClientBody {
  creatorId: number;
  name: string;
  goal: string;
  level: string;
}

export async function POST(req: NextRequest) {
  const { creatorId, name, goal, level } = (await req.json()) as CreateClientBody;

  const creator = creators.find((c) => c.id === creatorId);

  if (!creator) {
    return NextResponse.json({ error: "Creator not found" }, { status: 404 });
  }

  const newFollower: Follower = { name, goal, level };
  creator.followers.push(newFollower);

  return NextResponse.json({ success: true, creator }, { status: 201 });
}
