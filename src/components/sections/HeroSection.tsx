import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=90"
          alt="LODR Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-block text-[#C9A87C] text-xs tracking-[0.4em] uppercase mb-6"
        >
          Welcome to LODR Hotel
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white leading-none tracking-tight"
        >
          Experience
          <br />
          <em className="italic text-[#C9A87C]">Luxury</em>
          <br />
          Like Never Before
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 text-white/70 text-base md:text-lg leading-8 max-w-xl mx-auto"
        >
          Nestled in paradise, LODR offers an unparalleled sanctuary where every detail is crafted for your absolute pleasure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/rooms"
            className="inline-flex items-center gap-3 bg-[#C9A87C] text-[#0A0A0A] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#E0CBB0] transition-colors"
          >
            Explore Rooms
            <ArrowRight size={14} />
          </Link>
          <Link
            to="/about-us"
            className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:border-white hover:bg-white/5 transition-all"
          >
            Discover More
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
};
