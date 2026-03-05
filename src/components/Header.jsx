import { useState } from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Browse Books", href: "/browse-books" },
    { label: "Add Book", href: "/add-book" },
  ];

  return (
    <nav className="bg-amber-950 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center gap-2">
           
            <span className="text-amber-400 font-serif text-2xl font-bold tracking-wide">
              My<span className="text-amber-200">Library</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="relative text-amber-100 hover:text-amber-400 font-medium px-4 py-2 rounded-md text-sm tracking-wide transition-all duration-200 hover:bg-amber-900 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </Link>
            ))}

           
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-amber-300 hover:text-amber-400 focus:outline-none p-2 rounded-md transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-amber-900 border-t border-amber-800 px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-amber-100 hover:text-amber-400 hover:bg-amber-800 px-4 py-2.5 rounded-md text-sm font-medium tracking-wide transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}

         
        </div>
      )}
    </nav>
  );
};

export default Navbar;