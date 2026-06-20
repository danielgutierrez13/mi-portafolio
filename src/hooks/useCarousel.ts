import { useState, useCallback } from 'react';

export interface UseCarouselReturn {
  readonly current: number;
  readonly go: (index: number) => void;
  readonly prev: () => void;
  readonly next: () => void;
  readonly count: number;
}

export function useCarousel(slides: string[]): UseCarouselReturn {
  const [current, setCurrent] = useState(0);
  const count = slides.length;

  const go = useCallback(
    (index: number) => setCurrent(((index % count) + count) % count),
    [count]
  );

  const prev = useCallback(() => go(current - 1), [current, go]);
  const next = useCallback(() => go(current + 1), [current, go]);

  return { current, go, prev, next, count };
}
