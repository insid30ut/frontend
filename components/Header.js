import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto px-4 py-3">
      <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/hero-mushroom-psychedelic.jpg" // Placeholder logo
              alt="Mycelial Funguy Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-gray-800">Mycelial Funguy</span>
          </Link>
          <Navigation />
        </div>
      </div>
    </div>
  </header>
);

export default Header;