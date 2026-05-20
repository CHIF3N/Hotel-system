import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { TeamMember } from '../../data/team';

interface TeamCardProps {
  member: TeamMember;
  index?: number;
}

export const TeamCard = ({ member, index = 0 }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/our-team/${member.slug}`} className="block group">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#C9A87C]/0 group-hover:bg-[#C9A87C]/10 transition-all duration-500" />
        </div>

        {/* Info */}
        <div className="bg-[#141414] border border-[#282828] border-t-0 p-5 flex items-end justify-between group-hover:border-[#C9A87C]/30 transition-colors duration-300">
          <div>
            <h3 className="font-display text-lg text-white font-light">{member.name}</h3>
            <p className="text-[#C9A87C] text-xs tracking-wider mt-1">{member.role}</p>
          </div>
          <ArrowRight
            size={14}
            className="text-[#555] group-hover:text-[#C9A87C] transition-all duration-300 group-hover:translate-x-0.5"
          />
        </div>
      </Link>
    </motion.div>
  );
};
