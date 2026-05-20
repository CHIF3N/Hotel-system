import { motion } from 'framer-motion';

const items = [
  'Luxury', 'Comfort', 'Excellence', 'Serenity', 'Elegance',
  'Hospitality', 'Paradise', 'Refinement', 'Exclusivity', 'Wellness',
];

export const MarqueeSection = () => {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="bg-[#C9A87C] py-4 overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="flex items-center gap-0 whitespace-nowrap"
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-[#0A0A0A] text-xs font-bold tracking-[0.3em] uppercase px-6">
              {item}
            </span>
            <span className="text-[#0A0A0A]/40 text-xs">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};
