"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  category: string;
  password: string;
}

export default function SignupPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    category: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await fetch("/api/creators", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Etwas ist schiefgelaufen");
      return;
    }

    alert("Creator erstellt! Du kannst dich jetzt einloggen.");
    setForm({ name: "", email: "", category: "", password: "" });
  };

  return (
    <section className="section">
      <h2 className="section__title">Als Creator registrieren</h2>
      <p className="section__subtitle">
        Erstelle deinen eigenen Account und verwalte deine Follower.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: 400,
        }}
      >
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          required
        />
        <input
          className="input"
          type="email"
          placeholder="E-Mail"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Kategorie (z. B. Fitness, Yoga)"
          value={form.category}
          onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
          required
        />
        <input
          className="input"
          type="password"
          placeholder="Passwort"
          value={form.password}
          onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
          required
        />

        {error && (
          <p style={{ color: "crimson", fontSize: "0.85rem" }}>{error}</p>
        )}

        <button className="btn-primary" type="submit" disabled={loading}>
          {loading ? "Erstelle Account..." : "Account erstellen"}
        </button>
      </form>
    </section>
  );
}
