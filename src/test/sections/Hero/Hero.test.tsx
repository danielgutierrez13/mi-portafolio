import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Hero } from '../../../components/sections/Hero/Hero';
import { HERO } from '../../../data/hero';

vi.mock('../../../components/ui/Icon', () => ({ Icon: () => null }));
vi.mock('../../../components/ui/Button', () => ({
  Button: ({ children, href }: { children: React.ReactNode; href?: string }) =>
    href ? <a href={href}>{children}</a> : <button type="button">{children}</button>,
}));
vi.mock('../../../components/sections/Hero/ApiCard', () => ({ ApiCard: () => <div data-testid="api-card" /> }));
vi.mock('../../../hooks/useScrollReveal', () => ({ useScrollReveal: () => ({ current: null }) }));

describe('Hero', () => {
  it('tiene id="inicio" en el <section>', () => {
    const { container } = render(<Hero />);
    expect(container.querySelector('section')).toHaveAttribute('id', 'inicio');
  });
  it('renderiza el eyebrow', () => {
    render(<Hero />);
    expect(screen.getByText(HERO.eyebrow)).toBeInTheDocument();
  });
  it('renderiza el h1 con el nombre', () => {
    render(<Hero />);
    const [firstName] = HERO.name.split('\n');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(firstName);
  });
  it('renderiza el pitch', () => {
    render(<Hero />);
    expect(screen.getByText(HERO.pitch)).toBeInTheDocument();
  });
  it('botón "Hablemos" apunta a #contacto', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /hablemos/i })).toHaveAttribute('href', '#contacto');
  });
  it('botón "Ver experiencia" apunta a #experiencia', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /ver experiencia/i })).toHaveAttribute('href', '#experiencia');
  });
  it('renderiza la ApiCard', () => {
    render(<Hero />);
    expect(screen.getByTestId('api-card')).toBeInTheDocument();
  });
  it('renderiza los items de meta', () => {
    render(<Hero />);
    HERO.meta.forEach(({ text }) => expect(screen.getByText(text)).toBeInTheDocument());
  });
});
