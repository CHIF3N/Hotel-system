import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { FadeIn } from '../ui/FadeIn';

const highlights = [
  'World-class luxury accommodations',
  'Award-winning culinary experiences',
  'Personalized concierge service',
  'Stunning natural surroundings',
];

export const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <FadeIn direction="right" className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
                alt="LODR Hotel Interior"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-8 -right-8 bg-[#C9A87C] p-8 hidden lg:block">
                <div className="text-[#0A0A0A]">
                  <div className="font-display text-4xl font-bold">25</div>
                  <div className="text-xs tracking-[0.2em] uppercase font-bold mt-1">Years of</div>
                  <div className="text-xs tracking-[0.2em] uppercase font-bold">Excellence</div>
                </div>
              </div>
            </div>

            {/* Secondary image */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -left-6 hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
                alt="Fine dining at LODR"
                className="w-48 h-48 object-cover border-4 border-[#0A0A0A]"
              />
            </motion.div>
          </FadeIn>

          {/* Text Side */}
          <div className="lg:pl-8">
            <FadeIn>
              <span className="text-[#C9A87C] text-xs tracking-[0.3em] uppercase">
                About LODR
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mt-5 leading-tight">
                A Legacy of
                <br />
                <em className="italic text-[#C9A87C]">Unmatched</em>
                <br />
                Hospitality
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 text-[#A0A0A0] text-sm md:text-base leading-8">
                For over two decades, LODR has defined what it means to experience true luxury. Nestled in one of the world's most breathtaking destinations, our hotel is a sanctuary where exceptional service, stunning design, and natural beauty converge to create memories that last a lifetime.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-5 text-[#A0A0A0] text-sm md:text-base leading-8">
                Every detail at LODR has been thoughtfully crafted — from the architecture that harmonizes with its surroundings to the menus that celebrate local flavors with global finesse. We don't just offer accommodation; we offer transformation.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-[#C9A87C]/15 border border-[#C9A87C]/40 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-[#C9A87C]" />
                    </span>
                    <span className="text-[#A0A0A0] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Link
                to="/about-us"
                className="inline-flex items-center gap-3 mt-10 bg-transparent border border-[#C9A87C] text-[#C9A87C] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C9A87C] hover:text-[#0A0A0A] transition-all"
              >
                Discover Our Story
                <ArrowRight size={13} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
