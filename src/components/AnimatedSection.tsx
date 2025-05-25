import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type AnimationType = 
  | 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight'
  | 'slideInUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight'
  | 'scaleIn' | 'scaleInUp' | 'rotateIn' | 'bounceIn' | 'zoomIn'
  | 'flipInX' | 'flipInY' | 'rollIn' | 'lightSpeedIn' | 'slideInBounce' | 'heartBeat';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce,
  });

  const animationClass = `animate-${animation}`;
  const visibilityClass = isIntersecting ? 'opacity-100' : 'opacity-0';

  return (
    <div
      ref={elementRef}
      className={`${className} ${visibilityClass} ${isIntersecting ? animationClass : ''}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  );
};
