import { type ReactNode, useState, useEffect, useCallback } from 'react';
import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  readonly children: ReactNode;
}

export function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return globalThis.localStorage?.getItem('theme') === 'dark';
    } catch {
      return false; /* localStorage not available (private browsing or SSR) */
    }
  });

  useEffect(() => {
    document.documentElement.dataset['theme'] = isDark ? 'dark' : 'light';
    try {
      globalThis.localStorage?.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // localStorage not available (private browsing or SSR)
    }
  }, [isDark]);

  const toggle = useCallback(() => setIsDark(prev => !prev), []);

  return (
    <ThemeContext value={{ isDark, toggle }}>
      {children}
    </ThemeContext>
  );
}
