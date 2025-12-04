"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { Creator } from "@/data/mockDb";
import CreatorCard from "@/components/CreatorCard";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  // Wenn nicht eingeloggt → auf /signin umleiten
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  // Daten nur für den eingeloggten Coach laden
  useEffect(() => {
    if (status !== "authenticated") return;
    if (!session?.user?.email) return;

    const load = async () => {
      const res = await fetch(
        `/api/creators?email=${encodeURIComponent(session.user!.email!)}`
      );
      const data: Creator[] = await res.json();
      setCreators(data);
      setLoadingData(false);
    };

    load();
  }, [status, session]);

  if (status === "loading" || loadingData) {
    return (
      <section className="section">
        <p>Lade dein Dashboard...</p>
      </section>
    );
  }

  if (!session) {
    return null; // wird sowieso nach /signin umgeleitet
  }

  const coach = creators[0]; // wir erwarten nur einen Eintrag für diese E-Mail

  return (
    <section className="section">
      <h2 className="section__title">Dein CoachPanel Dashboard</h2>
      <p className="section__subtitle">
        Hier siehst du deine Follower und ihre Ziele auf einen Blick.
      </p>

      {!coach && <p>Für diese E-Mail wurde noch kein Coach gefunden.</p>}

      {coach && <CreatorCard creator={coach} />}
    </section>
  );
}
