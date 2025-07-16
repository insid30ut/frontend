import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link href="/">Mycelial Funguy</Link>
      </div>
      <Navigation />
    </div>
  </header>
);

export default Header;