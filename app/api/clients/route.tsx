// app/api/clients/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import CreatorModel from "@/models/Creator";

interface CreateClientBody {
  creatorId: string; // Mongo ObjectId als String
  name: string;
  goal: string;
  level: string;
}

export async function POST(req: NextRequest) {
  await connectDB();

  const { creatorId, name, goal, level } =
    (await req.json()) as CreateClientBody;

  try {
    const creator = await CreatorModel.findById(creatorId);

    if (!creator) {
      return NextResponse.json({ error: "Creator not found" }, { status: 404 });
    }

    creator.followers.push({ name, goal, level });
    await creator.save();

    return NextResponse.json(
      {
        _id: creator._id.toString(),
        name: creator.name,
        email: creator.email,
        category: creator.category,
        followers: creator.followers,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error adding follower:", err);
    return NextResponse.json(
      { error: "Konnte Follower nicht hinzufügen" },
      { status: 500 }
    );
  }
}
