import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Eyebrow } from '../../components/ui/Eyebrow';

describe('Eyebrow', () => {
  it('renderiza el texto', () => {
    render(<Eyebrow>{'// sobre-mi'}</Eyebrow>);
    expect(screen.getByText('// sobre-mi')).toBeInTheDocument();
  });
  it('usa un <span> con clase eyebrow', () => {
    render(<Eyebrow>etiqueta</Eyebrow>);
    const el = screen.getByText('etiqueta');
    expect(el.tagName).toBe('SPAN');
    expect(el).toHaveClass('eyebrow');
  });
});
