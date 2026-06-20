import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Experience } from '../../../components/sections/Experience/Experience';
import { EXPERIENCE } from '../../../data/experience';

vi.mock('../../../components/ui/Icon', () => ({ Icon: () => null }));
vi.mock('../../../hooks/useScrollReveal', () => ({ useScrollReveal: () => ({ current: null }) }));
HTMLDialogElement.prototype.showModal = vi.fn();
HTMLDialogElement.prototype.close = vi.fn();

describe('Experience', () => {
  it('tiene id="experiencia"', () => {
    const { container } = render(<Experience />);
    expect(container.querySelector('#experiencia')).toBeInTheDocument();
  });
  it('renderiza todos los títulos de experiencia', () => {
    render(<Experience />);
    EXPERIENCE.forEach(({ title }) => expect(screen.getByText(title)).toBeInTheDocument());
  });
  it('renderiza "en producción" para items activos', () => {
    render(<Experience />);
    expect(screen.getAllByText(/en producción/i)).toHaveLength(EXPERIENCE.filter((e) => e.active).length);
  });
  it('renderiza "completado" para items inactivos', () => {
    render(<Experience />);
    expect(screen.getAllByText(/completado/i)).toHaveLength(EXPERIENCE.filter((e) => !e.active).length);
  });
  it('muestra botón de certificado solo en items inactivos', () => {
    render(<Experience />);
    expect(screen.getAllByRole('button', { name: /certificado/i })).toHaveLength(EXPERIENCE.filter((e) => !e.active).length);
  });
  it('abre el lightbox al hacer click en el botón de certificado', async () => {
    render(<Experience />);
    const [firstBtn] = screen.getAllByRole('button', { name: /certificado/i });
    await userEvent.click(firstBtn);
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });
});
