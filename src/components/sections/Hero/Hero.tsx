import { type ReactNode, useState, useEffect, useRef } from 'react';
import { Icon } from '../../ui/Icon';
import { Button } from '../../ui/Button';
import { Eyebrow } from '../../ui/Eyebrow';
import { ApiCard } from './ApiCard';
import { HERO, type HeroMeta } from '../../../data/hero';
import { CV } from '../../../data/cv';

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

function CvDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="cv-dropdown" ref={ref}>
      <button
        type="button"
        className="btn btn--ghost cv-dropdown__trigger"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <Icon id="download" /> CV <Icon id="chevron-right" className={`cv-dropdown__caret${open ? ' cv-dropdown__caret--open' : ''}`} />
      </button>
      {open && (
        <div className="cv-dropdown__menu" role="menu">
          {CV.variants.map((v) => (
            <a
              key={v.id}
              href={v.file}
              download
              className="cv-dropdown__item"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <Icon id="file-pdf" />
              <span>
                <strong>{v.label}</strong>
                <em>{v.description.split('.')[0]}</em>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Hero() {
  const { eyebrow, name, role, pitch, meta } = HERO;
  const [firstName, lastName] = name.split('\n');

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
            <CvDropdown />
          </div>
          <HeroMetaList items={meta} />
        </div>
        <ApiCard />
      </div>
    </section>
  );
}
