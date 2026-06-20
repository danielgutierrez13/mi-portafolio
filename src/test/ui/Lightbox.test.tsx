import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Lightbox } from '../../components/ui/Lightbox';

vi.mock('../../components/ui/Icon', () => ({
  Icon: ({ id }: { id: string }) => <svg data-testid={`icon-${id}`} />,
}));
HTMLDialogElement.prototype.showModal = vi.fn();
HTMLDialogElement.prototype.close = vi.fn();

describe('Lightbox', () => {
  it('renderiza los children cuando isOpen=true', () => {
    render(<Lightbox isOpen onClose={vi.fn()}><p>Contenido</p></Lightbox>);
    expect(screen.getByText('Contenido')).toBeInTheDocument();
  });
  it('el botón cerrar tiene aria-label="Cerrar"', () => {
    render(<Lightbox isOpen onClose={vi.fn()}><span /></Lightbox>);
    expect(screen.getByRole('button', { name: 'Cerrar', hidden: true })).toBeInTheDocument();
  });
  it('onClose se llama al hacer click en el botón cerrar', async () => {
    const onClose = vi.fn();
    render(<Lightbox isOpen onClose={onClose}><span /></Lightbox>);
    await userEvent.click(screen.getByRole('button', { name: 'Cerrar', hidden: true }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  it('llama a showModal cuando isOpen=true', () => {
    render(<Lightbox isOpen onClose={vi.fn()}><span /></Lightbox>);
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });
  it('clase lightbox__panel--wide cuando wide=true', () => {
    const { container } = render(<Lightbox isOpen onClose={vi.fn()} wide><span /></Lightbox>);
    expect(container.querySelector('dialog')).toHaveClass('lightbox__panel--wide');
  });
  it('sin wide no tiene clase lightbox__panel--wide', () => {
    const { container } = render(<Lightbox isOpen onClose={vi.fn()}><span /></Lightbox>);
    expect(container.querySelector('dialog')).not.toHaveClass('lightbox__panel--wide');
  });
  it('aria-labelledby apunta al labelId', () => {
    const { container } = render(<Lightbox isOpen onClose={vi.fn()} labelId="miTitulo"><span /></Lightbox>);
    expect(container.querySelector('dialog')).toHaveAttribute('aria-labelledby', 'miTitulo');
  });
});
