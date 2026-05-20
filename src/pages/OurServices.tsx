import { useEffect } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ServiceCard } from '../components/ui/ServiceCard';
import { CTASection } from '../components/sections/CTASection';
import { FadeIn } from '../components/ui/FadeIn';
import { services } from '../data/services';

export const OurServices = () => {
  useEffect(() => {
    document.title = 'Our Services — LODR Hotel';
  }, []);

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Every service at LODR is crafted to elevate your stay from excellent to absolutely extraordinary."
        eyebrow="What We Offer"
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
        height="md"
      />

      {/* Services Grid */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <SectionHeader
              eyebrow="All Services"
              title="Exclusively for You"
              subtitle="From sunrise yoga to midnight room service, every facility at LODR operates with one purpose: your absolute satisfaction."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-[#141414] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
                alt="LODR Spa"
                className="w-full h-[500px] object-cover"
              />
            </FadeIn>
            <div>
              <FadeIn>
                <span className="text-[#C9A87C] text-xs tracking-[0.3em] uppercase">
                  Service Philosophy
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-display text-4xl md:text-5xl font-light text-white mt-5 leading-tight">
                  Service Beyond
                  <br />
                  <em className="italic text-[#C9A87C]">Expectation</em>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-8 text-[#A0A0A0] text-sm leading-8">
                  At LODR, service is not a function — it is an art form. Every member of our team is trained to read the needs of guests before they are expressed, to anticipate desires before they become requests.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="mt-5 text-[#A0A0A0] text-sm leading-8">
                  Our facilities are second to none, but it is the people who operate them who truly make the difference. The warmth of our pool attendant, the expertise of our spa therapist, the knowledge of our concierge team — these are what transform a good facility into an unforgettable experience.
                </p>
              </FadeIn>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { label: 'Services Available', value: '20+' },
                  { label: 'Operating Hours', value: '24/7' },
                  { label: 'Dedicated Staff', value: '80+' },
                ].map(item => (
                  <FadeIn key={item.label} delay={0.3}>
                    <div className="text-center p-5 border border-[#282828]">
                      <div className="font-display text-2xl text-[#C9A87C]">{item.value}</div>
                      <div className="text-[#555] text-xs mt-1">{item.label}</div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
