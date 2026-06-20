import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CertLightbox } from '../../../components/sections/Education/CertLightbox';
import type { Cert } from '../../../data/education';

vi.mock('../../../components/ui/Icon', () => ({ Icon: () => null }));
vi.mock('../../../components/ui/Button', () => ({
  Button: ({ children, href }: { children: React.ReactNode; href?: string }) => <a href={href}>{children}</a>,
}));
HTMLDialogElement.prototype.showModal = vi.fn();
HTMLDialogElement.prototype.close = vi.fn();

const CERT_IMAGE: Cert = { id: 'c1', name: 'AWS Cloud', provider: 'Amazon', title: 'AWS Certified', detail: 'Servicios core de AWS y arquitectura cloud.', obtained: 'Ene. 2024', image: '/certs/aws.png', link: 'https://verify.aws' };
const CERT_PDF: Cert = { id: 'c2', name: 'Azure', provider: 'Microsoft', title: 'AZ-900', detail: 'Fundamentos de Microsoft Azure.', obtained: 'Feb. 2024', image: '/certs/az.pdf', link: null };
const CERT_NONE: Cert = { id: 'c3', name: 'Java', provider: 'Oracle', title: 'Java SE', detail: 'Programación orientada a objetos con Java.', obtained: '2023', image: null, link: null };

describe('CertLightbox', () => {
  it('no renderiza contenido cuando cert=null', () => {
    render(<CertLightbox cert={null} onClose={vi.fn()} />);
    expect(screen.queryByText('AWS Certified')).toBeNull();
  });
  it('muestra el título del certificado', () => {
    render(<CertLightbox cert={CERT_IMAGE} onClose={vi.fn()} />);
    expect(screen.getByText('AWS Certified')).toBeInTheDocument();
  });
  it('muestra el proveedor', () => {
    render(<CertLightbox cert={CERT_IMAGE} onClose={vi.fn()} />);
    expect(screen.getByText('Amazon')).toBeInTheDocument();
  });
  it('renderiza una imagen cuando image es png', () => {
    const { container } = render(<CertLightbox cert={CERT_IMAGE} onClose={vi.fn()} />);
    expect(container.querySelector('img')).toHaveAttribute('src', '/certs/aws.png');
  });
  it('renderiza un iframe cuando image es pdf', () => {
    const { container } = render(<CertLightbox cert={CERT_PDF} onClose={vi.fn()} />);
    expect(container.querySelector('iframe')).toBeInTheDocument();
  });
  it('muestra placeholder cuando image es null', () => {
    render(<CertLightbox cert={CERT_NONE} onClose={vi.fn()} />);
    expect(screen.getByText(/pendiente de subir/i)).toBeInTheDocument();
  });
  it('muestra enlace de verificación cuando hay link', () => {
    const { container } = render(<CertLightbox cert={CERT_IMAGE} onClose={vi.fn()} />);
    expect(container.querySelector('a[href="https://verify.aws"]')).toBeInTheDocument();
  });
});
