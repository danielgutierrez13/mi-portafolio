import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Carousel } from '../../../components/sections/Projects/Carousel';

vi.mock('../../../components/ui/Icon', () => ({ Icon: () => null }));
vi.mock('../../../hooks/useScrollReveal', () => ({ useScrollReveal: () => ({ current: null }) }));

const IMAGES = ['a.jpg', 'b.jpg', 'c.jpg'];

describe('Carousel', () => {
  it('renderiza las imágenes pasadas', () => {
    render(<Carousel images={IMAGES} />);
    expect(screen.getAllByRole('img')).toHaveLength(3);
  });
  it('sin imágenes muestra placeholder', () => {
    render(<Carousel images={[]} />);
    expect(screen.getByText(/pendientes de subir/i)).toBeInTheDocument();
  });
  it('renderiza un dot por imagen', () => {
    render(<Carousel images={IMAGES} />);
    expect(screen.getAllByRole('button', { name: /Ir a captura/i })).toHaveLength(3);
  });
  it('los botones de navegación se muestran con múltiples imágenes', () => {
    render(<Carousel images={IMAGES} />);
    expect(screen.getByRole('button', { name: 'Captura anterior' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Siguiente captura' })).toBeInTheDocument();
  });
  it('no muestra navegación con una sola imagen', () => {
    render(<Carousel images={['solo.jpg']} />);
    expect(screen.queryByRole('button', { name: 'Siguiente captura' })).toBeNull();
  });
  it('el primer dot tiene clase is-active al inicio', () => {
    render(<Carousel images={IMAGES} />);
    const dots = screen.getAllByRole('button', { name: /Ir a captura/i });
    expect(dots[0]).toHaveClass('is-active');
    expect(dots[1]).not.toHaveClass('is-active');
  });
  it('click en dot cambia el slide activo', async () => {
    render(<Carousel images={IMAGES} />);
    const dots = screen.getAllByRole('button', { name: /Ir a captura/i });
    await userEvent.click(dots[1]);
    expect(dots[1]).toHaveClass('is-active');
    expect(dots[0]).not.toHaveClass('is-active');
  });
});
