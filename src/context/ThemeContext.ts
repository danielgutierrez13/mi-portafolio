import { createContext } from 'react';

export interface ThemeContextValue {
  readonly isDark: boolean;
  readonly toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
