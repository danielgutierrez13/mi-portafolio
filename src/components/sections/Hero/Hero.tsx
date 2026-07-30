import { type ReactNode, useState } from 'react';
import { Icon } from '../../ui/Icon';
import { Button } from '../../ui/Button';
import { Eyebrow } from '../../ui/Eyebrow';
import { Lightbox } from '../../ui/Lightbox';
import { ApiCard } from './ApiCard';
import { HERO, type HeroMeta } from '../../../data/hero';
import { CV_LABEL, CV_FILE_DEFAULT, CV_FILE_FULL } from '../../../data/cv';
import { useFlags } from '../../../config/flags';

interface HeroMetaListProps {
  readonly items: HeroMeta[];
}

function HeroMetaList({ items }: HeroMetaListProps): ReactNode {
  return (
    <ul className="hero__meta">
      {items.map(({ icon, text }) => (
        <li key={text}>
          {icon === 'live' ? (
            <span className="dot-live" aria-hidden="true" />
          ) : (
            <Icon id={icon} />
          )}
          {text}
        </li>
      ))}
    </ul>
  );
}

interface CvModalProps {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly file: string;
}

function CvModal({ open, onClose, file }: CvModalProps) {
  return (
    <Lightbox isOpen={open} onClose={onClose} labelId="cvLightboxTitle">
      <div className="lightbox__image-wrap">
        {open && <iframe key={file} src={file} title={CV_LABEL} className="lightbox__pdf" />}
      </div>
      <div className="lightbox__meta">
        <h3 id="cvLightboxTitle">{CV_LABEL}</h3>
        <a href={file} download={`${CV_LABEL}.pdf`} className="btn btn--primary" style={{ marginTop: 8 }}>
          <Icon id="download" /> Descargar CV
        </a>
      </div>
    </Lightbox>
  );
}

export function Hero() {
  const { showJne } = useFlags();
  const cvFile = showJne ? CV_FILE_FULL : CV_FILE_DEFAULT;
  const { eyebrow, name, role, pitch, meta } = HERO;
  const [firstName, lastName] = name.split('\n');
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="hero__title">
            {firstName}
            <br />
            {lastName}
          </h1>
          <p className="hero__role">
            {role.prefix}
            <strong>{role.company}</strong>
            {role.suffix}
          </p>
          <p className="hero__pitch">{pitch}</p>
          <div className="hero__actions">
            <Button variant="primary" href="#contacto" icon="arrow">Hablemos</Button>
            <Button variant="ghost" href="#experiencia">Ver experiencia</Button>
            <button type="button" className="btn btn--ghost" onClick={() => setCvOpen(true)}>
              <Icon id="download" /> Ver CV
            </button>
          </div>
          <HeroMetaList items={meta} />
        </div>
        <ApiCard />
      </div>
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} file={cvFile} />
    </section>
  );
}
