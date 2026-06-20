import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Nav } from '../../components/Nav';

vi.mock('../../context/useTheme', () => ({
  useTheme: () => ({ isDark: false, toggle: vi.fn() }),
}));
vi.mock('../../components/ui/Icon', () => ({ Icon: () => null }));
vi.mock('../../components/ui/Button', () => ({
  Button: ({ children, href }: { children: React.ReactNode; href?: string }) =>
    href ? <a href={href}>{children}</a> : <button type="button">{children}</button>,
}));

describe('Nav', () => {
  it('renderiza el logo con href="/"', () => {
    render(<Nav />);
    expect(screen.getByRole('link', { name: /daniel/i })).toHaveAttribute('href', '/');
  });
  it('renderiza todos los links de navegación', () => {
    render(<Nav />);
    expect(screen.getByRole('link', { name: 'Sobre mí' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Experiencia' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contacto' })).toBeInTheDocument();
  });
  it('el botón de tema tiene aria-pressed=false en modo claro', () => {
    render(<Nav />);
    expect(screen.getByRole('button', { name: /modo oscuro/i })).toHaveAttribute('aria-pressed', 'false');
  });
  it('el menú móvil empieza cerrado', () => {
    const { container } = render(<Nav />);
    expect(container.querySelector('header')).not.toHaveClass('is-open');
  });
  it('abre el menú al hacer click en el toggle', async () => {
    const { container } = render(<Nav />);
    await userEvent.click(screen.getByRole('button', { name: /abrir menú/i }));
    expect(container.querySelector('header')).toHaveClass('is-open');
  });
  it('cierra el menú al hacer click de nuevo en el toggle', async () => {
    const { container } = render(<Nav />);
    await userEvent.click(screen.getByRole('button', { name: /abrir menú/i }));
    await userEvent.click(screen.getByRole('button', { name: /cerrar menú/i }));
    expect(container.querySelector('header')).not.toHaveClass('is-open');
  });
});
