import { useEffect, useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { BlogCard } from '../components/ui/BlogCard';
import { FadeIn } from '../components/ui/FadeIn';
import { CTASection } from '../components/sections/CTASection';
import { blogPosts } from '../data/blog';

export const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Blog — LODR Hotel';
  }, []);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];
  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Journal"
        subtitle="Insights, inspiration, and stories from the world of luxury travel and hospitality."
        eyebrow="Our Blog"
        image="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1920&q=80"
        height="md"
      />

      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center gap-8">
            <SectionHeader
              eyebrow="Latest Articles"
              title="From Our Journal"
              subtitle="Expert advice, travel inspiration, and behind-the-scenes glimpses into the world of LODR."
            />

            {/* Filter */}
            <FadeIn>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map(cat => (
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
