import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/teks', label: 'Teks & Tips' },
  { href: '/about', label: 'About' },
];

const Navigation = () => {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex items-center space-x-2">
        {navLinks.map(({ href, label }) => {
          const isActive = router.pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg'
                    : 'bg-white/30 text-gray-800 hover:bg-white/50 backdrop-blur-sm'
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;