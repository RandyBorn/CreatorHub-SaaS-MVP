// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  const handleLogout = () => {
    signOut({ callbackUrl: "/" }); // nach Logout auf Home leiten
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <div className="navbar__logo-pill">CP</div>
          <span className="navbar__logo-text">CoachPanel</span>
        </div>

        <div className="navbar__links">
          <Link href="/" className="navbar__link">
            Home
          </Link>
          <Link href="/signup" className="navbar__link">
            Coach Signup
          </Link>
          <Link href="/dashboard" className="navbar__link">
            Dashboard
          </Link>
        </div>

        <div
          className="navbar__actions"
          style={{ display: "flex", gap: "0.5rem" }}
        >
          {status === "authenticated" ? (
            <>
              <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                {session?.user?.email}
              </span>
              <button className="btn-ghost" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link href="/signin">
              <button className="btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
