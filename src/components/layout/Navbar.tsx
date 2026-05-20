import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about-us' },
  {
    label: 'Rooms',
    path: '/rooms',
    sub: [
      { label: 'All Rooms', path: '/rooms' },
      { label: 'Serenity Suite', path: '/rooms/serenity-suite' },
      { label: 'Sunlight Terrace Villa', path: '/rooms/sunlight-terrace-villa' },
      { label: 'Tropical Zen Retreat', path: '/rooms/tropical-zen-retreat' },
      { label: 'LODR Signature', path: '/rooms/lodr-signature' },
      { label: 'Terrace Room', path: '/rooms/terrace-room' },
      { label: 'Deluxe Room', path: '/rooms/deluxe-room' },
    ],
  },
  {
    label: 'Services',
    path: '/our-services',
    sub: [
      { label: 'All Services', path: '/our-services' },
      { label: 'Swimming Pool', path: '/our-services/swimming-pool' },
      { label: 'Fitness Area', path: '/our-services/fitness-area' },
      { label: 'Game Center', path: '/our-services/game-center' },
      { label: 'Spa & Wellness', path: '/our-services/swimming-pool' },
      { label: 'Transfers', path: '/our-services/transfers' },
      { label: 'Parking', path: '/our-services/parking-space' },
    ],
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact-us' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#282828]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-2xl font-bold tracking-[0.3em] text-white hover:text-[#C9A87C] transition-colors flex-shrink-0"
        >
          LODR
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => (
            <li
              key={link.path}
              className="relative"
              onMouseEnter={() => link.sub && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-1 font-body text-xs tracking-[0.15em] uppercase transition-colors duration-200 py-2 ${
                    isActive ? 'text-[#C9A87C]' : 'text-white/75 hover:text-white'
                  }`
                }
              >
                {link.label}
                {link.sub && <ChevronDown size={12} className="opacity-60" />}
              </NavLink>

              {link.sub && (
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-52"
                    >
                      <div className="bg-[#141414] border border-[#282828] py-2">
                        {link.sub.map(sub => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block px-5 py-2.5 text-xs tracking-wider uppercase text-white/70 hover:text-[#C9A87C] hover:bg-[#1E1E1E] transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Book Now CTA */}
        <Link
          to="/contact-us"
          className="hidden lg:inline-flex items-center bg-[#C9A87C] text-[#0A0A0A] px-7 py-3 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#E0CBB0] active:bg-[#A8895A] transition-colors flex-shrink-0"
        >
          Book Now
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#0A0A0A] border-b border-[#282828]"
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {navLinks.map(link => (
                <div key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `block py-3 text-sm tracking-[0.15em] uppercase border-b border-[#1E1E1E] ${
                        isActive ? 'text-[#C9A87C]' : 'text-white/80'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                  {link.sub && (
                    <div className="pl-4 flex flex-col">
                      {link.sub.slice(1).map(sub => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="py-2 text-xs tracking-wider uppercase text-white/50 hover:text-[#C9A87C] transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact-us"
                className="mt-6 bg-[#C9A87C] text-[#0A0A0A] py-4 text-xs font-bold tracking-[0.15em] uppercase text-center"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
