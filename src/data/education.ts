export interface Degree {
  readonly id: string;
  readonly icon: string;
  readonly institution: string;
  readonly degree: string;
  readonly date: string;
  readonly obtained: string;
  readonly document: string | null;
}

export interface Cert {
  readonly id: string;
  readonly name: string;
  readonly provider: string;
  readonly title: string;
  readonly detail: string;
  readonly obtained: string;
  readonly image: string | null;
  readonly link: string | null;
}

export interface CertGroup {
  readonly id: string;
  readonly label: string;
  readonly certs: Cert[];
}

export interface Education {
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly degrees: Degree[];
  readonly certGroups: CertGroup[];
}

export const EDUCATION: Education = {
  eyebrow: '// formacion-y-certificaciones',
  heading: 'Formación y capacitaciones',
  description:
    'Base académica y formación continua en arquitectura, seguridad, datos y desarrollo de producto. Haz clic en cualquier capacitación para ver el certificado.',
  degrees: [
    {
      id: 'unp',
      icon: 'cap',
      institution: 'Universidad Nacional de Piura',
      degree: 'Bachiller en Ingeniería Informática',
      date: 'Mar. 2018 — Mar. 2023',
      obtained: 'Mar. 2023',
      document: '/docs/certs/bachiller.pdf',
    },
  ],
  certGroups: [
    {
      id: 'uipath', label: '// uipath academy', certs: [
        {
          id: 'uipath-foundation',
          name: 'RPA Developer Foundation',
          provider: 'UiPath Academy',
          title: 'UiPath RPA Developer Foundation',
          detail: 'Fundamentos de automatización RPA: diseño de flujos, selectores, manejo de excepciones y despliegue de bots en Orchestrator.',
          obtained: 'Ago. 2022',
          image: '/docs/certs/rpa-foundation.pdf',
          link: null
        },
        {
          id: 'uipath-advanced',
          name: 'RPA Developer Advanced',
          provider: 'UiPath Academy',
          title: 'UiPath RPA Developer Advanced',
          detail: 'Automatización avanzada: REFramework, colas de Orchestrator, integraciones con APIs y manejo robusto de excepciones en escenarios empresariales.',
          obtained: 'Sep. 2022',
          image: '/docs/certs/rpa-advance.pdf',
          link: null
        },
      ],
    },
    {
      id: 'encora', label: '// encora', certs: [
        {
          id: 'encora-genai',
          name: 'Gen AI',
          provider: 'Encora',
          title: 'Gen AI',
          detail: 'Desde fundamentos de IA generativa hasta uso experto: modelos de lenguaje, prompt engineering avanzado, integración de LLMs en flujos empresariales y evaluación de resultados.',
          obtained: 'Abr. 2026',
          image: '/docs/certs/encora-genai.pdf',
          link: null
        },
      ],
    },
    {
      id: 'inetum', label: '// inetum perú', certs: [
        {
          id: 'inetum-seguridad',
          name: 'Seguridad de la información',
          provider: 'Inetum Perú',
          title: 'Seguridad de la información',
          detail: 'Principios de ciberseguridad aplicados al desarrollo de software: gestión de riesgos, protección de datos y cumplimiento normativo.',
          obtained: 'Nov. 2024',
          image: '/docs/certs/inetum-seguridadinformacion.pdf',
          link: 'https://gfi.360learning.com/api/certification/4414034767977775',
        },
      ],
    },
    {
      id: 'mdp', label: '// mdp consulting', certs: [
        {
          id: 'mdp-devseguro',
          name: 'Desarrollo de software seguro',
          provider: 'MDP Consulting',
          title: 'Desarrollo de software seguro',
          detail: 'Buenas prácticas de codificación segura: OWASP Top 10, validación de entradas, manejo seguro de credenciales y revisión de código.',
          obtained: 'Set. 2023',
          image: '/docs/certs/mdp-desarrolloseguro.pdf',
          link: null,
        },
      ],
    },
    {
      id: 'bcp', label: '// bcp', certs: [
        {
          id: 'bcp-finanzas',
          name: 'Finanzas personales',
          provider: 'BCP',
          title: 'Finanzas personales',
          detail: 'Gestión de presupuesto personal, ahorro, inversión básica y planificación financiera a corto y largo plazo.',
          obtained: '2023',
          image: '/docs/certs/bcp-finanzas.pdf',
          link: 'https://cursos.campusromero.pe/certificates/bbddba94b54d400abb0e48b22cc5aa4a',
        },
      ],
    },
    {
      id: 'coursera', label: '// coursera', certs: [
        {
          id: 'coursera-genai',
          name: 'Generative AI',
          provider: 'Coursera',
          title: 'Generative AI',
          detail: 'Introducción a modelos generativos, redes neuronales, LLMs y aplicaciones prácticas con herramientas de IA generativa.',
          obtained: '2024',
          image: null,
          link: null,
        },
      ],
    },
    {
      id: 'kb', label: '// kb soluciones', certs: [
        {
          id: 'kb-disenio',
          name: 'Diseño publicitario',
          provider: 'KB Soluciones',
          title: 'Diseño publicitario',
          detail: 'Fundamentos de diseño gráfico, composición visual y manejo de herramientas de edición para material publicitario digital e impreso.',
          obtained: 'Nov. 2021',
          image: '/docs/certs/kb-diseñopublicitario.pdf',
          link: null,
        },
        {
          id: 'kb-java',
          name: 'Java',
          provider: 'KB Soluciones',
          title: 'Java',
          detail: 'Programación orientada a objetos con Java: clases, herencia, polimorfismo, colecciones y fundamentos de desarrollo de aplicaciones.',
          obtained: 'Nov. 2021',
          image: '/docs/certs/kb-java.pdf',
          link: null,
        },
        {
          id: 'kb-phpmysql',
          name: 'PHP y MySQL',
          provider: 'KB Soluciones',
          title: 'PHP y MySQL',
          detail: 'Desarrollo web backend con PHP y gestión de bases de datos relacionales con MySQL: consultas, procedimientos y diseño de esquemas.',
          obtained: 'Oct. 2021',
          image: '/docs/certs/kb-phpmysql.pdf',
          link: null,
        },
        {
          id: 'kb-bd',
          name: 'Modelado de BD',
          provider: 'KB Soluciones',
          title: 'Estructura y modelado de BD',
          detail: 'Principios de diseño de bases de datos: normalización, diagramas ER, integridad referencial y optimización de consultas.',
          obtained: 'Set. 2021',
          image: '/docs/certs/kb-modeladodatos.pdf',
          link: null,
        },
      ],
    },
    {
      id: 'platzi', label: '// platzi', certs: [
        {
          id: 'platzi-git',
          name: 'Git y GitHub',
          provider: 'Platzi',
          title: 'Curso Profesional de Git y GitHub',
          detail: 'Control de versiones con Git: branching, merging, rebase, pull requests y flujos de trabajo colaborativo con GitHub.',
          obtained: 'Marz. 2022',
          image: '/docs/certs/platzi-github.pdf',
          link: 'https://platzi.com/p/dgutierrezvillegas565/curso/1557-course/diploma/detalle/',
        },
        {
          id: 'platzi-symfony',
          name: 'Symfony',
          provider: 'Platzi',
          title: 'Curso de Symfony Framework',
          detail: 'Desarrollo de aplicaciones web con Symfony: arquitectura MVC, routing, Doctrine ORM, servicios, seguridad y buenas prácticas del ecosistema PHP moderno.',
          obtained: 'Marz. 2022',
          image: '/docs/certs/platzi-symfony.pdf',
          link: 'https://platzi.com/p/dgutierrezvillegas565/curso/1901-course/diploma/detalle/',
        },
        {
          id: 'platzi-js',
          name: 'JavaScript Fundamentos',
          provider: 'Platzi',
          title: 'Curso Básico de JavaScript',
          detail: 'Bases del lenguaje JavaScript: tipos de datos, funciones, scope, closures, manipulación del DOM y fundamentos de la programación asíncrona.',
          obtained: 'Marz. 2022',
          image: '/docs/certs/platzi-basicojavascript.pdf',
          link: 'https://platzi.com/p/dgutierrezvillegas565/curso/1814-course/diploma/detalle/',
        },
        {
          id: 'platzi-js-practico',
          name: 'JavaScript Practico',
          provider: 'Platzi',
          title: 'Curso Práctico de JavaScript',
          detail: 'Aplicación práctica de JavaScript: proyectos reales, consumo de APIs, manipulación avanzada del DOM y patrones de código limpio y reutilizable.',
          obtained: 'Abr. 2022',
          image: '/docs/certs/platzi-practicojavascript.pdf',
          link: 'https://platzi.com/p/dgutierrezvillegas565/curso/2327-course/diploma/detalle/',
        },
        {
          id: 'platzi-codestream',
          name: 'Codestream',
          provider: 'Platzi',
          title: 'Curso de Flujo de Desarrollo Moderno CodeStream',
          detail: 'Integración de herramientas de revisión de código, colaboración en equipo y flujo de trabajo moderno con Codestream.',
          obtained: 'Abr. 2022',
          image: '/docs/certs/platzi-codestream.pdf',
          link: 'https://platzi.com/p/dgutierrezvillegas565/curso/2157-course/diploma/detalle/',
        },
      ],
    },
  ],
};
