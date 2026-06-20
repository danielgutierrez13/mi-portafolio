import { Lightbox } from '../../ui/Lightbox';
import { Button } from '../../ui/Button';
import { Icon } from '../../ui/Icon';
import { type Cert } from '../../../data/education';

interface CertImageProps {
  readonly src: string;
  readonly title: string;
}
function CertMedia({ src, title }: CertImageProps) {
  if (src.toLowerCase().endsWith('.pdf')) {
    return <iframe src={src} title={title} className="lightbox__pdf" />;
  }
  return <img src={src} alt={title} />;
}

interface CertLightboxProps {
  readonly cert: Cert | null;
  readonly onClose: () => void;
}

export function CertLightbox({ cert, onClose }: CertLightboxProps) {
  return (
    <Lightbox isOpen={cert !== null} onClose={onClose} labelId="certLightboxTitle">
      {cert && (
        <>
          <div className="lightbox__image-wrap">
            {cert.image
              ? <CertMedia src={cert.image} title={`Certificado: ${cert.title}`} />
              : <div className="lightbox__placeholder"><Icon id="image" /><span>Documento pendiente de subir</span></div>
            }
          </div>
          <div className="lightbox__meta">
            <span className="lightbox__provider">{cert.provider}</span>
            <h3 id="certLightboxTitle">{cert.title}</h3>
            <p className="lightbox__obtained"><Icon id="calendar" />{cert.obtained}</p>
            <p className="lightbox__detail">{cert.detail}</p>
            {cert.link ? (
              <Button variant="primary" href={cert.link} target="_blank" rel="noopener" icon="external">
                Ver verificación
              </Button>
            ) : (
              <p className="lightbox__nolink"></p>
            )}
          </div>
        </>
      )}
    </Lightbox>
  );
}
