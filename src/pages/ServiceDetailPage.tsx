import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Check } from 'lucide-react';
import { getServiceBySlug, services } from '../data/services';
import { FadeIn } from '../components/ui/FadeIn';
import { ServiceCard } from '../components/ui/ServiceCard';
import { CTASection } from '../components/sections/CTASection';

export const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || '');

  useEffect(() => {
    if (service) document.title = `${service.name} — LODR Hotel`;
  }, [service]);

  if (!service) return <Navigate to="/our-services" replace />;

  const others = services.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <Link
            to="/our-services"
            className="inline-flex items-center gap-2 text-white/50 text-xs tracking-wider uppercase hover:text-[#C9A87C] transition-colors mb-6"
          >
            <ArrowLeft size={12} />
            All Services
          </Link>
          <div className="flex items-end gap-6">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <span className="text-[#C9A87C] text-xs tracking-[0.3em] uppercase">{service.hours}</span>
              <h1 className="font-display text-5xl md:text-6xl font-light text-white leading-tight mt-2">
                {service.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="text-[#C9A87C] text-sm font-medium leading-7">{service.tagline}</p>
              </FadeIn>
              <div className="mt-6 flex flex-col gap-5">
                {service.longDescription.split('\n\n').map((para, i) => (
                  <FadeIn key={i} delay={0.05 + i * 0.08}>
                    <p className="text-[#A0A0A0] text-sm leading-8">{para}</p>
                  </FadeIn>
                ))}
              </div>

              {/* Gallery */}
              <FadeIn delay={0.3} className="mt-12">
                <div className="grid grid-cols-2 gap-3">
                  {service.gallery.map((img, i) => (
                    <div key={i} className="overflow-hidden aspect-[4/3]">
                      <img
                        src={img}
                        alt={`${service.name} ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn>
                <div className="border border-[#282828] p-7 sticky top-28">
                  <h3 className="font-display text-xl text-white font-light mb-6">Service Details</h3>

                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#1E1E1E]">
                    <Clock size={14} className="text-[#C9A87C]" />
                    <span className="text-[#A0A0A0] text-sm">{service.hours}</span>
                  </div>

                  <h4 className="text-[#555] text-xs tracking-[0.2em] uppercase mb-4">Included Features</h4>
                  <ul className="flex flex-col gap-3 mb-8">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-3">
                        <span className="w-4 h-4 bg-[#C9A87C]/15 flex items-center justify-center flex-shrink-0">
                          <Check size={9} className="text-[#C9A87C]" />
                        </span>
                        <span className="text-[#A0A0A0] text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact-us"
                    className="block w-full bg-[#C9A87C] text-[#0A0A0A] py-4 text-xs font-bold tracking-[0.2em] uppercase text-center hover:bg-[#E0CBB0] transition-colors"
                  >
                    Enquire Now
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-[#141414] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl text-white font-light mb-10">Other Services</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
