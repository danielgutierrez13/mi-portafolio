export interface Release {
  readonly version: string;
  readonly title: string;
}

export interface ProjectItem {
  readonly id: string;
  readonly placeholder: boolean;
  readonly badge: string;
  readonly title: string;
  readonly role: string;
  readonly releases: string | null;
  readonly description: string;
  readonly contribLabel: string;
  readonly bullets: string[];
  readonly chips: string[];
  readonly linkLabel: string;
  readonly images: string[];
  readonly link: string | null;
  readonly releaseHistory: Release[];
}

export interface Projects {
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly items: ProjectItem[];
}

export const PROJECTS: Projects = {
  eyebrow: '// proyectos-destacados',
  heading: 'Proyectos y contribuciones',
  description:
    'Haz clic en una tarjeta para ver el detalle de sus releases y capturas. Completa los datos marcados como pendientes y reemplaza la plantilla restante con otro proyecto real.',
  items: [
    {
      id: 'proyecto-1',
      placeholder: true,
      badge: 'Falta: nombre del proyecto y tu rol',
      title: 'Nombre del proyecto',
      role: 'Tu rol',
      releases: '4 releases',
      description:
        'Plataforma interna construida en 4 releases sucesivos: gestión de facturación, gestión de proveedores y RR. HH., integraciones con herramientas externas, y gestión de accesos e infraestructura de datos.',
      contribLabel: '// mi contribución',
      bullets: [
        'Participé en la evolución del producto release a release, desde el dominio de facturación hasta integraciones externas y gestión de accesos.',
        'Completa aquí una decisión técnica concreta que tomaste.',
        'Completa aquí el impacto: tiempo ahorrado, automatización lograda o equipos beneficiados.',
      ],
      chips: ['GitHub', 'Azure', 'ADF', 'Power BI', 'Jira', 'ServiceNow'],
      linkLabel: 'Ver releases y capturas',
      images: [],
      link: null,
      releaseHistory: [
        { version: 'v1', title: 'Gestión de facturación' },
        { version: 'v2', title: 'Gestión de proveedores, ausencias, asignaciones y horas adicionales' },
        { version: 'v3', title: 'Integraciones externas: Jira, Port y ServiceNow' },
        { version: 'v4', title: 'Gestión de accesos vía GitHub Teams y grupos de seguridad de Azure, y pipeline de datos en ADF para Power BI' },
      ],
    },
    {
      id: 'proyecto-2',
      placeholder: true,
      badge: 'Plantilla · completa con tu proyecto',
      title: 'Nombre del proyecto',
      role: 'Tu rol',
      releases: null,
      description: 'Describe en 1–2 líneas qué hace el proyecto y en qué contexto lo desarrollaste.',
      contribLabel: '// mi contribución',
      bullets: [
        'Decisión técnica o módulo del que fuiste responsable.',
        'Un reto puntual que resolviste y cómo lo abordaste.',
        'El impacto: tiempo ahorrado, performance, usuarios o cobertura de pruebas.',
      ],
      chips: ['Tecnología 1', 'Tecnología 2', 'Tecnología 3'],
      linkLabel: 'Ver proyecto',
      images: [],
      link: null,
      releaseHistory: [],
    },
  ],
};
