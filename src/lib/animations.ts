
import { useEffect, useRef, useState } from "react";

interface AnimateOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useAnimateOnScroll<T extends HTMLElement = HTMLDivElement>(
  options: AnimateOnScrollOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

export function useStaggeredAnimation(count: number, staggerDelay = 0.1) {
  return Array.from({ length: count }).map((_, i) => ({
    style: { 
      animationDelay: `${i * staggerDelay}s`,
      opacity: 0,
      transform: 'translateY(15px)'
    }
  }));
}

// New hook for image slider transitions
export function useImageSlider(totalImages: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev === totalImages - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };
  
  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev === 0 ? totalImages - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };
  
  const goToImage = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };
  
  return {
    currentIndex,
    isTransitioning,
    nextImage,
    prevImage,
    goToImage
  };
}
