import { useState, useMemo, useEffect } from "react";
import { MutableRefObject } from "react";


interface IntersectionObserverInit {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export default function useObserveScreen(options: IntersectionObserverInit, targetRef: MutableRefObject<null | HTMLDivElement>) {
  const [isVisible, setIsVisible] = useState();

  const callbackFunction = (stories: any) => {
    const [story] = stories;
    setIsVisible(story.isIntersecting);
  };

  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);

  return isVisible;
}
