export interface CvVariant {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly file: string;
}

export interface Cv {
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly variants: CvVariant[];
}

export const CV: Cv = {
  eyebrow: '// curriculum-vitae',
  heading: 'Currículum Vitae',
  description: 'Descarga o visualiza mi CV en la versión que prefieras.',
  variants: [
    {
      id: 'simple',
      label: 'CV Simple',
      description: 'Una página. Información clave: perfil, stack, experiencia y formación.',
      file: '/docs/cv/cv-simple.pdf',
    },
    {
      id: 'completo',
      label: 'CV Completo',
      description: 'Versión extendida con detalle de proyectos, certificaciones y responsabilidades.',
      file: '/docs/cv/cv-completo.pdf',
    },
  ],
};
