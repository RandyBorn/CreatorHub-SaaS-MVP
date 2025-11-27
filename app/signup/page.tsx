// app/signup/page.tsx
"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  category: string;
}

export default function SignupPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    category: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await fetch("/api/creators", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Creator erstellt!");
    setForm({ name: "", email: "", category: "" });
  };

  return (
    <section>
      <h2>Als Creator registrieren</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
        <input
          type="email"
          placeholder="E-Mail"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Kategorie (z. B. Fitness, Yoga)"
          value={form.category}
          onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
        />

        <button type="submit">Account erstellen</button>
      </form>
    </section>
  );
}
