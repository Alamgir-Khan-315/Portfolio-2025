import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Education', link: '/education' },
  { name: 'Skills', link: '/skills' },
  { name: 'Projects', link: '/projects' },
];

const HireMeButton = ({ className = '' }) => (
  <Link
    to="/contact"
    className={`inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300 ${className}`}
  >
    Hire Me
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive
      ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md'
      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
    }`;

  const mobileNavLinkClasses = ({ isActive }) =>
    `block text-lg px-4 py-3 rounded-md font-medium transition-all duration-300 ${isActive
      ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
    }`;

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50">
        <div className="w-[90%] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 bg-black/30 backdrop-blur-lg border border-blue-500/30 rounded-full">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 text-2xl font-bold text-white">
              <span className="md:hidden">A<span className="text-purple-400">K</span></span>
              <span className="hidden md:inline">Alamgir<span className="text-purple-400">Khan</span></span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map((item) => (
                <NavLink key={item.name} to={item.link} className={navLinkClasses}>
                  {item.name}
                </NavLink>
              ))}
              <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
              <HireMeButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700/50 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        ></div>
      )}

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-64 bg-[#0f172a] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-5 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-white">Menu</span>
            <button onClick={() => setIsOpen(false)} className="p-1 text-gray-300 hover:text-white">
              <HiX className="h-7 w-7" />
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-y-2">
            {menuItems.map((item) => (
              <NavLink key={item.name} to={item.link} className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>
                {item.name}
              </NavLink>
            ))}
            <NavLink to="/contact" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </div>
          <div className="mt-auto text-center">
            <HireMeButton className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

