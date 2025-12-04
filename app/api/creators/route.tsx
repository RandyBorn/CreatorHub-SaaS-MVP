// app/api/creators/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import CreatorModel from "@/models/Creator";
import bcrypt from "bcryptjs";

export async function GET(req: NextRequest) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email"); // 👈 optionaler Filter

  const query: any = {};
  if (email) {
    query.email = email;
  }

  const creators = await CreatorModel.find(query).lean();

  const sanitized = creators.map((c: any) => ({
    _id: c._id.toString(),
    name: c.name,
    email: c.email,
    category: c.category,
    followers: c.followers || [],
  }));

  return NextResponse.json(sanitized);
}

interface CreateCreatorBody {
  name: string;
  email: string;
  category: string;
  password: string;
}

export async function POST(req: NextRequest) {
  await connectDB();

  const data = (await req.json()) as CreateCreatorBody;

  try {
    const existing = await CreatorModel.findOne({ email: data.email });
    if (existing) {
      return NextResponse.json(
        { error: "E-Mail wird bereits verwendet" },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(data.password, 10);

    const creator = await CreatorModel.create({
      name: data.name,
      email: data.email,
      category: data.category,
      password: hashed,
    });

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
    console.error("Error creating creator:", err);
    return NextResponse.json(
      { error: "Konnte Coach nicht erstellen" },
      { status: 500 }
    );
  }
}
