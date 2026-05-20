import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import type { BlogPost } from '../../data/blog';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/blog/${post.slug}`} className="block group">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-5 left-5">
            <span className="bg-[#C9A87C] text-[#0A0A0A] px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#141414] border border-[#282828] border-t-0 p-7 group-hover:border-[#C9A87C]/30 transition-colors duration-300">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#555] text-xs">{post.date}</span>
            <span className="w-px h-3 bg-[#282828]" />
            <span className="flex items-center gap-1.5 text-[#555] text-xs">
              <Clock size={11} />
              {post.readTime} min read
            </span>
          </div>

          <h3 className="font-display text-xl text-white font-light leading-snug group-hover:text-[#C9A87C] transition-colors duration-200">
            {post.title}
          </h3>

          <p className="mt-3 text-[#A0A0A0] text-sm leading-6 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-2 text-[#C9A87C] text-xs tracking-wider uppercase">
            <span>Read Article</span>
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
