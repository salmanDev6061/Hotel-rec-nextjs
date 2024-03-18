import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className=" mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Hotel Booking
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-x-4 pl-10">
          <Link href="/rooms" className="text-gray-700 hover:text-gray-900 transition duration-300">
            Rooms
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900 transition duration-300">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
