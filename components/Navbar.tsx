import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <div className="navbar__logo-pill">CH</div>
          <span className="navbar__logo-text">CreatorHub</span>
        </div>

        <div className="navbar__links">
          <Link href="/" className="navbar__link">
            Home
          </Link>
          <Link href="/signup" className="navbar__link">
            Creator Signup
          </Link>
          <Link href="/dashboard" className="navbar__link">
            Dashboard
          </Link>
        </div>

        <div className="navbar__actions">
          <button className="btn-ghost">Login</button>
        </div>
      </div>
    </nav>
  );
}
