import { FadeIn } from './FadeIn';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeaderProps) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const textColor = light ? 'text-[#141414]' : 'text-white';
  const subtitleColor = light ? 'text-[#707070]' : 'text-[#A0A0A0]';

  return (
    <div className={`flex flex-col ${alignClass} gap-4`}>
      {eyebrow && (
        <FadeIn>
          <span className="text-[#C9A87C] text-xs tracking-[0.3em] uppercase font-medium">
            {eyebrow}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight ${textColor}`}>
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.2}>
          <p className={`text-sm md:text-base leading-7 max-w-2xl ${subtitleColor}`}>
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
};
