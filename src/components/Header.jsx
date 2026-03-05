import { useState } from "react";

// Navbar Component for My-Library
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation links array
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Browse Books", href: "/books" },
    { label: "Add Book", href: "/add-book" },
  ];

  return (
    <nav className="bg-amber-950 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo / Brand ── */}
          <div className="flex items-center gap-2">
            {/* Book icon SVG */}
            <svg
              className="w-8 h-8 text-amber-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
              <path d="M6 4h12v2H6zm0 14h12v2H6z" />
              <path d="M4 6h2v12H4zm14 0h2v12h-2z" />
            </svg>
            <span className="text-amber-400 font-serif text-2xl font-bold tracking-wide">
              My<span className="text-amber-200">Library</span>
            </span>
          </div>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-amber-100 hover:text-amber-400 font-medium px-4 py-2 rounded-md text-sm tracking-wide transition-all duration-200 hover:bg-amber-900 group"
              >
                {link.label}
                {/* Underline animation on hover */}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="/add-book"
              className="ml-4 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-amber-400/40 hover:scale-105"
            >
              + Add Book
            </a>
          </div>

          {/* ── Mobile Hamburger Button ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-amber-300 hover:text-amber-400 focus:outline-none p-2 rounded-md transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // Close (X) icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-amber-900 border-t border-amber-800 px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-amber-100 hover:text-amber-400 hover:bg-amber-800 px-4 py-2.5 rounded-md text-sm font-medium tracking-wide transition-all duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile CTA */}
          <div className="pt-2">
            <a
              href="/add-book"
              className="block text-center bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200"
            >
              + Add Book
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;