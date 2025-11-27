// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CreatorHub – SaaS MVP",
  description: "SaaS-Plattform für Creator wie Lena",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        <main
          style={{
            maxWidth: "900px",
            margin: "2rem auto",
            padding: "0 1rem",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
