import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Education } from '../../../components/sections/Education/Education';
import { EDUCATION } from '../../../data/education';

vi.mock('../../../components/ui/Icon', () => ({ Icon: () => null }));
vi.mock('../../../hooks/useScrollReveal', () => ({ useScrollReveal: () => ({ current: null }) }));
HTMLDialogElement.prototype.showModal = vi.fn();
HTMLDialogElement.prototype.close = vi.fn();

describe('Education', () => {
  it('tiene id="formacion"', () => {
    const { container } = render(<Education />);
    expect(container.querySelector('#formacion')).toBeInTheDocument();
  });
  it('renderiza todas las instituciones de grados', () => {
    render(<Education />);
    EDUCATION.degrees.forEach(({ institution }) => expect(screen.getByText(institution)).toBeInTheDocument());
  });
  it('renderiza todos los grupos de certificaciones', () => {
    render(<Education />);
    EDUCATION.certGroups.forEach(({ label }) => expect(screen.getByText(label)).toBeInTheDocument());
  });
  it('renderiza todos los nombres de certificados', () => {
    render(<Education />);
    EDUCATION.certGroups.forEach(({ certs }) => {
      certs.forEach(({ name }) => {
        expect(screen.getByRole('button', { name: new RegExp(name, 'i') })).toBeInTheDocument();
      });
    });
  });
  it('abre el lightbox de diploma al hacer click', async () => {
    render(<Education />);
    const [diplomaBtn] = screen.getAllByRole('button', { name: /diploma/i });
    await userEvent.click(diplomaBtn);
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });
  it('abre el lightbox de certificado al hacer click en un cert chip', async () => {
    render(<Education />);
    const certBtn = screen.getByRole('button', { name: new RegExp(EDUCATION.certGroups[0].certs[0].name, 'i') });
    await userEvent.click(certBtn);
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });
});
