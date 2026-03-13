import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Varian", href: "#varian" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Pesan", href: "#pesan" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-white/70 backdrop-blur-xl border-b border-primary/5 shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tighter text-text-dark group-hover:text-primary transition-colors">
            SAMBEL<span className="text-primary group-hover:text-text-dark transition-colors">GULUDUG</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-text-dark/60 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/6285111031226"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary"
          >
            ORDER NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-dark p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 8h16M4 16h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-primary/5 overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-bold text-text-dark"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/6285111031226"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white font-bold px-8 py-4 rounded-2xl text-center shadow-lg shadow-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ORDER NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
