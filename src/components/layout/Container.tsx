import { type ReactNode } from 'react';

interface ContainerProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function Container({ children, className = '' }: Readonly<ContainerProps>) {
  return <div className={`container ${className}`.trim()}>{children}</div>;
}
