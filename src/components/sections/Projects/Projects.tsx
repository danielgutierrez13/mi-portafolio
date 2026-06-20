import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { SectionHead } from '../../ui/SectionHead';
import { ChipRow } from '../../ui/Chip';
import { Icon } from '../../ui/Icon';
import { Section } from '../../layout/Section';
import { ProjectLightbox } from './ProjectLightbox';
import { PROJECTS, type ProjectItem } from '../../../data/projects';

interface ProjectCardProps {
  readonly item: ProjectItem;
  readonly onOpen: (item: ProjectItem) => void;
}

function ProjectCard({ item, onOpen }: ProjectCardProps) {
  const ref = useScrollReveal();
  const { placeholder, badge, title, role, releases, description, contribLabel, bullets, chips, linkLabel } = item;

  return (
    <div className={`project-card${placeholder ? ' project-card--placeholder' : ''} reveal`} ref={ref}>
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
  const { eyebrow, heading, description, items } = PROJECTS;

  return (
    <Section id="proyectos">
      <SectionHead eyebrow={eyebrow} heading={heading} description={description} />
      <div className="projects-grid">
        {items.map((item) => (
          <ProjectCard key={item.id} item={item} onOpen={setActiveProject} />
        ))}
      </div>
      <ProjectLightbox project={activeProject} onClose={() => setActiveProject(null)} />
    </Section>
  );
}
