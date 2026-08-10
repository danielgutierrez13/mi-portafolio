export interface ServiceItem {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly chips: string[];
}

export interface Services {
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly items: ServiceItem[];
}

export const SERVICES: Services = {
  eyebrow: '// servicios',
  heading: 'Cómo puedo ayudarte',
  description:
    'Diseño, construyo y mantengo software de extremo a extremo. Estas son las áreas donde aporto más valor.',
  items: [
    {
      id: 'backend',
      icon: 'server',
      title: 'Backend & microservicios cloud',
      description:
        'APIs REST bajo enfoque API-First, microservicios reactivos con Spring Boot y .NET, e integraciones en Azure y AWS con foco en resiliencia y observabilidad.',
      chips: ['Java', 'Spring Boot', '.NET', 'PHP', 'Symfony', 'Azure', 'AWS'],
    },
    {
      id: 'frontend',
      icon: 'globe',
      title: 'Frontend & aplicaciones web',
      description:
        'Interfaces modernas y componentes reutilizables con React y Angular: SPA responsivas, manejo de estado y consumo de APIs con foco en experiencia de usuario.',
      chips: ['React', 'Angular', 'TypeScript', 'RxJS'],
    },
    {
      id: 'rpa',
      icon: 'robot',
      title: 'Automatización de procesos (RPA)',
      description:
        'Robots que eliminan trabajo manual repetitivo: procesos desatendidos con UiPath sobre web y apps legacy, colas en Orchestrator y control de excepciones.',
      chips: ['UiPath', 'REFramework', 'Orchestrator'],
    },
    {
      id: 'mobile',
      icon: 'mobile',
      title: 'Aplicaciones móviles',
      description:
        'Apps móviles multiplataforma con Flutter y backend en Supabase: arquitectura limpia, estado con Riverpod y funcionalidades listas para producción.',
      chips: ['Flutter', 'Dart', 'Supabase'],
    },
    {
      id: 'ia',
      icon: 'spark',
      title: 'Integración de IA & agentes',
      description:
        'Incorporo LLMs y flujos con agentes a productos reales: generación asistida, RAG e integraciones con Claude y GPT conectadas a la lógica de negocio.',
      chips: ['LLMs', 'RAG', 'Claude', 'GPT', 'Agentes'],
    },
  ],
};
