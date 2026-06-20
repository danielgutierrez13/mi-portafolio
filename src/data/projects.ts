export interface Release {
  readonly version: string;
  readonly title: string;
}

export interface ProjectItem {
  readonly id: string;
  readonly placeholder: boolean;
  readonly confidential: boolean;
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
    'Proyectos en los que participé como desarrollador. Haz clic en una tarjeta para ver el detalle.',
  items: [
    {
      id: 'proyecto-stom',
      placeholder: false,
      confidential: true,
      badge: 'Pacífico Seguros',
      title: 'Sistema de conciliación de horas STOM',
      role: 'Developer Backend',
      releases: '6 releases',
      description:
        'Plataforma interna para la gestión de horas, proveedores y accesos de equipos tecnológicos, construida en 6 releases evolutivos.',
      contribLabel: '// mi contribución',
      bullets: [
        'Desarrollé microservicios con Spring Boot para los dominios de facturación, proveedores y horas.',
        'Integré flujos asincrónicos con Azure Queues y Logic Apps para procesos automatizados.',
        'Implementé conectores con Jira, Port y ServiceNow para sincronización de entidades.',
        'Automaticé la gestión de accesos vía GitHub Teams y grupos de seguridad de Azure.',
        'Colaboré en el pipeline de datos con ADF para alimentar reportería en Power BI.',
      ],
      chips: ['Java', 'Spring Boot', 'Azure', 'Azure Queues', 'ADF', 'Power BI', 'Jira', 'ServiceNow', 'React'],
      linkLabel: 'Ver releases',
      images: [],
      link: null,
      releaseHistory: [
        { version: 'v1', title: 'Gestión de facturación' },
        { version: 'v2', title: 'Gestión de proveedores, ausencias y horas adicionales' },
        { version: 'v3', title: 'Integraciones con Jira, Port y ServiceNow' },
        { version: 'v4', title: 'Alta y baja automatizadas en ServiceNow' },
        { version: 'v5', title: 'Gestión de accesos vía GitHub Teams y Azure' },
        { version: 'v6', title: 'Reportería Power BI' },
      ],
    },
    {
      id: 'proyecto-celu-seguro',
      placeholder: false,
      confidential: true,
      badge: 'Pacífico Seguros',
      title: 'Celu Seguro — Yasu',
      role: 'Developer Backend',
      releases: null,
      description:
        'API para el flujo completo de seguro de celular: cotización por modelo y serie, registro de asegurado y emisión de póliza con integración a pasarelas de pago.',
      contribLabel: '// mi contribución',
      bullets: [
        'Participé desde el análisis y modelado del dominio hasta el desarrollo de los endpoints.',
        'Desarrollé el flujo de cotización integrando APIs internas y datos de BD.',
        'Implementé el endpoint de emisión de póliza con integración a Yape y Monokera.',
      ],
      chips: ['Java', 'Spring Boot', 'REST APIs', 'Azure', 'Yape', 'Monokera'],
      linkLabel: 'Ver proyecto',
      images: [],
      link: null,
      releaseHistory: [],
    },
    {
      id: 'proyecto-rpa-carga-afiliacion',
      placeholder: false,
      confidential: true,
      badge: 'Pacífico Seguros — RPA',
      title: 'RPA Carga y Afiliación Automática',
      role: 'RPA Developer — UiPath',
      releases: null,
      description:
        'Automatización del proceso de carga y afiliación sobre web y aplicaciones legacy de escritorio, con lectura desde file servers y notificaciones SMTP.',
      contribLabel: '// mi contribución',
      bullets: [
        'Automaticé flujos multi-pantalla en web y apps legacy bajo REFramework.',
        'Integré lectura de insumos desde file servers con procesamiento transaccional por ítem.',
        'Configuré notificaciones SMTP automáticas con resumen de resultados del proceso.',
        'Desplegué en Orchestrator con colas y tareas programadas para ejecución desatendida.',
      ],
      chips: ['UiPath', 'REFramework', 'Orchestrator', 'SMTP', 'File Server'],
      linkLabel: 'Ver proyecto',
      images: [],
      link: null,
      releaseHistory: [],
    },
    {
      id: 'proyecto-rpa-rentas-vitalicias',
      placeholder: false,
      confidential: true,
      badge: 'Pacífico Seguros — RPA',
      title: 'RPA Rentas Vitalicias',
      role: 'RPA Developer — UiPath',
      releases: '3 procesos',
      description:
        'Automatización de carga, cotización masiva y cotización individual sobre apps legacy, Excel y webs internas, con componentes reutilizables y resolución de CAPTCHAs.',
      contribLabel: '// mi contribución',
      bullets: [
        'Desarrollé los tres procesos sobre REFramework con manejo transaccional e independiente por ítem.',
        'Implementé componentes reutilizables de login compartidos entre los flujos.',
        'Integré TensorFlow para resolución automática de CAPTCHAs en webs internas.',
        'Gestioné lectura y escritura de datos masivos en Excel como fuente e insumo.',
      ],
      chips: ['UiPath', 'REFramework', 'Orchestrator', 'TensorFlow', 'Excel'],
      linkLabel: 'Ver proyecto',
      images: [],
      link: null,
      releaseHistory: [
        { version: 'P1', title: 'Carga de datos' },
        { version: 'P2', title: 'Cotización masiva desde Excel' },
        { version: 'P3', title: 'Cotización uno a uno en aplicación web' },
      ],
    },
    {
      id: 'proyecto-rpa-alta-codigos',
      placeholder: false,
      confidential: true,
      badge: 'Pacífico Seguros — RPA',
      title: 'RPA Alta de Códigos — Viap y Acselx',
      role: 'RPA Developer — UiPath',
      releases: null,
      description:
        'Automatización del alta de códigos en sistemas legacy de escritorio, eliminando la operación manual mediante robots orquestados con colas en UiPath.',
      contribLabel: '// mi contribución',
      bullets: [
        'Automaticé flujos complejos en apps legacy con selectores robustos y fallbacks.',
        'Implementé el proceso sobre REFramework con control transaccional por ítem.',
        'Configuré colas en Orchestrator y tareas programadas para ejecución nocturna desatendida.',
      ],
      chips: ['UiPath', 'REFramework', 'Orchestrator'],
      linkLabel: 'Ver proyecto',
      images: [],
      link: null,
      releaseHistory: [],
    },
    {
      id: 'proyecto-entre-cuentas',
      placeholder: false,
      confidential: true,
      badge: 'Redeban Colombia',
      title: 'Web Entre Cuentas',
      role: 'Full Stack Developer',
      releases: null,
      description:
        'Aplicativo web para transferencias interbancarias: registro de entidades, generación de QR y rediseño del frontend con Angular.',
      contribLabel: '// mi contribución',
      bullets: [
        'Implementé encriptación de datos sensibles en el backend con Java y Spring Boot.',
        'Desarrollé componentes reutilizables en Angular para el rediseño del frontend.',
        'Integré el flujo de generación de QR conectando backend y capa de presentación.',
      ],
      chips: ['Java', 'Spring Boot', 'Angular', 'AWS', 'JUnit', 'Mockito'],
      linkLabel: 'Ver proyecto',
      images: [],
      link: null,
      releaseHistory: [],
    },
    {
      id: 'proyecto-inicializaciones',
      placeholder: false,
      confidential: true,
      badge: 'Redeban Colombia',
      title: 'Web de Inicializaciones',
      role: 'Full Stack Developer',
      releases: null,
      description:
        'Plataforma web para la gestión de inicializaciones de terminales: administración de storages, carga de archivos y flujos de aprobación.',
      contribLabel: '// mi contribución',
      bullets: [
        'Desarrollé módulos backend para gestión de storages y subida de archivos con AWS S3.',
        'Implementé el flujo de aprobaciones con gestión de estados y validaciones de negocio.',
        'Construí vistas y componentes Angular para el panel de gestión y aprobación de registros.',
      ],
      chips: ['Java', 'Spring Boot', 'Angular', 'AWS', 'AWS S3', 'JUnit'],
      linkLabel: 'Ver proyecto',
      images: [],
      link: null,
      releaseHistory: [],
    },
    {
      id: 'proyecto-jne-capacitaciones',
      placeholder: false,
      confidential: true,
      badge: 'JNE',
      title: 'Sistema de Gestión de Capacitaciones',
      role: 'Full Stack Developer',
      releases: null,
      description:
        'Sistema para la creación y seguimiento de actividades de capacitación, con registro de participantes, subida de evidencias y trazabilidad por actividad.',
      contribLabel: '// mi contribución',
      bullets: [
        'Desarrollé APIs RESTful con .NET para la gestión de actividades y sus registros de capacitación.',
        'Implementé la lógica de negocio para el registro de participantes y subida de evidencias.',
        'Construí los módulos de frontend en Angular con componentes reutilizables para el flujo de capacitación.',
        'Modelé y administré el esquema de base de datos Oracle con stored procedures para la lógica del dominio.',
      ],
      chips: ['.NET Framework', 'Angular', 'Oracle', 'REST APIs', 'RxJS'],
      linkLabel: 'Ver proyecto',
      images: [],
      link: null,
      releaseHistory: [],
    },
    {
      id: 'proyecto-jne-riesgos',
      placeholder: false,
      confidential: true,
      badge: 'JNE',
      title: 'Gestión de Riesgos y Conflictos Electorales',
      role: 'Full Stack Developer',
      releases: null,
      description:
        'Migración de sistema monolítico a microservicios con .NET y Angular, integrando file server y conexión a servicios externos para autenticación y datos.',
      contribLabel: '// mi contribución',
      bullets: [
        'Participé en la migración del monolito a microservicios con .NET, desacoplando módulos del dominio electoral.',
        'Integré conexión a servicios externos para login y consumo de datos institucionales.',
        'Desarrollé módulos Angular para las nuevas interfaces del sistema migrado.',
        'Implementé integración con file server para gestión de documentos y evidencias del proceso.',
      ],
      chips: ['.NET', 'Angular', 'Oracle', 'REST APIs', 'File Server'],
      linkLabel: 'Ver proyecto',
      images: [],
      link: null,
      releaseHistory: [],
    },
  ],
};
