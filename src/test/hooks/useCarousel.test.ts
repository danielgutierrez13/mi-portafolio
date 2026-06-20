import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCarousel } from '../../hooks/useCarousel';

const SLIDES = ['a.jpg', 'b.jpg', 'c.jpg'];

describe('useCarousel', () => {
  it('inicia en el índice 0', () => {
    const { result } = renderHook(() => useCarousel(SLIDES));
    expect(result.current.current).toBe(0);
    expect(result.current.count).toBe(3);
  });
  it('go() navega al índice indicado', () => {
    const { result } = renderHook(() => useCarousel(SLIDES));
    act(() => result.current.go(2));
    expect(result.current.current).toBe(2);
  });
  it('next() avanza al siguiente', () => {
    const { result } = renderHook(() => useCarousel(SLIDES));
    act(() => result.current.next());
    expect(result.current.current).toBe(1);
  });
  it('prev() retrocede al anterior', () => {
    const { result } = renderHook(() => useCarousel(SLIDES));
    act(() => result.current.go(1));
    act(() => result.current.prev());
    expect(result.current.current).toBe(0);
  });
  it('next() hace wrap en el último slide', () => {
    const { result } = renderHook(() => useCarousel(SLIDES));
    act(() => result.current.go(2));
    act(() => result.current.next());
    expect(result.current.current).toBe(0);
  });
  it('prev() hace wrap en el primer slide', () => {
    const { result } = renderHook(() => useCarousel(SLIDES));
    act(() => result.current.prev());
    expect(result.current.current).toBe(2);
  });
  it('go() con índice negativo hace wrap correctamente', () => {
    const { result } = renderHook(() => useCarousel(SLIDES));
    act(() => result.current.go(-1));
    expect(result.current.current).toBe(2);
  });
});
