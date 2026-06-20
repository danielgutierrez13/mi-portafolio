import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from '../../components/ui/Button';

vi.mock('../../components/ui/Icon', () => ({
  Icon: ({ id }: { id: string }) => <svg data-testid={`icon-${id}`} />,
}));

describe('Button', () => {
  it('renderiza un <button> cuando no se pasa href', () => {
    render(<Button>Enviar</Button>);
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument();
  });
  it('renderiza un <a> cuando se pasa href', () => {
    render(<Button href="#contacto">Contacto</Button>);
    const link = screen.getByRole('link', { name: 'Contacto' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#contacto');
  });
  it('aplica la clase btn--primary por defecto', () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--primary');
  });
  it('aplica la clase btn--ghost cuando variant="ghost"', () => {
    render(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--ghost');
  });
  it('renderiza el icono cuando se pasa prop icon', () => {
    render(<Button icon="arrow">Ir</Button>);
    expect(screen.getByTestId('icon-arrow')).toBeInTheDocument();
  });
  it('no renderiza icono cuando no se pasa prop icon', () => {
    render(<Button>Sin icono</Button>);
    expect(screen.queryByTestId(/icon-/)).toBeNull();
  });
  it('el <button> tiene type="button" para evitar submit accidental', () => {
    render(<Button>OK</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
});
