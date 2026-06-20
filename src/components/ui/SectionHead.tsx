import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Eyebrow } from './Eyebrow';

interface SectionHeadProps {
  readonly eyebrow: string;
  readonly heading: string;
  readonly description?: string;
}

export function SectionHead({ eyebrow, heading, description }: SectionHeadProps) {
  const ref = useScrollReveal();
  return (
    <div className="section-head reveal" ref={ref}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{heading}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
