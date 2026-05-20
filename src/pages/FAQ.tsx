import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { FadeIn } from '../components/ui/FadeIn';
import { CTASection } from '../components/sections/CTASection';
import { faqs, faqCategories } from '../data/faqs';

export const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'FAQ — LODR Hotel';
  }, []);

  const filtered = activeCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  return (
    <>
      <PageHero
        title="FAQ"
        subtitle="Everything you need to know about planning your perfect stay at LODR."
        eyebrow="Frequently Asked Questions"
        image="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1920&q=80"
        height="md"
      />

      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Got Questions?"
              title="We Have Answers"
              subtitle="Browse our most frequently asked questions or reach out to our team for personalized assistance."
            />
          </div>

          {/* Category Filter */}
          <FadeIn className="mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              {faqCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setOpenId(null); }}
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

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {filtered.map((faq, i) => (
              <FadeIn key={faq.id} delay={i * 0.05}>
                <div
                  className={`border transition-colors duration-200 ${
                    openId === faq.id ? 'border-[#C9A87C]/40' : 'border-[#282828] hover:border-[#C9A87C]/30'
                  }`}
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left gap-4"
                  >
                    <span className="text-white text-sm font-medium leading-6 pr-4">{faq.question}</span>
                    <span className={`flex-shrink-0 transition-colors ${openId === faq.id ? 'text-[#C9A87C]' : 'text-[#555]'}`}>
                      {openId === faq.id ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-[#A0A0A0] text-sm leading-7">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Contact Prompt */}
          <FadeIn delay={0.3} className="mt-16 text-center p-10 border border-[#282828]">
            <h3 className="font-display text-2xl text-white font-light">
              Didn't find what you were looking for?
            </h3>
            <p className="mt-4 text-[#A0A0A0] text-sm leading-7">
              Our team is always happy to help with any question, no matter how specific. Reach out to us anytime.
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 mt-8 bg-[#C9A87C] text-[#0A0A0A] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#E0CBB0] transition-colors"
            >
              Contact Our Team
            </a>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
};
