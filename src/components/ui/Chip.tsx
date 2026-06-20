import { type ReactNode } from 'react';

interface ChipProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function Chip({ children, className = '' }: ChipProps) {
  return <span className={`chip ${className}`.trim()}>{children}</span>;
}

interface ChipRowProps {
  readonly chips: string[];
  readonly className?: string;
}

export function ChipRow({ chips, className = '' }: ChipRowProps) {
  return (
    <div className={`chip-row ${className}`.trim()}>
      {chips.map((chip) => (
        <Chip key={chip}>{chip}</Chip>
      ))}
    </div>
  );
}
