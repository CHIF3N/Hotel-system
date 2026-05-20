import { useEffect } from 'react';
import { Star } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { FadeIn } from '../components/ui/FadeIn';
import { CTASection } from '../components/sections/CTASection';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { testimonials } from '../data/testimonials';

const ratingBreakdown = [
  { stars: 5, percentage: 91 },
  { stars: 4, percentage: 7 },
  { stars: 3, percentage: 2 },
  { stars: 2, percentage: 0 },
  { stars: 1, percentage: 0 },
];

export const Reviews = () => {
  useEffect(() => {
    document.title = 'Guest Reviews — LODR Hotel';
  }, []);

  return (
    <>
      <PageHero
        title="Guest Reviews"
        subtitle="Authentic stories from the guests who have experienced the LODR difference firsthand."
        eyebrow="What Our Guests Say"
        image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
        height="md"
      />

      {/* Rating Overview */}
      <section className="bg-[#141414] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Overall Score */}
            <FadeIn className="text-center">
              <div className="font-display text-8xl font-light text-[#C9A87C]">
                <AnimatedCounter value={4} suffix=".9" />
              </div>
              <div className="flex justify-center gap-1 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="text-[#C9A87C] fill-[#C9A87C]" />
                ))}
              </div>
              <p className="mt-3 text-[#707070] text-sm">Based on 2,400+ reviews</p>
            </FadeIn>

            {/* Rating Bars */}
            <FadeIn delay={0.1} className="col-span-1 md:col-span-2">
              <div className="flex flex-col gap-4">
                {ratingBreakdown.map((item, i) => (
                  <div key={item.stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-16 flex-shrink-0">
                      <span className="text-[#A0A0A0] text-sm">{item.stars}</span>
                      <Star size={12} className="text-[#C9A87C] fill-[#C9A87C]" />
                    </div>
                    <div className="flex-1 bg-[#282828] h-2">
                      <FadeIn delay={i * 0.06}>
                        <div
                          className="h-full bg-[#C9A87C] transition-all"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </FadeIn>
                    </div>
                    <span className="text-[#A0A0A0] text-sm w-10 text-right">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <SectionHeader
              eyebrow="Guest Stories"
              title="In Their Own Words"
              subtitle="Read how LODR has touched the lives of our guests from around the world."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.08}>
                <div className="p-8 border border-[#282828] hover:border-[#C9A87C]/30 transition-colors duration-300 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} className="text-[#C9A87C] fill-[#C9A87C]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-display text-lg text-white font-light italic leading-7 flex-1">
                    "{t.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="mt-8 flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#282828]"
                    />
                    <div>
                      <div className="text-white text-sm font-medium">{t.name}</div>
                      <div className="text-[#707070] text-xs mt-0.5">{t.location}</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-[#C9A87C] text-xs">{t.stayType}</div>
                      <div className="text-[#555] text-xs mt-0.5">{t.date}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Category Ratings */}
      <section className="bg-[#141414] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Category Ratings"
            title="Rated Across Every Dimension"
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Cleanliness', score: 4.9 },
              { label: 'Service', score: 5.0 },
              { label: 'Location', score: 4.8 },
              { label: 'Facilities', score: 4.9 },
              { label: 'Food & Dining', score: 4.9 },
              { label: 'Value', score: 4.7 },
              { label: 'Comfort', score: 4.9 },
              { label: 'Atmosphere', score: 5.0 },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.07}>
                <div className="text-center p-6 border border-[#282828]">
                  <div className="font-display text-3xl text-[#C9A87C]">{item.score}</div>
                  <div className="flex justify-center mt-2 gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={10}
                        className={j < Math.round(item.score) ? 'text-[#C9A87C] fill-[#C9A87C]' : 'text-[#282828]'}
                      />
                    ))}
                  </div>
                  <div className="text-[#707070] text-xs mt-2">{item.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
