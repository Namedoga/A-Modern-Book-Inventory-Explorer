import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/">
          <span className="text-white text-xl font-bold cursor-pointer">
            Book Explorer
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/">
              <span className="text-white hover:text-indigo-200 transition-colors cursor-pointer">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-white hover:text-indigo-200 transition-colors cursor-pointer">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-white hover:text-indigo-200 transition-colors cursor-pointer">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
