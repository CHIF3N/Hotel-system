import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { FadeIn } from '../components/ui/FadeIn';
import { CTASection } from '../components/sections/CTASection';
import { galleryImages, galleryCategories } from '../data/gallery';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Gallery — LODR Hotel';
  }, []);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && setLightbox(null);
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A visual journey through the beauty, elegance, and experiences that define LODR."
        eyebrow="Photo Gallery"
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
        height="md"
      />

      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Our Gallery"
              title="Moments Worth Remembering"
              subtitle="Browse through our curated collection of images capturing the essence of the LODR experience."
            />
          </div>

          {/* Category Filter */}
          <FadeIn className="mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              {galleryCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all ${
                    activeCategory === cat
                      ? 'bg-[#C9A87C] text-[#0A0A0A]'
                      : 'border border-[#282828] text-[#A0A0A0] hover:border-[#C9A87C] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="relative overflow-hidden aspect-square group cursor-pointer"
                  onClick={() => setLightbox(img.src.replace('w=800', 'w=1600'))}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn
                      size={20}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs tracking-wider bg-black/60 px-2 py-1">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Gallery"
              className="max-w-full max-h-full object-contain"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
};
