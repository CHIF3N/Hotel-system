import { useEffect } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TeamCard } from '../components/ui/TeamCard';
import { CTASection } from '../components/sections/CTASection';
import { team } from '../data/team';

export const OurTeam = () => {
  useEffect(() => {
    document.title = 'Our Team — LODR Hotel';
  }, []);

  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="The passionate professionals who bring LODR's exceptional hospitality vision to life every single day."
        eyebrow="Meet the People"
        image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80"
        height="md"
      />

      {/* Team Grid */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <SectionHeader
              eyebrow="The LODR Family"
              title="Dedicated to Your Excellence"
              subtitle="Our team of world-class hospitality professionals shares one unwavering goal: to make your experience at LODR truly unforgettable."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-[#141414] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C9A87C] text-xs tracking-[0.3em] uppercase">Our Culture</span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white mt-5 leading-tight">
                More Than a Team —
                <br />
                <em className="italic text-[#C9A87C]">A Family</em>
              </h2>
              <p className="mt-8 text-[#A0A0A0] text-sm leading-8">
                At LODR, we believe the guest experience is a direct reflection of our team's wellbeing and passion. We invest deeply in our people — in their development, their happiness, and their sense of belonging.
              </p>
              <p className="mt-5 text-[#A0A0A0] text-sm leading-8">
                Our team members come from over 25 countries, bringing diverse perspectives and rich cultural knowledge to every guest interaction. This diversity is one of our greatest strengths, enabling us to connect authentically with guests from every corner of the world.
              </p>
              <p className="mt-5 text-[#A0A0A0] text-sm leading-8">
                Whether they've been with us for 15 years or 15 days, every member of our team embodies the LODR spirit: genuine warmth, professional excellence, and an unshakeable commitment to exceeding expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80"
                alt="LODR Team"
                className="w-full h-56 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80"
                alt="LODR Team Meeting"
                className="w-full h-56 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=400&q=80"
                alt="LODR Staff"
                className="w-full h-56 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80"
                alt="LODR Culture"
                className="w-full h-56 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
