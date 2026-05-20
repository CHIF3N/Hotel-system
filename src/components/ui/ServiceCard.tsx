import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
  index?: number;
  variant?: 'default' | 'compact';
}

export const ServiceCard = ({ service, index = 0, variant = 'default' }: ServiceCardProps) => {
  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
      >
        <Link
          to={`/our-services/${service.slug}`}
          className="flex items-center gap-5 p-5 border border-[#282828] bg-[#141414] hover:border-[#C9A87C]/40 hover:bg-[#1E1E1E] transition-all duration-300 group"
        >
          <span className="text-3xl flex-shrink-0">{service.icon}</span>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg text-white font-light group-hover:text-[#C9A87C] transition-colors">
              {service.name}
            </h3>
            <p className="text-[#707070] text-xs mt-1 line-clamp-1">{service.tagline}</p>
          </div>
          <ArrowRight size={14} className="text-[#555] group-hover:text-[#C9A87C] flex-shrink-0 transition-all group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/our-services/${service.slug}`} className="block group">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-5 left-5 text-4xl">{service.icon}</div>
        </div>

        {/* Body */}
        <div className="bg-[#141414] border border-[#282828] border-t-0 p-6 flex items-start justify-between group-hover:border-[#C9A87C]/30 transition-colors duration-300">
          <div>
            <h3 className="font-display text-xl text-white font-light group-hover:text-[#C9A87C] transition-colors">
              {service.name}
            </h3>
            <p className="text-[#A0A0A0] text-sm mt-2 line-clamp-2 leading-6">{service.description}</p>
          </div>
          <ArrowRight size={14} className="text-[#C9A87C] flex-shrink-0 ml-4 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
};
