import { IStory } from "@/typings";
import { useState, useMemo, useEffect } from "react";

export default function useObserveScreen(options: any, targetRef: any) {
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
