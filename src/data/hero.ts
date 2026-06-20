export interface HeroMeta {
  readonly icon: string;
  readonly text: string;
}

export interface Hero {
  readonly eyebrow: string;
  readonly name: string;
  readonly role: { readonly prefix: string; readonly company: string; readonly suffix: string };
  readonly pitch: string;
  readonly meta: HeroMeta[];
}

export const HERO: Hero = {
  eyebrow: '// software engineer · backend cloud & microservicios',
  name: 'Cesar Daniel\nGutiérrez Villegas',
  role: { prefix: 'Software Engineer II en ', company: 'Encora / Coforge', suffix: ' — Java · Spring Boot · Azure' },
  pitch:
    'Diseño APIs bajo un enfoque API‑First y evoluciono microservicios reactivos en la nube. Más de 4 años conectando backend, frontend y automatización con buenas prácticas de ingeniería y documentación rigurosa.',
  meta: [
    { icon: 'pin', text: 'Piura, Perú' },
    { icon: 'live', text: 'Disponible para nuevos retos' },
    { icon: 'globe', text: 'Español (C2) · English (A2)' },
  ],
};
