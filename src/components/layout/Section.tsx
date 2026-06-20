import { type ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  readonly id: string;
  readonly alt?: boolean;
  readonly dark?: boolean;
  readonly children: ReactNode;
  readonly className?: string;
}

export function Section({ id, alt = false, dark = false, children, className = '' }: SectionProps) {
  const cls = [
    dark ? 'contact' : 'section',
    alt && !dark ? 'section--alt' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={cls}>
      <Container>{children}</Container>
    </section>
  );
}
