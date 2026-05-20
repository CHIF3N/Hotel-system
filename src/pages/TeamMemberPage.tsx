import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Quote } from 'lucide-react';
import { InstagramIcon, TwitterIcon, LinkedinIcon } from '../components/ui/SocialIcons';
import { getMemberBySlug, team } from '../data/team';
import { FadeIn } from '../components/ui/FadeIn';
import { TeamCard } from '../components/ui/TeamCard';
import { CTASection } from '../components/sections/CTASection';

export const TeamMemberPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = getMemberBySlug(slug || '');

  useEffect(() => {
    if (member) document.title = `${member.name} — LODR Hotel`;
  }, [member]);

  if (!member) return <Navigate to="/our-team" replace />;

  const others = team.filter(m => m.slug !== slug).slice(0, 4);

  const socialIcons = [
    { key: 'twitter', Icon: TwitterIcon },
    { key: 'linkedin', Icon: LinkedinIcon },
    { key: 'instagram', Icon: InstagramIcon },
  ] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={member.image} alt="" className="w-full h-full object-cover blur-3xl scale-110" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <FadeIn>
            <Link
              to="/our-team"
              className="inline-flex items-center gap-2 text-[#707070] text-xs tracking-wider uppercase hover:text-[#C9A87C] transition-colors mb-12"
            >
              <ArrowLeft size={13} />
              Back to Team
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full max-w-md h-[500px] object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-[#C9A87C] p-6 hidden lg:block">
                  <div className="text-[#0A0A0A]">
                    <div className="font-display text-lg font-bold leading-tight">{member.department}</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <span className="text-[#C9A87C] text-xs tracking-[0.3em] uppercase">{member.department}</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="font-display text-5xl md:text-6xl font-light text-white mt-4 leading-tight">
                  {member.name}
                </h1>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-[#C9A87C] text-sm tracking-[0.15em] uppercase mt-2">{member.role}</p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mt-8 border-l-2 border-[#C9A87C] pl-6">
                  <Quote size={20} className="text-[#C9A87C] mb-2" />
                  <blockquote className="font-display text-xl text-white/80 italic font-light leading-8">
                    {member.quote}
                  </blockquote>
                </div>
              </FadeIn>

              {/* Skills */}
              <FadeIn delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-2">
                  {member.skills.map(skill => (
                    <span
                      key={skill}
                      className="border border-[#282828] text-[#A0A0A0] text-xs tracking-wider px-4 py-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </FadeIn>

              {/* Social */}
              <FadeIn delay={0.35}>
                <div className="mt-8 flex gap-3">
                  {socialIcons.map(({ key, Icon }) =>
                    member.social[key] ? (
                      <a
                        key={key}
                        href={member.social[key]}
                        aria-label={key}
                        className="w-10 h-10 border border-[#282828] flex items-center justify-center text-[#707070] hover:border-[#C9A87C] hover:text-[#C9A87C] transition-all"
                      >
                        <Icon size={14} />
                      </a>
                    ) : null
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-[#141414] py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="text-[#C9A87C] text-xs tracking-[0.3em] uppercase">Biography</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl text-white font-light mt-5">About {member.name.split(' ')[0]}</h2>
          </FadeIn>
          <div className="mt-8 flex flex-col gap-5">
            {member.longBio.split('\n\n').map((para, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.08}>
                <p className="text-[#A0A0A0] text-sm leading-8">{para}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl text-white font-light mb-10">Meet the Rest of the Team</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {others.map((m, i) => (
              <TeamCard key={m.id} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
