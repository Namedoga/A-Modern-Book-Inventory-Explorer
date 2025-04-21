import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <Link href="/">Home Page </Link>
      <Link href="/about">About Page </Link>
      <Link href="/contact">Contact Page </Link>
    </nav>
  );
}

export default Navbar;
