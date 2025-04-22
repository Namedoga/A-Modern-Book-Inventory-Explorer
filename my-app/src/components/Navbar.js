import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand navbar-light bg-light mb-4 shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Book Explorer
        </Link>

        <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
          <li className="nav-item">
            <Link href="/" className={`nav-link ${router.pathname === "/" ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/search" className={`nav-link ${router.pathname === "/search" ? "active" : ""}`}>
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className={`nav-link ${router.pathname === "/about" ? "active" : ""}`}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className={`nav-link ${router.pathname === "/contact" ? "active" : ""}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
