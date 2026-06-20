import { type ReactNode, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { Icon } from './Icon';

type ButtonVariant = 'primary' | 'ghost' | 'light';

interface BaseProps {
  readonly variant?: ButtonVariant;
  readonly icon?: string;
  readonly className?: string;
  readonly children: ReactNode;
}

type AnchorProps = BaseProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | 'href'>;
type ButtonProps = BaseProps & { href?: never } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

type Props = AnchorProps | ButtonProps;

export function Button({ variant = 'primary', href, icon, className = '', children, ...rest }: Props) {
  const cls = `btn btn--${variant} ${className}`.trim();

  if (href !== undefined) {
    const { ...anchorRest } = rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>;
    return (
      <a href={href} className={cls} {...anchorRest}>
        {children}
        {icon && <Icon id={icon} />}
      </a>
    );
  }

  return (
    <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon && <Icon id={icon} />}
    </button>
  );
}
