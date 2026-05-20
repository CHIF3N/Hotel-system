import { useEffect, useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { RoomCard } from '../components/ui/RoomCard';
import { CTASection } from '../components/sections/CTASection';
import { FadeIn } from '../components/ui/FadeIn';
import { rooms } from '../data/rooms';

export const Rooms = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  useEffect(() => {
    document.title = 'Our Rooms — LODR Hotel';
  }, []);

  const filtered = filter === 'featured' ? rooms.filter(r => r.featured) : rooms;

  return (
    <>
      <PageHero
        title="Our Rooms"
        subtitle="Six distinct accommodations, each offering a unique perspective on luxury and comfort."
        eyebrow="Accommodations"
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80"
        height="md"
      />

      {/* Rooms */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 gap-8">
            <SectionHeader
              eyebrow="All Accommodations"
              title="Find Your Perfect Space"
              subtitle="From our intimate Deluxe Rooms to the extravagant LODR Signature suite, every space is a masterpiece."
            />

            {/* Filter */}
            <FadeIn>
              <div className="flex gap-2">
                {(['all', 'featured'] as const).map(f => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase transition-all ${
                      filter === f
                        ? 'bg-[#C9A87C] text-[#0A0A0A]'
                        : 'border border-[#282828] text-[#A0A0A0] hover:border-[#C9A87C] hover:text-[#C9A87C]'
                    }`}
                  >
                    {f === 'all' ? 'All Rooms' : 'Featured'}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="bg-[#141414] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Included In Every Room"
            title="Standard of Excellence"
            subtitle="Every room at LODR includes a curated set of amenities that elevate your stay."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '📶', label: 'High-Speed Wi-Fi' },
              { icon: '🛁', label: 'Premium Bath' },
              { icon: '📺', label: 'Smart TV' },
              { icon: '❄️', label: 'Climate Control' },
              { icon: '☕', label: 'Minibar' },
              { icon: '🛎️', label: 'Room Service' },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.07}>
                <div className="text-center p-6 border border-[#282828] hover:border-[#C9A87C]/40 transition-colors">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-[#A0A0A0] text-xs leading-5">{item.label}</div>
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
