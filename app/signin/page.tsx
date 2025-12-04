"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.error) {
      setError("Login fehlgeschlagen. Bitte E-Mail/Passwort prüfen.");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <section className="section">
      <h2 className="section__title">Einloggen</h2>
      <p className="section__subtitle">
        Melde dich mit deinem Creator-Account an, um dein Dashboard zu sehen.
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
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input"
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p style={{ color: "crimson", fontSize: "0.85rem" }}>{error}</p>
        )}

        <button className="btn-primary" type="submit" disabled={loading}>
          {loading ? "Einloggen..." : "Einloggen"}
        </button>
      </form>
    </section>
  );
}
