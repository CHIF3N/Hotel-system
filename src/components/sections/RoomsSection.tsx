import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { rooms } from '../../data/rooms';
import { RoomCard } from '../ui/RoomCard';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';

export const RoomsSection = () => {
  const featured = rooms.filter(r => r.featured);

  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="Our Rooms"
            title={`Spaces Crafted\nfor Luxury`}
            subtitle="Each room and suite at LODR is a masterpiece of design, offering unique perspectives and personalized experiences."
            align="left"
          />
          <FadeIn direction="left">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-3 border border-[#C9A87C] text-[#C9A87C] px-7 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C9A87C] hover:text-[#0A0A0A] transition-all flex-shrink-0 self-start"
            >
              View All Rooms
              <ArrowRight size={13} />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
