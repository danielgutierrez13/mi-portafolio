import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionHead } from '../../components/ui/SectionHead';

vi.mock('../../hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}));

describe('SectionHead', () => {
  it('renderiza el eyebrow', () => {
    render(<SectionHead eyebrow="// stack" heading="Stack técnico" />);
    expect(screen.getByText('// stack')).toBeInTheDocument();
  });
  it('renderiza el heading en un <h2>', () => {
    render(<SectionHead eyebrow="e" heading="Experiencia profesional" />);
    expect(screen.getByRole('heading', { level: 2, name: 'Experiencia profesional' })).toBeInTheDocument();
  });
  it('renderiza la descripción cuando se pasa', () => {
    render(<SectionHead eyebrow="e" heading="h" description="Texto descriptivo" />);
    expect(screen.getByText('Texto descriptivo')).toBeInTheDocument();
  });
  it('no renderiza párrafo cuando description es undefined', () => {
    const { container } = render(<SectionHead eyebrow="e" heading="h" />);
    expect(container.querySelector('p')).toBeNull();
  });
  it('el contenedor tiene clases section-head y reveal', () => {
    const { container } = render(<SectionHead eyebrow="e" heading="h" />);
    expect(container.firstChild).toHaveClass('section-head', 'reveal');
  });
});
