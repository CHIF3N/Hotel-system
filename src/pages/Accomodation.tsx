import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, Users } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { RoomCard } from '../components/ui/RoomCard';
import { FadeIn } from '../components/ui/FadeIn';
import { CTASection } from '../components/sections/CTASection';
import { rooms } from '../data/rooms';

const highlights = [
  {
    icon: <Star size={18} className="text-[#C9A87C]" />,
    title: 'Award-Winning Comfort',
    description: 'All rooms have been recognized by leading luxury travel publications for their exceptional design and comfort.',
  },
  {
    icon: <MapPin size={18} className="text-[#C9A87C]" />,
    title: 'Perfect Location',
    description: 'Nestled in a prime location with easy access to local attractions, beaches, and cultural sites.',
  },
  {
    icon: <Users size={18} className="text-[#C9A87C]" />,
    title: 'Personalized Service',
    description: 'Each accommodation comes with dedicated room service and personal attention from our expert team.',
  },
];

export const Accomodation = () => {
  useEffect(() => {
    document.title = 'Accommodation — LODR Hotel';
  }, []);

  return (
    <>
      <PageHero
        title="Accommodation"
        subtitle="Discover spaces where luxury and comfort are woven into every detail, every texture, every view."
        eyebrow="Where You Stay"
        image="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80"
        height="md"
      />

      {/* Intro */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <FadeIn>
                <span className="text-[#C9A87C] text-xs tracking-[0.3em] uppercase">
                  Your Home Away from Home
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-display text-4xl md:text-5xl font-light text-white mt-5 leading-tight">
                  Spaces That Tell
                  <br />
                  <em className="italic text-[#C9A87C]">Your Story</em>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-8 text-[#A0A0A0] text-sm leading-8">
                  At LODR, accommodation is far more than a place to sleep. Each space has been designed as a stage for personal transformation — where travelers arrive as guests and leave as lifelong friends of the LODR family.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="mt-5 text-[#A0A0A0] text-sm leading-8">
                  From the moment you enter your room, you will sense the difference. The carefully selected materials, the thoughtful layout, the quality of the linens, the precision of the lighting — every element is intentional, every detail is a gift.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link
                  to="/rooms"
                  className="inline-flex items-center gap-3 mt-10 border border-[#C9A87C] text-[#C9A87C] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C9A87C] hover:text-[#0A0A0A] transition-all"
                >
                  Browse All Rooms
                  <ArrowRight size={13} />
                </Link>
              </FadeIn>
            </div>

            <FadeIn direction="left">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80"
                  alt="Luxury room"
                  className="w-full h-60 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80"
                  alt="Terrace view"
                  className="w-full h-60 object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&q=80"
                  alt="Zen retreat"
                  className="w-full h-60 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&q=80"
                  alt="Terrace room"
                  className="w-full h-60 object-cover mt-8"
                />
              </div>
            </FadeIn>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {highlights.map((h, i) => (
              <FadeIn key={h.title} delay={i * 0.1}>
                <div className="p-8 border border-[#282828] hover:border-[#C9A87C]/40 transition-colors">
                  <div className="mb-4">{h.icon}</div>
                  <h3 className="font-display text-xl text-white font-light">{h.title}</h3>
                  <p className="mt-3 text-[#707070] text-sm leading-6">{h.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Rooms Grid */}
          <SectionHeader
            eyebrow="All Accommodations"
            title="Choose Your Sanctuary"
            subtitle="Explore all six of our distinct accommodation options, each offering a unique experience."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
