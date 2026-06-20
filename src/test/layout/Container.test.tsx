import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Container } from '../../components/layout/Container';

describe('Container', () => {
  it('renderiza los hijos', () => {
    render(<Container><p>Hola</p></Container>);
    expect(screen.getByText('Hola')).toBeInTheDocument();
  });
  it('tiene clase container', () => {
    const { container } = render(<Container>x</Container>);
    expect(container.firstChild).toHaveClass('container');
  });
  it('aplica className adicional', () => {
    const { container } = render(<Container className="hero__grid">x</Container>);
    expect(container.firstChild).toHaveClass('container', 'hero__grid');
  });
});
