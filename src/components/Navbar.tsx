import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Event' },
    { href: '/schedule', label: 'Schedule' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-zinc-900/30 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src="images\logo final .png" 
            alt="ENIAC'24"  className="w-12 h-12" />
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-4 py-2 rounded-full bg-zinc-800/30 text-zinc-300 hover:bg-zinc-700/50 hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <button 
              className="md:hidden p-2 rounded-full bg-zinc-800/30 text-zinc-300 hover:bg-zinc-700/50 hover:text-white transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 top-0 h-screen w-64 bg-zinc-900/95 border-l border-zinc-800/50 p-6 shadow-xl">
            <div className="flex flex-col gap-4 mt-16">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-zinc-800/30 text-zinc-300 hover:bg-zinc-700/50 hover:text-white transition flex items-center"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}