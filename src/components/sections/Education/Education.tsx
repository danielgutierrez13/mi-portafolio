import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { SectionHead } from '../../ui/SectionHead';
import { Icon } from '../../ui/Icon';
import { Lightbox } from '../../ui/Lightbox';
import { Section } from '../../layout/Section';
import { CertLightbox } from './CertLightbox';
import { EDUCATION, type Degree, type CertGroup, type Cert } from '../../../data/education';

interface EduCardProps {
  readonly degree: Degree;
  readonly onOpen: (d: Degree) => void;
}

function EduCard({ degree, onOpen }: EduCardProps) {
  const { icon, institution, degree: degreeText, date, document } = degree;
  return (
    <div className="edu-card">
      <div className="edu-card__head">
        <div className="icon-wrap"><Icon id={icon} /></div>
        <div>
          <h4>{institution}</h4>
          <p className="edu-meta">{degreeText}</p>
          <span className="edu-date">{date}</span>
        </div>
      </div>
      <button type="button" className="edu-card__doc-btn" onClick={() => onOpen(degree)}>
        <Icon id={document ? (document.toLowerCase().endsWith('.pdf') ? 'external' : 'image') : 'image'} />
        {document ? 'Ver diploma' : 'Diploma pendiente de subir'}
      </button>
    </div>
  );
}

interface DegreeLightboxProps {
  readonly degree: Degree | null;
  readonly onClose: () => void;
}

function DegreeLightbox({ degree, onClose }: DegreeLightboxProps) {
  return (
    <Lightbox isOpen={degree !== null} onClose={onClose} labelId="degreeLightboxTitle">
      {degree && (
        <>
          <div className="lightbox__image-wrap">
            {degree.document ? (
              degree.document.toLowerCase().endsWith('.pdf')
                ? <iframe src={degree.document} title={`Diploma: ${degree.degree}`} className="lightbox__pdf" />
                : <img src={degree.document} alt={`Diploma: ${degree.degree}`} />
            ) : (
              <div className="lightbox__placeholder">
                <Icon id="image" />
                <span>Imagen o PDF del diploma pendiente de subir</span>
              </div>
            )}
          </div>
          <div className="lightbox__meta">
            <span className="lightbox__provider">{degree.institution}</span>
            <h3 id="degreeLightboxTitle">{degree.degree}</h3>
            <p className="lightbox__nolink">{degree.date}</p>
          </div>
        </>
      )}
    </Lightbox>
  );
}

interface CertChipProps {
  readonly cert: Cert;
  readonly onOpen: (c: Cert) => void;
}
function CertChip({ cert, onOpen }: CertChipProps) {
  return (
    <button className="chip chip--cert" type="button" onClick={() => onOpen(cert)}>
      {cert.name} <Icon id="image" />
    </button>
  );
}

interface CertCardProps {
  readonly group: CertGroup;
  readonly onOpen: (c: Cert) => void;
}
function CertCard({ group, onOpen }: CertCardProps) {
  return (
    <div className="cert-card">
      <h4>{group.label}</h4>
      <div className="chip-row">
        {group.certs.map((cert) => (
          <CertChip key={cert.id} cert={cert} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

export function Education() {
  const [activeCert, setActiveCert] = useState<Cert | null>(null);
  const [activeDegree, setActiveDegree] = useState<Degree | null>(null);
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();
  const { eyebrow, heading, description, degrees, certGroups } = EDUCATION;

  return (
    <Section id="formacion" alt>
      <SectionHead eyebrow={eyebrow} heading={heading} description={description} />
      <div className="formacion__grid">
        <div className="reveal" ref={leftRef}>
          {degrees.map((deg) => <EduCard key={deg.id} degree={deg} onOpen={setActiveDegree} />)}
        </div>
        <div className="reveal" ref={rightRef}>
          <div className="cert-grid">
            {certGroups.map((group) => (
              <CertCard key={group.id} group={group} onOpen={setActiveCert} />
            ))}
          </div>
        </div>
      </div>
      <CertLightbox cert={activeCert} onClose={() => setActiveCert(null)} />
      <DegreeLightbox degree={activeDegree} onClose={() => setActiveDegree(null)} />
    </Section>
  );
}
