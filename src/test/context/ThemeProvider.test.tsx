import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import { ThemeProvider } from '../../context/ThemeProvider';
import { useTheme } from '../../context/useTheme';

function ThemeConsumer() {
  const { isDark, toggle } = useTheme();
  return (
    <>
      <span data-testid="mode">{isDark ? 'dark' : 'light'}</span>
      <button onClick={toggle}>toggle</button>
    </>
  );
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
});

describe('ThemeProvider', () => {
  it('inicia en modo claro por defecto', () => {
    render(<ThemeProvider><ThemeConsumer /></ThemeProvider>);
    expect(screen.getByTestId('mode').textContent).toBe('light');
  });
  it('inicia en modo oscuro si localStorage tiene "dark"', () => {
    localStorage.setItem('theme', 'dark');
    render(<ThemeProvider><ThemeConsumer /></ThemeProvider>);
    expect(screen.getByTestId('mode').textContent).toBe('dark');
  });
  it('toggle cambia de claro a oscuro', async () => {
    render(<ThemeProvider><ThemeConsumer /></ThemeProvider>);
    await userEvent.click(screen.getByRole('button', { name: 'toggle' }));
    expect(screen.getByTestId('mode').textContent).toBe('dark');
  });
  it('toggle dos veces vuelve al modo claro', async () => {
    render(<ThemeProvider><ThemeConsumer /></ThemeProvider>);
    await userEvent.click(screen.getByRole('button', { name: 'toggle' }));
    await userEvent.click(screen.getByRole('button', { name: 'toggle' }));
    expect(screen.getByTestId('mode').textContent).toBe('light');
  });
  it('persiste el tema en localStorage al hacer toggle', async () => {
    render(<ThemeProvider><ThemeConsumer /></ThemeProvider>);
    await userEvent.click(screen.getByRole('button', { name: 'toggle' }));
    expect(localStorage.getItem('theme')).toBe('dark');
  });
  it('actualiza data-theme en <html> al hacer toggle', async () => {
    render(<ThemeProvider><ThemeConsumer /></ThemeProvider>);
    await userEvent.click(screen.getByRole('button', { name: 'toggle' }));
    expect(document.documentElement.dataset['theme']).toBe('dark');
  });
});
