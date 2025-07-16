import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* === CORRECTED CODE HERE === */}
      <Link href="/" className="text-lg font-bold">
        Mycelial Funguy
      </Link>
      <Navigation />
    </div>
  </header>
);

export default Header;