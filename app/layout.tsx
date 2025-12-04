// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextAuthProvider from "@/components/SessionProvider";

export const metadata: Metadata = {
  title: "CoachPanel für Fitness-Coaches",
  description:
    "CoachPanel hilft Fitness-Coaches dabei, ihre Follower, Ziele und Trainingslevel an einem Ort zu organisieren.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <NextAuthProvider>
          <Navbar />
          <main>{children}</main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
