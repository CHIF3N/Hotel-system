import { stats } from '../../data/stats';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { FadeIn } from '../ui/FadeIn';

export const StatsSection = () => {
  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <FadeIn key={stat.id} delay={i * 0.1}>
              <div className={`p-8 lg:p-12 border-[#1E1E1E] ${
                i < stats.length - 1 ? 'border-r' : ''
              } ${i < 2 ? 'border-b lg:border-b-0' : ''} text-center`}>
                <div className="font-display text-5xl lg:text-6xl font-light text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-3 text-[#C9A87C] text-xs tracking-[0.2em] uppercase">
                  {stat.label}
                </div>
                <p className="mt-3 text-[#555] text-xs leading-5 max-w-[160px] mx-auto">
                  {stat.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
