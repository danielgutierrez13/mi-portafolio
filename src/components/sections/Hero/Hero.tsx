import { type ReactNode } from 'react';
import { Icon } from '../../ui/Icon';
import { Button } from '../../ui/Button';
import { Eyebrow } from '../../ui/Eyebrow';
import { ApiCard } from './ApiCard';
import { HERO, type HeroMeta } from '../../../data/hero';

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
            <Button variant="primary" href="#contacto" icon="arrow">Hablemos </Button>
            <Button variant="ghost" href="#experiencia">Ver experiencia</Button>
          </div>
          <HeroMetaList items={meta} />
        </div>
        <ApiCard />
      </div>
    </section>
  );
}
