// app/api/creators/route.ts
import { NextRequest, NextResponse } from "next/server";
import { creators, Creator } from "@/data/mockDb";

export async function GET() {
  return NextResponse.json(creators);
}

interface CreateCreatorBody {
  name: string;
  email: string;
  category: string;
}

export async function POST(req: NextRequest) {
  const data = (await req.json()) as CreateCreatorBody;

  const newCreator: Creator = {
    id: Date.now(),
    name: data.name,
    email: data.email,
    category: data.category,
    followers: [],
  };

  creators.push(newCreator);

  return NextResponse.json(newCreator, { status: 201 });
}
