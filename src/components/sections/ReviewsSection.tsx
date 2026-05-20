import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { SectionHeader } from '../ui/SectionHeader';

export const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="bg-[#141414] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            eyebrow="Guest Reviews"
            title="Words from Our Guests"
            subtitle="Real stories from guests who have experienced the LODR difference firsthand."
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-[#C9A87C] fill-[#C9A87C]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed italic">
                "{t.text}"
              </blockquote>

              {/* Author */}
              <div className="mt-10 flex items-center justify-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A87C]/30"
                />
                <div className="text-left">
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-[#707070] text-xs mt-0.5">{t.location} · {t.stayType}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="w-12 h-12 border border-[#282828] flex items-center justify-center text-[#A0A0A0] hover:border-[#C9A87C] hover:text-[#C9A87C] transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 ${
                    i === current
                      ? 'w-7 h-2 bg-[#C9A87C] rounded-sm'
                      : 'w-2 h-2 bg-[#282828] rounded-full hover:bg-[#555]'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 border border-[#282828] flex items-center justify-center text-[#A0A0A0] hover:border-[#C9A87C] hover:text-[#C9A87C] transition-all"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
