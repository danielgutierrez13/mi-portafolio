import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { About } from '../../../components/sections/About/About';
import { ABOUT } from '../../../data/about';

vi.mock('../../../components/ui/Icon', () => ({ Icon: () => null }));
vi.mock('../../../hooks/useScrollReveal', () => ({ useScrollReveal: () => ({ current: null }) }));

describe('About', () => {
  it('tiene id="sobre-mi"', () => {
    const { container } = render(<About />);
    expect(container.querySelector('#sobre-mi')).toBeInTheDocument();
  });
  it('renderiza el monograma', () => {
    render(<About />);
    expect(screen.getByText(ABOUT.monogram)).toBeInTheDocument();
  });
  it('renderiza todos los labels de facts', () => {
    render(<About />);
    ABOUT.facts.forEach(({ label }) => expect(screen.getByText(label)).toBeInTheDocument());
  });
  it('renderiza todos los idiomas', () => {
    render(<About />);
    ABOUT.languages.forEach(({ name }) => expect(screen.getByText(name)).toBeInTheDocument());
  });
  it('las barras de idioma tienen width correcto', () => {
    const { container } = render(<About />);
    const fills = container.querySelectorAll('.lang-bar__fill');
    ABOUT.languages.forEach(({ pct }, i) => {
      expect((fills[i] as HTMLElement).style.width).toBe(`${pct}%`);
    });
  });
  it('renderiza el eyebrow // sobre-mi', () => {
    render(<About />);
    expect(screen.getByText('// sobre-mi')).toBeInTheDocument();
  });
});
