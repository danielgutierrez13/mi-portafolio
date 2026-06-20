import { Lightbox } from '../../ui/Lightbox';
import { Button } from '../../ui/Button';
import { Carousel } from './Carousel';
import { type ProjectItem, type Release } from '../../../data/projects';

interface ReleaseTimelineProps {
  readonly releases: Release[];
}
function ReleaseTimeline({ releases }: ReleaseTimelineProps) {
  if (!releases.length) return null;
  return (
    <div className="release-timeline">
      <span className="release-timeline__label">{'// historial de releases'}</span>
      {releases.map(({ version, title }) => (
        <div key={version} className="release-item">
          <span className="release-tag">{version}</span>
          <div><h4>{title}</h4></div>
        </div>
      ))}
    </div>
  );
}

interface ProjectLightboxProps {
  readonly project: ProjectItem | null;
  readonly onClose: () => void;
}

export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  return (
    <Lightbox isOpen={project !== null} onClose={onClose} wide labelId="projectLightboxTitle">
      {project && (
        <>
          <Carousel images={project.images} confidential={project.confidential} />
          <div className="lightbox__meta">
            <span className="lightbox__provider">{project.role}</span>
            <h3 id="projectLightboxTitle">{project.title}</h3>
            <ReleaseTimeline releases={project.releaseHistory} />
            {project.confidential ? null : project.link ? (
              <Button variant="primary" href={project.link} target="_blank" rel="noopener" icon="external">
                Visitar proyecto
              </Button>
            ) : (
              <p className="lightbox__nolink">Aún no se agregó el enlace externo de este proyecto.</p>
            )}
          </div>
        </>
      )}
    </Lightbox>
  );
}
