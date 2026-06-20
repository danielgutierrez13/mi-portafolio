import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Icon } from '../../components/ui/Icon';

describe('Icon', () => {
  it('renderiza un <svg> con aria-hidden', () => {
    const { container } = render(<Icon id="arrow" />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });
  it('el <use> apunta a #icon-{id}', () => {
    const { container } = render(<Icon id="mail" />);
    expect(container.querySelector('use')).toHaveAttribute('href', '#icon-mail');
  });
  it('aplica la clase base icon', () => {
    const { container } = render(<Icon id="close" />);
    expect(container.querySelector('svg')).toHaveClass('icon');
  });
  it('aplica className adicional', () => {
    const { container } = render(<Icon id="sun" className="icon-sun" />);
    expect(container.querySelector('svg')).toHaveClass('icon', 'icon-sun');
  });
});
