import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = ({
  value,
  suffix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const startValue = 0;
    const endValue = value;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(startValue + (endValue - startValue) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};
