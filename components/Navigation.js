import Link from 'next/link';

const Navigation = () => (
  <nav>
    <ul className="flex space-x-4">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
    </ul>
  </nav>
);

export default Navigation;