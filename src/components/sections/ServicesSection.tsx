import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';
import { motion } from 'framer-motion';

export const ServicesSection = () => {
  return (
    <section className="bg-[#141414] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            eyebrow="Hotel Services"
            title="Everything You Need"
            subtitle="From our world-class pool to personalized transfers, every service at LODR is designed to exceed expectations."
          />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#282828]">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/our-services/${service.slug}`}
                className="block bg-[#141414] p-8 lg:p-10 group hover:bg-[#1E1E1E] transition-colors duration-300"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="font-display text-2xl text-white font-light group-hover:text-[#C9A87C] transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="mt-3 text-[#707070] text-sm leading-6">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-[#C9A87C] text-xs tracking-wider uppercase">
                  <span>Learn More</span>
                  <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <Link
            to="/our-services"
            className="inline-flex items-center gap-3 border border-[#C9A87C] text-[#C9A87C] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C9A87C] hover:text-[#0A0A0A] transition-all"
          >
            View All Services
            <ArrowRight size={13} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};
