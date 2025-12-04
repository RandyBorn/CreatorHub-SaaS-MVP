import Link from "next/link";

export default function HomePage() {
  return (
    <section className="section">
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.5fr)",
          gap: "2.5rem",
          alignItems: "center",
        }}
      >
        {/* Linke Seite – Hero-Text */}
        <div>
          <h1
            style={{
              fontSize: "2.3rem",
              lineHeight: 1.15,
              marginBottom: "0.8rem",
              color: "#0f172a",
            }}
          >
            CoachPanel 🧑‍🏫 dein zentrales{" "}
            <span style={{ color: "#2563eb" }}>
              Dashboard für Fitness-Coaches
            </span>{" "}
            🏋️‍♂️
          </h1>

          <p className="section__subtitle" style={{ marginBottom: "1.4rem" }}>
            Sammle Anfragen von Followern, speichere ihre Ziele und
            Trainingslevel und behalte alle Coaching-Kontakte an einem Ort im
            Blick statt dich in DMs, Notizen und Excel-Tabellen zu verlieren.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "1.8rem",
            }}
          >
            <Link href="/signup">
              <button className="btn-primary">Als Coach starten</button>
            </Link>

            <Link href="/signin">
              <button className="btn-ghost">Schon Account? Einloggen</button>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
              fontSize: "0.9rem",
              color: "#6b7280",
            }}
          >
            <div>
              <strong>✨ Für verschiedene Coaching-Profile</strong>
              <div>
                Personal Training, Online-Coaching, Gruppenkurse u. v. m.
              </div>
            </div>
            <div>
              <strong>📊 Überblick über Follower & Ziele</strong>
              <div>
                Sieh auf einen Blick, wer abnehmen, Muskeln aufbauen oder
                definieren möchte.
              </div>
            </div>
            <div>
              <strong>🧩 Klarer nächster Schritt im Coaching</strong>
              <div>
                Hilft dir, deine Follower sortiert zu halten und deine nächsten
                Inhalte oder Programme besser zu planen.
              </div>
            </div>
          </div>
        </div>

        {/* Rechte Seite – Onboarding/Preview-Card */}
        <div>
          <div
            style={{
              borderRadius: "18px",
              padding: "1.3rem 1.4rem",
              background:
                "radial-gradient(circle at top left, #ffffff 0, #e5edff 70%)",
              border: "1px solid rgba(148, 163, 184, 0.6)",
              boxShadow: "0 18px 45px rgba(15, 23, 42, 0.12)",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#6b7280",
                marginBottom: "0.4rem",
              }}
            >
              So nutzt du CoachPanel
            </div>

            <ol
              style={{
                margin: 0,
                paddingLeft: "1.1rem",
                fontSize: "0.9rem",
                color: "#374151",
                display: "flex",
                flexDirection: "column",
                gap: "0.55rem",
              }}
            >
              <li>
                <strong>1. Account anlegen</strong>
                <div style={{ color: "#6b7280", fontSize: "0.85rem" }}>
                  Registriere dich als Coach mit deinem Namen, deiner E-Mail,
                  deiner Coaching-Kategorie und einem Passwort.
                </div>
              </li>
              <li>
                <strong>2. Kontakte strukturieren</strong>
                <div style={{ color: "#6b7280", fontSize: "0.85rem" }}>
                  Lege Creator-Accounts für deine Follower an und speichere
                  deren Ziele und Trainingslevel.
                </div>
              </li>
              <li>
                <strong>3. Arbeitsweise optimieren</strong>
                <div style={{ color: "#6b7280", fontSize: "0.85rem" }}>
                  Nutze das Dashboard, um schnell zu sehen, wer welche Ziele hat
                  und welche Programme oder Inhalte du als Nächstes anbieten
                  solltest. Behalte den Überblick über alle Coaching-Kontakte
                  und unterstütze deine Follower gezielter.
                </div>
              </li>
            </ol>

            <div
              style={{
                marginTop: "1.2rem",
                padding: "0.7rem 0.8rem",
                borderRadius: "12px",
                background: "rgba(37, 99, 235, 0.06)",
                border: "1px dashed rgba(129, 140, 248, 0.6)",
                fontSize: "0.85rem",
                color: "#1f2937",
              }}
            >
              <strong>CoachPanel</strong> hilft dir dabei, deine Follower
              strukturiert zu verwalten und schneller zu erkennen, welche Ziele
              und Programme für sie wirklich passen. So kannst du dein Coaching
              effizienter gestalten und deine Community gezielter unterstützen.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
