import { useEffect, useRef } from 'react';

export function useSwipe(onPrev: () => void, onNext: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onStart = (e: TouchEvent) => { startX.current = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      if (startX.current === null) return;
      const delta = e.changedTouches[0].clientX - startX.current;
      startX.current = null;
      if (Math.abs(delta) > 40) { if (delta < 0) onNext(); else onPrev(); }
    };
    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchend', onEnd);
    return () => { el.removeEventListener('touchstart', onStart); el.removeEventListener('touchend', onEnd); };
  }, [onNext, onPrev]);

  return ref;
}
