import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-yellow-600 transition-colors">
            Anand Law LLP
          </Link>

          <div className="flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-yellow-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-yellow-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-yellow-600 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-yellow-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
