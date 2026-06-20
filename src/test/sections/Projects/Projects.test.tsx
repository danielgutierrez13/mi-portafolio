import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Projects } from '../../../components/sections/Projects/Projects';
import { PROJECTS } from '../../../data/projects';

vi.mock('../../../components/ui/Icon', () => ({ Icon: () => null }));
vi.mock('../../../hooks/useScrollReveal', () => ({ useScrollReveal: () => ({ current: null }) }));
vi.mock('../../../components/sections/Projects/ProjectLightbox', () => ({
  ProjectLightbox: ({ project, onClose }: { project: { title: string } | null; onClose: () => void }) =>
    project ? <div data-testid="lightbox"><button onClick={onClose}>cerrar</button><span>{project.title}</span></div> : null,
}));

describe('Projects', () => {
  it('tiene id="proyectos"', () => {
    const { container } = render(<Projects />);
    expect(container.querySelector('#proyectos')).toBeInTheDocument();
  });
  it('renderiza todos los títulos de proyectos', () => {
    render(<Projects />);
    PROJECTS.items.forEach(({ title }) => expect(screen.getAllByText(title).length).toBeGreaterThan(0));
  });
  it('el lightbox empieza cerrado', () => {
    render(<Projects />);
    expect(screen.queryByTestId('lightbox')).toBeNull();
  });
  it('abre el lightbox al hacer click en un proyecto', async () => {
    render(<Projects />);
    const [firstBtn] = screen.getAllByRole('button', { name: new RegExp(PROJECTS.items[0].linkLabel, 'i') });
    await userEvent.click(firstBtn);
    expect(screen.getByTestId('lightbox')).toBeInTheDocument();
    expect(screen.getAllByText(PROJECTS.items[0].title).length).toBeGreaterThan(0);
  });
  it('cierra el lightbox al llamar onClose', async () => {
    render(<Projects />);
    const [firstBtn] = screen.getAllByRole('button', { name: new RegExp(PROJECTS.items[0].linkLabel, 'i') });
    await userEvent.click(firstBtn);
    await userEvent.click(screen.getByRole('button', { name: 'cerrar' }));
    expect(screen.queryByTestId('lightbox')).toBeNull();
  });
});
