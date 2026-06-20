import { type ReactNode } from 'react';

interface EyebrowProps {
  readonly children: ReactNode;
}

export function Eyebrow({ children }: EyebrowProps) {
  return <span className="eyebrow">{children}</span>;
}
