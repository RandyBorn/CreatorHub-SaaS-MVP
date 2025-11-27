// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import type { Creator } from "@/data/mockDb";
import CreatorCard from "@/components/CreatorCard";

export default function DashboardPage() {
  const [creators, setCreators] = useState<Creator[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/creators");
      const data: Creator[] = await res.json();
      setCreators(data);
    };
    load();
  }, []);

  return (
    <section className="section">
      <h2 className="section__title">Creator Dashboard</h2>
      <p className="section__subtitle">
        Überblick über alle Creator-Accounts und deren Follower. Nutze das
        Dashboard, um dein SaaS-MVP mit echten Daten zu testen.
      </p>

      {creators.length === 0 && <p>Noch keine Creator angelegt.</p>}

      {creators.map((creator) => (
        <CreatorCard key={creator.id} creator={creator} />
      ))}
    </section>
  );
}
