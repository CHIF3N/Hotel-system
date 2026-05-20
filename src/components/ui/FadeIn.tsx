import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  duration?: number;
}

export const FadeIn = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.75,
}: FadeInProps) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const initial: Record<string, number> = { opacity: 0 };
  if (direction === 'up') initial.y = 40;
  if (direction === 'down') initial.y = -40;
  if (direction === 'left') initial.x = 40;
  if (direction === 'right') initial.x = -40;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
