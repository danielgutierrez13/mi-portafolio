import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Chip, ChipRow } from '../../components/ui/Chip';

describe('Chip', () => {
  it('renderiza el texto del chip', () => {
    render(<Chip>React</Chip>);
    expect(screen.getByText('React')).toBeInTheDocument();
  });
  it('tiene la clase base chip', () => {
    render(<Chip>Java</Chip>);
    expect(screen.getByText('Java')).toHaveClass('chip');
  });
  it('aplica className adicional', () => {
    render(<Chip className="chip--active">TypeScript</Chip>);
    expect(screen.getByText('TypeScript')).toHaveClass('chip', 'chip--active');
  });
});

describe('ChipRow', () => {
  const chips = ['Angular', 'Spring Boot', 'Oracle'];
  it('renderiza todos los chips', () => {
    render(<ChipRow chips={chips} />);
    chips.forEach((c) => expect(screen.getByText(c)).toBeInTheDocument());
  });
  it('renderiza tantos chips como elementos del array', () => {
    render(<ChipRow chips={chips} />);
    expect(screen.getAllByText(/Angular|Spring Boot|Oracle/).length).toBe(3);
  });
  it('renderiza un div contenedor con clase chip-row', () => {
    const { container } = render(<ChipRow chips={chips} />);
    expect(container.firstChild).toHaveClass('chip-row');
  });
  it('lista vacía no renderiza chips', () => {
    const { container } = render(<ChipRow chips={[]} />);
    expect(container.querySelectorAll('.chip').length).toBe(0);
  });
});
