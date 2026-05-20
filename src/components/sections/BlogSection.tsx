import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blog';
import { BlogCard } from '../ui/BlogCard';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';

export const BlogSection = () => {
  const recent = blogPosts.slice(0, 3);

  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="Journal & Insights"
            title="From Our Blog"
            subtitle="Travel inspiration, hospitality insights, and stories from the heart of LODR."
            align="left"
          />
          <FadeIn direction="left">
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 border border-[#C9A87C] text-[#C9A87C] px-7 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C9A87C] hover:text-[#0A0A0A] transition-all flex-shrink-0 self-start"
            >
              All Articles
              <ArrowRight size={13} />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recent.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
