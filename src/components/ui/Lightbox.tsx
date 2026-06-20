import { type ReactNode, useEffect, useRef } from 'react';
import { Icon } from './Icon';

interface LightboxProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly children: ReactNode;
  readonly wide?: boolean;
  readonly labelId?: string;
}

export function Lightbox({ isOpen, onClose, children, wide = false, labelId }: LightboxProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const onCancel = (e: Event) => { e.preventDefault(); onClose(); };
    dialog.addEventListener('cancel', onCancel);
    return () => dialog.removeEventListener('cancel', onCancel);
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      className={`lightbox__panel${wide ? ' lightbox__panel--wide' : ''}`}
      aria-labelledby={labelId}
    >
      <button className="lightbox__close" onClick={onClose} aria-label="Cerrar">
        <Icon id="close" />
      </button>
      {children}
    </dialog>
  );
}
