import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { getPostBySlug, blogPosts } from '../data/blog';
import { FadeIn } from '../components/ui/FadeIn';
import { BlogCard } from '../components/ui/BlogCard';
import { CTASection } from '../components/sections/CTASection';

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');

  useEffect(() => {
    if (post) document.title = `${post.title} — LODR Journal`;
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);
  const others = related.length >= 3 ? related : [
    ...related,
    ...blogPosts.filter(p => p.slug !== slug && !related.includes(p)).slice(0, 3 - related.length),
  ];

  return (
    <>
      {/* Article Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/50 text-xs tracking-wider uppercase hover:text-[#C9A87C] transition-colors mb-6"
          >
            <ArrowLeft size={12} />
            All Articles
          </Link>
          <span className="inline-block bg-[#C9A87C] text-[#0A0A0A] px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-4">
            {post.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-[#0A0A0A] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Meta */}
          <FadeIn>
            <div className="flex flex-wrap items-center gap-6 mb-12 pb-8 border-b border-[#1E1E1E]">
              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#282828]"
                />
                <div>
                  <div className="text-white text-sm">{post.author}</div>
                  <div className="text-[#707070] text-xs">{post.authorRole}</div>
                </div>
              </div>

              <div className="flex items-center gap-5 text-[#555] text-xs">
                <span className="flex items-center gap-1.5">
                  <Calendar size={11} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={11} />
                  {post.readTime} min read
                </span>
                <span className="flex items-center gap-1.5">
                  <Tag size={11} />
                  {post.tags.join(', ')}
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Excerpt */}
          <FadeIn delay={0.1}>
            <p className="font-display text-xl md:text-2xl text-[#C9A87C] italic font-light leading-9 mb-10">
              {post.excerpt}
            </p>
          </FadeIn>

          {/* Content */}
          <div className="flex flex-col gap-5">
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <FadeIn key={i} delay={0.05 * i}>
                    <h2 className="font-display text-3xl text-white font-light mt-6 mb-2">
                      {block.replace('## ', '')}
                    </h2>
                  </FadeIn>
                );
              }
              return (
                <FadeIn key={i} delay={0.05 * i}>
                  <p className="text-[#A0A0A0] text-sm leading-8">{block}</p>
                </FadeIn>
              );
            })}
          </div>

          {/* Tags */}
          <FadeIn delay={0.2} className="mt-12 pt-8 border-t border-[#1E1E1E]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="border border-[#282828] text-[#707070] text-xs px-4 py-2">
                  #{tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Articles */}
      {others.length > 0 && (
        <section className="bg-[#141414] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-display text-3xl text-white font-light mb-10">Related Articles</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((p, i) => (
                <BlogCard key={p.id} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
};
