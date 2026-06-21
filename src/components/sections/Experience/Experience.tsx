import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { SectionHead } from '../../ui/SectionHead';
import { ChipRow } from '../../ui/Chip';
import { Icon } from '../../ui/Icon';
import { Lightbox } from '../../ui/Lightbox';
import { Section } from '../../layout/Section';
import { EXPERIENCE, REFERENCES, type ExperienceItem, type Modality } from '../../../data/experience';

const MODALITY_LABEL: Record<Modality, string> = {
  remoto: 'Remoto',
  hibrido: 'Híbrido',
  presencial: 'Presencial',
};

const MODALITY_ICON: Record<Modality, string> = {
  remoto: 'globe',
  hibrido: 'pin',
  presencial: 'pin',
};

interface StatusTagProps {
  readonly active: boolean;
}
function StatusTag({ active }: StatusTagProps) {
  if (active) {
    return (
      <span className="tag-status tag-status--active">
        <span className="dot-live" aria-hidden="true" />en producción
      </span>
    );
  }
  return (
    <span className="tag-status tag-status--done">
      <Icon id="check" />completado
    </span>
  );
}

interface TimelineCardProps {
  readonly item: ExperienceItem;
  readonly onOpenCert: (item: ExperienceItem) => void;
}
function TimelineCard({ item, onOpenCert }: TimelineCardProps) {
  const ref = useScrollReveal();
  const { active, date, title, meta, modality, bullets, chips, certificate } = item;

  return (
    <div className={`timeline-item${active ? ' timeline-item--active' : ''} reveal`} ref={ref}>
      <div className="timeline-card">
        <div className="timeline-card__top">
          <span className="tag-date">{date}</span>
          <StatusTag active={active} />
        </div>
        <h3>{title}</h3>
        <p className="role-meta">{meta}</p>
        <span className="modality-tag">
          <Icon id={MODALITY_ICON[modality]} />
          {MODALITY_LABEL[modality]}
        </span>
        <ul>
          {bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <ChipRow chips={chips} />
        {!active && (
          <button type="button" className="edu-card__doc-btn" onClick={() => onOpenCert(item)}>
            <Icon id={certificate ? (certificate.toLowerCase().endsWith('.pdf') ? 'external' : 'image') : 'image'} />
            {certificate ? 'Ver certificado de trabajo' : 'Certificado pendiente de subir'}
          </button>
        )}
      </div>
    </div>
  );
}

interface CertLightboxProps {
  readonly item: ExperienceItem | null;
  readonly onClose: () => void;
}
function WorkCertLightbox({ item, onClose }: CertLightboxProps) {
  return (
    <Lightbox isOpen={item !== null} onClose={onClose} labelId="workCertLightboxTitle">
      {item && (
        <>
          <div className="lightbox__image-wrap">
            {item.certificate ? (
              item.certificate.toLowerCase().endsWith('.pdf')
                ? <iframe src={item.certificate} title={`Certificado: ${item.title}`} className="lightbox__pdf" />
                : <img src={item.certificate} alt={`Certificado: ${item.title}`} />
            ) : (
              <div className="lightbox__placeholder">
                <Icon id="image" />
                <span>Certificado de trabajo pendiente de subir</span>
              </div>
            )}
          </div>
          <div className="lightbox__meta">
            <span className="lightbox__provider">{item.meta}</span>
            <h3 id="workCertLightboxTitle">{item.title}</h3>
            <p className="lightbox__nolink">{item.date}</p>
          </div>
        </>
      )}
    </Lightbox>
  );
}

function ReferencesBlock() {
  const ref = useScrollReveal();
  return (
    <div className="references reveal" ref={ref}>
      <h3 className="references__heading">
        <Icon id="check" /> Referencias profesionales
      </h3>
      <div className="references__grid">
        {REFERENCES.map((r) => (
          <div key={r.id} className="ref-card">
            <div className="ref-card__avatar">
              {r.name.split(' ').slice(0, 2).map((n) => n[0]).join('')}
            </div>
            <div className="ref-card__body">
              <strong>{r.name}</strong>
              <span>{r.position}</span>
              <span className="ref-card__company">{r.company}</span>
              <em>{r.relationship}</em>
            </div>
            <div className="ref-card__links">
              {r.phone && (
                <a href={`tel:${r.phone.replace(/\s/g, '')}`} aria-label="Teléfono" className="ref-card__link">
                  <Icon id="phone" />
                </a>
              )}
              {r.email && (
                <a href={`mailto:${r.email}`} aria-label="Email" className="ref-card__link">
                  <Icon id="mail" />
                </a>
              )}
              {r.linkedin && (
                <a href={r.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="ref-card__link">
                  <Icon id="linkedin" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  const [activeCert, setActiveCert] = useState<ExperienceItem | null>(null);

  return (
    <Section id="experiencia">
      <SectionHead
        eyebrow="// historial-de-despliegues"
        heading="Experiencia profesional"
        description="Cada etapa, registrada como un release: con fecha, estado y lo que se entregó."
      />
      <div className="timeline">
        {EXPERIENCE.map((item) => (
          <TimelineCard key={item.id} item={item} onOpenCert={setActiveCert} />
        ))}
      </div>
      <ReferencesBlock />
      <WorkCertLightbox item={activeCert} onClose={() => setActiveCert(null)} />
    </Section>
  );
}
