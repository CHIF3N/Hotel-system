import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="LODR Pool"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <span className="text-[#C9A87C] text-xs tracking-[0.35em] uppercase">
            Plan Your Stay
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mt-5 leading-tight">
            Ready to Experience
            <br />
            <em className="italic text-[#C9A87C]">LODR</em> ?
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-white/60 text-sm md:text-base leading-8 max-w-xl mx-auto">
            Reserve your room today and begin a journey into the extraordinary. Our team is ready to craft your perfect stay.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-[#C9A87C] text-[#0A0A0A] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#E0CBB0] transition-colors"
            >
              Book Your Stay
              <ArrowRight size={13} />
            </Link>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:border-white hover:bg-white/5 transition-all"
            >
              Browse Rooms
            </Link>
          </div>
        </FadeIn>

        {/* Newsletter */}
        <FadeIn delay={0.4}>
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-white/60 text-sm mb-5">
              Subscribe to exclusive offers and travel inspiration
            </p>
            <form
              onSubmit={e => e.preventDefault()}
              className="flex max-w-md mx-auto gap-0"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/5 border border-white/20 px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C9A87C] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#C9A87C] text-[#0A0A0A] px-6 py-4 text-xs font-bold tracking-wider uppercase hover:bg-[#E0CBB0] transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
