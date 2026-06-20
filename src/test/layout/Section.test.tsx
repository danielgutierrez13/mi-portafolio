import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Section } from '../../components/layout/Section';

describe('Section', () => {
  it('renderiza los hijos', () => {
    render(<Section id="test"><p>contenido</p></Section>);
    expect(screen.getByText('contenido')).toBeInTheDocument();
  });
  it('asigna el id al <section>', () => {
    const { container } = render(<Section id="experiencia"><span /></Section>);
    expect(container.querySelector('section')).toHaveAttribute('id', 'experiencia');
  });
  it('clase base es section', () => {
    const { container } = render(<Section id="s"><span /></Section>);
    expect(container.querySelector('section')).toHaveClass('section');
  });
  it('alt=true agrega section--alt', () => {
    const { container } = render(<Section id="s" alt><span /></Section>);
    expect(container.querySelector('section')).toHaveClass('section--alt');
  });
  it('dark=true usa clase contact en lugar de section', () => {
    const { container } = render(<Section id="contacto" dark><span /></Section>);
    const sec = container.querySelector('section');
    expect(sec).toHaveClass('contact');
    expect(sec).not.toHaveClass('section');
  });
  it('dark=true con alt no agrega section--alt', () => {
    const { container } = render(<Section id="s" dark alt><span /></Section>);
    expect(container.querySelector('section')).not.toHaveClass('section--alt');
  });
});
