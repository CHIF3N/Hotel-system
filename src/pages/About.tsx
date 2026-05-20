import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { FadeIn } from '../components/ui/FadeIn';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { StatsSection } from '../components/sections/StatsSection';
import { CTASection } from '../components/sections/CTASection';

const values = [
  {
    icon: '✦',
    title: 'Uncompromising Excellence',
    description: 'Every detail is considered, every standard is elevated. We refuse to accept anything less than extraordinary.',
  },
  {
    icon: '✦',
    title: 'Genuine Warmth',
    description: 'Our hospitality comes from the heart. We treat every guest as a cherished friend deserving of our very best.',
  },
  {
    icon: '✦',
    title: 'Authentic Connection',
    description: 'We create real human connections, between guests and our team, and between visitors and the destination.',
  },
  {
    icon: '✦',
    title: 'Sustainable Luxury',
    description: 'We believe luxury and responsibility can coexist. Our operations are designed with future generations in mind.',
  },
];

const milestones = [
  { year: '1999', title: 'LODR Founded', description: 'Our founders opened the first 12 rooms with a vision to redefine luxury hospitality.' },
  { year: '2005', title: 'First Major Expansion', description: 'Doubled our capacity and introduced the signature fine dining restaurant.' },
  { year: '2010', title: 'International Recognition', description: 'Received our first major hospitality award, marking our global reputation.' },
  { year: '2015', title: 'Wellness Centre Opens', description: 'Launched the award-winning spa and wellness centre, raising the bar for holistic hospitality.' },
  { year: '2019', title: 'Sustainability Milestone', description: 'Achieved carbon-neutral operations, leading the industry in responsible luxury.' },
  { year: '2024', title: 'The LODR Signature', description: 'Unveiled our most exclusive accommodation — the LODR Signature two-floor residence.' },
];

export const About = () => {
  useEffect(() => {
    document.title = 'About Us — LODR Hotel';
  }, []);

  return (
    <>
      <PageHero
        title="About LODR"
        subtitle="A story of passion, excellence, and unwavering dedication to the art of hospitality."
        eyebrow="Our Story"
        image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
        height="md"
      />

      {/* Our Story */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
                  alt="LODR Hotel"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#C9A87C] p-8">
                  <div className="text-[#0A0A0A] text-center">
                    <div className="font-display text-4xl font-bold">
                      <AnimatedCounter value={25} suffix="+" />
                    </div>
                    <div className="text-xs font-bold tracking-[0.2em] uppercase mt-1">Years</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <span className="text-[#C9A87C] text-xs tracking-[0.3em] uppercase">Our Story</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-display text-4xl md:text-5xl font-light text-white mt-5 leading-tight">
                  Born from a Passion
                  <br />
                  <em className="italic text-[#C9A87C]">for Hospitality</em>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-8 text-[#A0A0A0] text-sm leading-8">
                  LODR was born in 1999 from a dream — to create a place where luxury was not measured by opulence alone, but by the depth of human experience. Our founders believed that a truly exceptional hotel should feel like a second home; familiar, warm, and deeply personal.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="mt-5 text-[#A0A0A0] text-sm leading-8">
                  Over twenty-five years, we have grown, evolved, and refined our craft. Yet our founding spirit remains unchanged: to make every guest feel valued, understood, and genuinely cared for. This commitment to authentic hospitality is what sets LODR apart in a world of increasingly anonymous luxury.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mt-5 text-[#A0A0A0] text-sm leading-8">
                  Today, LODR is celebrated not just as a beautiful place to stay, but as a transformative experience — one that guests return to year after year, and recommend to their most discerning friends with absolute confidence.
                </p>
              </FadeIn>
              <FadeIn delay={0.35}>
                <Link
                  to="/our-team"
                  className="inline-flex items-center gap-3 mt-10 border border-[#C9A87C] text-[#C9A87C] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C9A87C] hover:text-[#0A0A0A] transition-all"
                >
                  Meet Our Team
                  <ArrowRight size={13} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#141414] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="Four principles that guide everything we do at LODR — our compass for exceptional hospitality."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="p-8 lg:p-10 border border-[#282828] hover:border-[#C9A87C]/40 transition-colors duration-300">
                  <span className="text-[#C9A87C] text-lg">{v.icon}</span>
                  <h3 className="font-display text-2xl text-white font-light mt-4">{v.title}</h3>
                  <p className="mt-4 text-[#707070] text-sm leading-7">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="Milestones"
            subtitle="Key moments that have shaped LODR into the destination it is today."
          />
          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-[#282828] transform lg:-translate-x-px" />

            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 0.1}>
                <div className={`relative flex gap-8 lg:gap-0 mb-12 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`lg:w-1/2 pl-8 lg:pl-0 ${i % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'}`}>
                    <span className="text-[#C9A87C] text-xs tracking-[0.3em] uppercase">{m.year}</span>
                    <h3 className="font-display text-xl text-white font-light mt-2">{m.title}</h3>
                    <p className="mt-3 text-[#707070] text-sm leading-6">{m.description}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 lg:left-1/2 top-1 w-3 h-3 bg-[#C9A87C] rounded-full transform lg:-translate-x-1.5 border-2 border-[#0A0A0A]" />

                  {/* Spacer for alternate side */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <CTASection />
    </>
  );
};
