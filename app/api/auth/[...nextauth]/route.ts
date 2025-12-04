// app/api/auth/[...nextauth]/route.ts

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import CreatorModel from "@/models/Creator";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "E-Mail", type: "text" },
        password: { label: "Passwort", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          await connectDB();

          const creator = await CreatorModel.findOne({
            email: credentials.email,
          });

          if (!creator) {
            console.log("Creator not found");
            return null;
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            creator.password
          );

          if (!isValid) {
            console.log("Invalid password");
            return null;
          }

          return {
            id: creator._id.toString(),
            name: creator.name,
            email: creator.email,
          };
        } catch (err) {
          console.error("Authorize error:", err);
          // KEIN throw → sonst HTML-Errorseite
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// ⬇️ DAS ist wichtig im App Router
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// die klammern [...nextauth] sie sind genau das, was Next.js haben will. Ohne die Klammern funktioniert NextAuth nicht richtig.
