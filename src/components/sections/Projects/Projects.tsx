import { useState, useEffect, useCallback } from 'react';
import { SectionHead } from '../../ui/SectionHead';
import { ChipRow } from '../../ui/Chip';
import { Icon } from '../../ui/Icon';
import { Section } from '../../layout/Section';
import { ProjectLightbox } from './ProjectLightbox';
import { useSwipe } from '../../../hooks/useSwipe';
import { PROJECTS, type ProjectItem } from '../../../data/projects';

interface ProjectCardProps {
  readonly item: ProjectItem;
  readonly onOpen: (item: ProjectItem) => void;
}

function ProjectCard({ item, onOpen }: ProjectCardProps) {
  const { placeholder, badge, title, role, releases, description, contribLabel, bullets, chips, linkLabel } = item;

  return (
    <div className={`project-card${placeholder ? ' project-card--placeholder' : ''}`}>
      {badge && <span className="project-card__badge">{badge}</span>}
      <div className="project-card__top">
        <h3>{title}</h3>
        {releases && <span className="project-card__releases">{releases}</span>}
      </div>
      <span className="role-tag" style={{ marginBottom: 10, display: 'inline-block' }}>{role}</span>
      <p className="desc">{description}</p>
      <span className="contrib-label">{contribLabel}</span>
      <ul>
        {bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
      <ChipRow chips={chips} className="chip-row" />
      <button type="button" className="project-card__link" onClick={() => onOpen(item)}>
        {linkLabel} <Icon id="external" />
      </button>
    </div>
  );
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(2);
  const { eyebrow, heading, description, items } = PROJECTS;

  const total = items.length;
  const pages = Math.ceil(total / perPage);
  const safeCurrent = Math.min(current, pages - 1);

  useEffect(() => {
    const update = () => setPerPage(window.innerWidth < 700 ? 1 : 2);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const go = useCallback((page: number) => {
    setCurrent(((page % pages) + pages) % pages);
  }, [pages]);

  const prev = useCallback(() => go(safeCurrent - 1), [safeCurrent, go]);
  const next = useCallback(() => go(safeCurrent + 1), [safeCurrent, go]);

  const trackRef = useSwipe(prev, next);

  const start = safeCurrent * perPage;
  const visible = items.slice(start, start + perPage);

  return (
    <Section id="proyectos">
      <SectionHead eyebrow={eyebrow} heading={heading} description={description} />
      <div className="projects-carousel">
        <div className="projects-carousel__row">
          <button
            type="button"
            className="projects-carousel__nav"
            onClick={prev}
            aria-label="Proyectos anteriores"
          >
            <Icon id="chevron-left" />
          </button>
          <div className="projects-carousel__track" ref={trackRef}>
            {visible.map((item) => (
              <ProjectCard key={item.id} item={item} onOpen={setActiveProject} />
            ))}
          </div>
          <button
            type="button"
            className="projects-carousel__nav"
            onClick={next}
            aria-label="Siguientes proyectos"
          >
            <Icon id="chevron-right" />
          </button>
        </div>
        <span className="projects-carousel__counter">{safeCurrent + 1} / {pages}</span>
      </div>
      <ProjectLightbox project={activeProject} onClose={() => setActiveProject(null)} />
    </Section>
  );
}
