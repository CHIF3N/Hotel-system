import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image: string;
  height?: 'sm' | 'md' | 'lg';
}

const heightMap = {
  sm: 'h-64 md:h-80',
  md: 'h-80 md:h-[480px]',
  lg: 'h-screen md:h-[560px]',
};

export const PageHero = ({
  title,
  subtitle,
  eyebrow,
  image,
  height = 'md',
}: PageHeroProps) => {
  return (
    <section className={`relative ${heightMap[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-[#C9A87C] text-xs tracking-[0.35em] uppercase mb-5"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-white/75 text-base md:text-lg leading-7 max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
};
