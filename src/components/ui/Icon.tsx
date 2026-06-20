interface IconProps {
  readonly id: string;
  readonly className?: string;
}

export function Icon({ id, className = '' }: IconProps) {
  return (
    <svg className={`icon ${className}`.trim()} aria-hidden="true">
      <use href={`#icon-${id}`} />
    </svg>
  );
}
