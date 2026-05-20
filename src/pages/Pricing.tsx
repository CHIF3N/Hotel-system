import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { FadeIn } from '../components/ui/FadeIn';
import { CTASection } from '../components/sections/CTASection';
import { pricingPlans, seasonalRates } from '../data/pricing';

export const Pricing = () => {
  useEffect(() => {
    document.title = 'Pricing — LODR Hotel';
  }, []);

  return (
    <>
      <PageHero
        title="Pricing"
        subtitle="Transparent, flexible pricing designed to deliver exceptional value at every level."
        eyebrow="Our Packages"
        image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80"
        height="md"
      />

      {/* Pricing Plans */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <SectionHeader
              eyebrow="Our Packages"
              title="Choose Your Experience"
              subtitle="Three thoughtfully designed packages, each delivering exceptional value and a unique level of personalization."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <FadeIn key={plan.id} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col border transition-all duration-300 ${
                    plan.featured
                      ? 'border-[#C9A87C] bg-[#141414]'
                      : 'border-[#282828] bg-[#141414] hover:border-[#C9A87C]/40'
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#C9A87C] text-[#0A0A0A] px-5 py-1.5 text-xs font-bold tracking-[0.15em] uppercase whitespace-nowrap">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className={`p-8 border-b ${plan.featured ? 'border-[#C9A87C]/30 bg-[#C9A87C]/5' : 'border-[#282828]'}`}>
                    <h3 className="font-display text-2xl text-white font-light">{plan.name}</h3>
                    <p className="text-[#707070] text-sm mt-1">{plan.tagline}</p>
                    <div className="mt-6">
                      <span className="font-display text-5xl text-white font-light">
                        ${plan.price}
                      </span>
                      <span className="text-[#707070] text-sm ml-2">/{plan.priceNote}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-8 flex-1">
                    <ul className="flex flex-col gap-4">
                      {plan.features.map(feature => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="w-4 h-4 bg-[#C9A87C]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={10} className="text-[#C9A87C]" />
                          </span>
                          <span className="text-[#A0A0A0] text-sm leading-5">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="p-8 pt-0">
                    <Link
                      to="/contact-us"
                      className={`flex items-center justify-center gap-3 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all ${
                        plan.featured
                          ? 'bg-[#C9A87C] text-[#0A0A0A] hover:bg-[#E0CBB0]'
                          : 'border border-[#C9A87C] text-[#C9A87C] hover:bg-[#C9A87C] hover:text-[#0A0A0A]'
                      }`}
                    >
                      {plan.ctaText}
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Rates */}
      <section className="bg-[#141414] py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Seasonal Pricing"
            title="Plan Your Visit"
            subtitle="Rates vary by season. Book during low season for the best value, or embrace peak season for the most vibrant atmosphere."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#282828]">
                  <th className="text-left py-4 px-5 text-[#C9A87C] text-xs tracking-[0.2em] uppercase">Season</th>
                  <th className="text-left py-4 px-5 text-[#C9A87C] text-xs tracking-[0.2em] uppercase">Period</th>
                  <th className="text-left py-4 px-5 text-[#C9A87C] text-xs tracking-[0.2em] uppercase">Rate Modifier</th>
                </tr>
              </thead>
              <tbody>
                {seasonalRates.map((rate, i) => (
                  <FadeIn key={rate.season} delay={i * 0.1}>
                    <tr className="border-b border-[#1E1E1E] hover:bg-[#1E1E1E] transition-colors">
                      <td className="py-5 px-5">
                        <span className="text-white font-medium text-sm">{rate.season}</span>
                      </td>
                      <td className="py-5 px-5">
                        <span className="text-[#A0A0A0] text-sm">{rate.period}</span>
                      </td>
                      <td className="py-5 px-5">
                        <span className={`text-sm font-medium ${rate.modifier === 0 ? 'text-[#A0A0A0]' : 'text-[#C9A87C]'}`}>
                          {rate.label}
                        </span>
                      </td>
                    </tr>
                  </FadeIn>
                ))}
              </tbody>
            </table>
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-8 text-[#555] text-xs leading-6">
              * All rates are subject to availability. Prices shown are per night in USD and exclude applicable taxes and service charges. Contact our reservations team for group bookings and special rates.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
};
