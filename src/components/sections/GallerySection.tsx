import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { galleryImages } from '../../data/gallery';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';
import { motion } from 'framer-motion';

export const GallerySection = () => {
  const preview = galleryImages.slice(0, 8);

  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            eyebrow="Photo Gallery"
            title="Glimpses of Paradise"
            subtitle="Each image tells a story of beauty, comfort, and the extraordinary experiences awaiting you at LODR."
          />
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative overflow-hidden group cursor-pointer ${
                i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''
              }`}
              style={{ aspectRatio: (i === 0 || i === 5) ? '16/9' : '1/1' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs tracking-[0.2em] uppercase border border-white/60 px-4 py-2">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 border border-[#C9A87C] text-[#C9A87C] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C9A87C] hover:text-[#0A0A0A] transition-all"
          >
            View Full Gallery
            <ArrowRight size={13} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};
