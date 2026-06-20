import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Contact } from '../../../components/sections/Contact/Contact';
import { CONTACT } from '../../../data/contact';

vi.mock('../../../hooks/useScrollReveal', () => ({ useScrollReveal: () => ({ current: null }) }));
vi.mock('../../../components/ui/Button', () => ({
  Button: ({ children, href }: { children: React.ReactNode; href?: string }) => <a href={href}>{children}</a>,
}));

describe('Contact', () => {
  it('tiene id="contacto"', () => {
    const { container } = render(<Contact />);
    expect(container.querySelector('#contacto')).toBeInTheDocument();
  });
  it('muestra el nombre en la terminal', () => {
    render(<Contact />);
    expect(screen.getByText(new RegExp(CONTACT.name))).toBeInTheDocument();
  });
  it('el enlace de email tiene href mailto:', () => {
    render(<Contact />);
    const mailLinks = screen.getAllByRole('link', { name: CONTACT.email });
    expect(mailLinks[0]).toHaveAttribute('href', `mailto:${CONTACT.email}`);
  });
  it('el botón de correo apunta a mailto:', () => {
    render(<Contact />);
    expect(screen.getByRole('link', { name: /correo/i })).toHaveAttribute('href', `mailto:${CONTACT.email}`);
  });
  it('el botón de teléfono apunta a tel:', () => {
    render(<Contact />);
    expect(screen.getByRole('link', { name: /llamar/i })).toHaveAttribute('href', `tel:${CONTACT.phoneHref}`);
  });
  it('muestra la ubicación', () => {
    render(<Contact />);
    expect(screen.getByText(new RegExp(CONTACT.location))).toBeInTheDocument();
  });
});
