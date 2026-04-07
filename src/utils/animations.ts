import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get animation duration based on user preferences
 */
export const getAnimationDuration = (defaultDuration: number): number => {
  return prefersReducedMotion() ? 0.01 : defaultDuration;
};

/**
 * Hook for fade in animation on mount
 */
export const useFadeIn = (duration: number = 0.8, delay: number = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: getAnimationDuration(duration),
        delay,
        ease: 'power2.out',
      }
    );
  }, [duration, delay]);

  return ref;
};

/**
 * Hook for fade in + slide up animation on mount
 */
export const useFadeInUp = (
  duration: number = 0.8,
  delay: number = 0,
  distance: number = 50
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: distance },
      {
        opacity: 1,
        y: 0,
        duration: getAnimationDuration(duration),
        delay,
        ease: 'power2.out',
      }
    );
  }, [duration, delay, distance]);

  return ref;
};

/**
 * Hook for slide in from left animation on scroll
 */
export const useSlideInLeft = (
  duration: number = 0.8,
  distance: number = 100
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, x: -distance },
      {
        opacity: 1,
        x: 0,
        duration: getAnimationDuration(duration),
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [duration, distance]);

  return ref;
};

/**
 * Hook for slide in from right animation on scroll
 */
export const useSlideInRight = (
  duration: number = 0.8,
  distance: number = 100
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, x: distance },
      {
        opacity: 1,
        x: 0,
        duration: getAnimationDuration(duration),
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [duration, distance]);

  return ref;
};

/**
 * Hook for scroll-triggered fade in animation
 */
export const useScrollFadeIn = (duration: number = 0.8) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: getAnimationDuration(duration),
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [duration]);

  return ref;
};

/**
 * Hook for scroll-triggered fade in + slide up animation
 */
export const useScrollFadeInUp = (
  duration: number = 0.8,
  distance: number = 50
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: distance },
      {
        opacity: 1,
        y: 0,
        duration: getAnimationDuration(duration),
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [duration, distance]);

  return ref;
};

/**
 * Hook for staggered children animations
 */
export const useStaggerChildren = (
  staggerDelay: number = 0.1,
  duration: number = 0.8,
  distance: number = 50
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const children = ref.current.children;
    
    gsap.fromTo(
      children,
      { opacity: 0, y: distance },
      {
        opacity: 1,
        y: 0,
        duration: getAnimationDuration(duration),
        stagger: staggerDelay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [staggerDelay, duration, distance]);

  return ref;
};

/**
 * Hook for parallax effect on scroll
 */
export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    gsap.to(ref.current, {
      y: () => -window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [speed]);

  return ref;
};

/**
 * Hook for image scale on scroll
 */
export const useImageScale = (
  scale: number = 1.05,
  duration: number = 0.8
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    gsap.fromTo(
      ref.current,
      { scale: 1 },
      {
        scale,
        duration: getAnimationDuration(duration),
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [scale, duration]);

  return ref;
};

/**
 * Hook for continuous floating animation
 */
export const useFloating = (
  duration: number = 3,
  distance: number = 20
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    gsap.to(ref.current, {
      y: distance,
      duration: getAnimationDuration(duration),
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, [duration, distance]);

  return ref;
};

/**
 * Hook for subtle pulse animation
 */
export const usePulse = (scale: number = 1.05, duration: number = 2) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    gsap.to(ref.current, {
      scale,
      duration: getAnimationDuration(duration),
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, [scale, duration]);

  return ref;
};

/**
 * Hook for reveal animation with line/border
 */
export const useRevealWithBorder = (
  duration: number = 0.8,
  delay: number = 0
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const borderElement = ref.current.querySelector('[data-border]');
    
    if (borderElement) {
      gsap.fromTo(
        borderElement,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: getAnimationDuration(duration),
          delay,
          ease: 'power2.out',
          transformOrigin: 'left',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, [duration, delay]);

  return ref;
};

/**
 * Utility function to animate elements manually
 */
export const animateElement = (
  element: HTMLElement | null,
  animation: gsap.TweenVars
) => {
  if (!element || prefersReducedMotion()) return;
  gsap.to(element, animation);
};

/**
 * Utility function to create a scroll-triggered animation
 */
export const createScrollAnimation = (
  element: HTMLElement | null,
  from: gsap.TweenVars,
  to: gsap.TweenVars
) => {
  if (!element || prefersReducedMotion()) return;
  
  gsap.fromTo(element, from, {
    ...to,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
      ...(to.scrollTrigger || {}),
    },
  });
};
