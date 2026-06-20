import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Stack } from '../../../components/sections/Stack/Stack';
import { STACK } from '../../../data/stack';

vi.mock('../../../hooks/useScrollReveal', () => ({ useScrollReveal: () => ({ current: null }) }));

describe('Stack', () => {
  it('tiene id="stack"', () => {
    const { container } = render(<Stack />);
    expect(container.querySelector('#stack')).toBeInTheDocument();
  });
  it('renderiza el heading', () => {
    render(<Stack />);
    expect(screen.getByRole('heading', { name: STACK.heading })).toBeInTheDocument();
  });
  it('renderiza todas las métricas', () => {
    render(<Stack />);
    STACK.metrics.forEach(({ num, label }) => {
      expect(screen.getByText(num)).toBeInTheDocument();
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
  it('renderiza todas las etiquetas de skill groups', () => {
    render(<Stack />);
    STACK.skills.forEach(({ label }) => expect(screen.getByText(label)).toBeInTheDocument());
  });
  it('renderiza chips del primer skill group', () => {
    render(<Stack />);
    STACK.skills[0].chips.forEach((chip) => {
      expect(screen.getAllByText(chip).length).toBeGreaterThan(0);
    });
  });
});
