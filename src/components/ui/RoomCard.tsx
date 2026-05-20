import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Maximize2 } from 'lucide-react';
import type { Room } from '../../data/rooms';

interface RoomCardProps {
  room: Room;
  index?: number;
}

export const RoomCard = ({ room, index = 0 }: RoomCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/rooms/${room.slug}`} className="block group">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Price badge */}
          <div className="absolute top-5 right-5">
            <span className="bg-[#C9A87C] text-[#0A0A0A] px-3 py-1.5 text-xs font-bold tracking-wider">
              From {room.priceDisplay} / night
            </span>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-5 left-5 right-5">
            <h3 className="font-display text-2xl text-white font-light">{room.name}</h3>
            <div className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1.5 text-white/70 text-xs">
                <Maximize2 size={11} />
                {room.size}
              </span>
              <span className="flex items-center gap-1.5 text-white/70 text-xs">
                <Users size={11} />
                Up to {room.capacity} guests
              </span>
            </div>
          </div>
        </div>

        {/* Card body */}
        <div className="bg-[#141414] border border-[#282828] border-t-0 p-6 flex items-center justify-between group-hover:border-[#C9A87C]/30 transition-colors duration-300">
          <p className="text-[#A0A0A0] text-sm leading-6 line-clamp-2 pr-4">{room.tagline}</p>
          <ArrowRight
            size={16}
            className="text-[#C9A87C] flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </Link>
    </motion.div>
  );
};
