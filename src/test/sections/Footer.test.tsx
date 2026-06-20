import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from '../../components/Footer';

describe('Footer', () => {
  it('renderiza un <footer>', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });
  it('tiene clase site-footer', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toHaveClass('site-footer');
  });
  it('muestra el año actual', () => {
    render(<Footer />);
    expect(screen.getByText(new RegExp(new Date().getFullYear().toString()))).toBeInTheDocument();
  });
  it('incluye el nombre del autor', () => {
    render(<Footer />);
    expect(screen.getByText(/Daniel Gutiérrez/)).toBeInTheDocument();
  });
});
