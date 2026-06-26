export interface Degree {
  readonly id: string;
  readonly icon: string;
  readonly institution: string;
  readonly degree: string;
  readonly date: string;
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
  readonly links: string[];
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
      document: '/docs/certs/bachiller.pdf',
    },
  ],
  certGroups: [
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
          links: [
            'https://www.coursera.org/account/accomplishments/badge/bznB0P4DTfu5wdD-Az37-g',
            'https://www.coursera.org/account/accomplishments/badge/ybjaxEAaQNW42sRAGkDVDw',
            'https://www.coursera.org/account/accomplishments/badge/yTNOpX8hQz6zTqV_IWM-fg',
            'https://www.coursera.org/account/accomplishments/badge/lgX0fEObQtGF9HxDmyLR0A',
          ]
        },
      ],
    },
    {
      id: 'coursera', label: '// coursera', certs: [
        {
          id: 'coursera-vertex-flutter',
          name: 'Vertex AI & Flutter',
          provider: 'Google Cloud',
          title: 'Build Generative AI Agents with Vertex AI and Flutter',
          detail: 'Construcción de agentes de IA generativa con Vertex AI de Google Cloud, integrados en apps Flutter para experiencias conversacionales en móvil.',
          obtained: 'Feb. 2026',
          image: '/docs/certs/coursera-vertex-flutter.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/DJU1MTK2ZBPK'],
        },
        {
          id: 'coursera-genai-dev-career',
          name: 'GenAI Dev Career',
          provider: 'IBM',
          title: 'Generative AI: Elevate your Software Development Career',
          detail: 'Aplicación de IA generativa en el ciclo de vida del desarrollo: generación de código, revisión automatizada, pruebas y aceleración del flujo DevOps.',
          obtained: 'Feb. 2026',
          image: '/docs/certs/coursera-genai-dev-career.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/VC16SASTOQPH'],
        },
        {
          id: 'coursera-genai-agents-org',
          name: 'Gen AI Agents Org',
          provider: 'Google Cloud',
          title: 'Gen AI Agents: Transform Your Organization',
          detail: 'Diseño e implementación de agentes de IA generativa para automatizar flujos empresariales y potenciar la toma de decisiones organizacionales.',
          obtained: 'Ene. 2026',
          image: '/docs/certs/coursera-genai-agents-org.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/SYLXEB4Y8XTA'],
        },
        {
          id: 'coursera-genai-intro-ibm',
          name: 'GenAI Intro & Apps',
          provider: 'IBM',
          title: 'Generative AI: Introduction and Applications',
          detail: 'Fundamentos de IA generativa: modelos de lenguaje, imagen y multimodales; casos de uso en industria y metodología para aplicarlos en entornos reales.',
          obtained: 'Ene. 2026',
          image: '/docs/certs/coursera-genai-intro-ibm.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/EBWMD7KRH80C'],
        },
        {
          id: 'coursera-ai-system-design',
          name: 'AI System Design',
          provider: 'DeepLearning.AI',
          title: 'AI-Powered Software and System Design',
          detail: 'Diseño de sistemas asistido por IA: arquitecturas modernas, patrones de integración con LLMs y mejores prácticas para construir productos inteligentes.',
          obtained: 'Ene. 2026',
          image: '/docs/certs/coursera-ai-system-design.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/QRC78KTQUZSS'],
        },
        {
          id: 'coursera-agentic-langgraph-crewai',
          name: 'LangGraph · CrewAI · AutoGen',
          provider: 'IBM',
          title: 'Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI',
          detail: 'Sistemas multi-agente con LangGraph, CrewAI, AutoGen y BeeAI: orquestación, memoria compartida, herramientas externas y flujos colaborativos autónomos.',
          obtained: 'Ene. 2026',
          image: '/docs/certs/coursera-agentic-langgraph-crewai.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/BMXXAFBM38UW'],
        },
        {
          id: 'coursera-team-sw-ai',
          name: 'Team SW Engineering AI',
          provider: 'DeepLearning.AI',
          title: 'Team Software Engineering with AI',
          detail: 'Integración de IA en equipos de ingeniería: pair programming con LLMs, revisión de código asistida, documentación automática y colaboración aumentada.',
          obtained: 'Ene. 2026',
          image: '/docs/certs/coursera-team-sw-ai.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/S9C3OGVSKXR1'],
        },
        {
          id: 'coursera-agentic-langchain',
          name: 'LangChain & LangGraph',
          provider: 'IBM',
          title: 'Agentic AI with LangChain and LangGraph',
          detail: 'Agentes inteligentes con LangChain y LangGraph: cadenas de razonamiento, grafos de estado, memoria persistente e integración con herramientas externas.',
          obtained: 'Ene. 2026',
          image: '/docs/certs/coursera-agentic-langchain.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/GJ2IYN1G7HBH'],
        },
        {
          id: 'coursera-genai-sw-intro',
          name: 'GenAI para Devs',
          provider: 'DeepLearning.AI',
          title: 'Introduction to Generative AI for Software Development',
          detail: 'Introducción práctica a la IA generativa para developers: uso de LLMs para generar, depurar y documentar código en flujos de trabajo reales.',
          obtained: 'Ene. 2026',
          image: '/docs/certs/coursera-genai-sw-intro.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/9BMY431JK8EL'],
        },
        {
          id: 'coursera-rag-langchain',
          name: 'RAG & LangChain',
          provider: 'IBM',
          title: 'Fundamentals of AI Agents Using RAG and LangChain',
          detail: 'Fundamentos de agentes con RAG (Retrieval-Augmented Generation) y LangChain: embeddings, vectorstores y pipelines de recuperación de contexto inteligente.',
          obtained: 'Ene. 2026',
          image: '/docs/certs/coursera-rag-langchain.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/G0CMRVUGVG28'],
        },
        {
          id: 'coursera-advanced-prompt',
          name: 'Advanced Prompting',
          provider: 'Vanderbilt University',
          title: 'Advanced Prompt Engineering for Everyone',
          detail: 'Técnicas avanzadas de prompt engineering: chain-of-thought, few-shot, razonamiento estructurado y estrategias para maximizar la precisión de los LLMs.',
          obtained: 'Ene. 2026',
          image: '/docs/certs/coursera-advanced-prompt.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/BF15QMATSJ9N'],
        },
        {
          id: 'coursera-genai-everyone',
          name: 'GenAI for Everyone',
          provider: 'DeepLearning.AI',
          title: 'Generative AI for Everyone',
          detail: 'Visión general de la IA generativa: qué son los LLMs, cómo funcionan y cómo integrar GenAI en proyectos y organizaciones de forma efectiva.',
          obtained: 'Ene. 2026',
          image: '/docs/certs/coursera-genai-everyone.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/N0ZU5SM70OKB'],
        },
        {
          id: 'coursera-genai-llm-aws',
          name: 'GenAI con LLMs',
          provider: 'DeepLearning.AI · AWS',
          title: 'Generative AI with Large Language Models',
          detail: 'Profundización en LLMs: arquitectura Transformer, fine-tuning, RLHF, despliegue escalable en AWS y consideraciones de rendimiento y costo en producción.',
          obtained: 'Ene. 2026',
          image: '/docs/certs/coursera-genai-llm-aws.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/1084Q98CYQ7Y'],
        },
        {
          id: 'coursera-prompt-basics',
          name: 'Prompt Engineering',
          provider: 'IBM',
          title: 'Generative AI: Prompt Engineering Basics',
          detail: 'Bases del prompt engineering: estructura de prompts, zero-shot y few-shot learning, control de salidas y buenas prácticas para obtener respuestas precisas.',
          obtained: 'Ene. 2026',
          image: '/docs/certs/coursera-prompt-basics.pdf',
          links: ['https://www.coursera.org/account/accomplishments/verify/MOIZD2RIKDXH'],
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
          links: ['https://gfi.360learning.com/api/certification/4414034767977775'],
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
          links: [],
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
          links: ['https://cursos.campusromero.pe/certificates/bbddba94b54d400abb0e48b22cc5aa4a'],
        },
      ],
    },
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
          links: []
        },
        {
          id: 'uipath-advanced',
          name: 'RPA Developer Advanced',
          provider: 'UiPath Academy',
          title: 'UiPath RPA Developer Advanced',
          detail: 'Automatización avanzada: REFramework, colas de Orchestrator, integraciones con APIs y manejo robusto de excepciones en escenarios empresariales.',
          obtained: 'Sep. 2022',
          image: '/docs/certs/rpa-advance.pdf',
          links: []
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
          links: ['https://platzi.com/p/dgutierrezvillegas565/curso/1557-course/diploma/detalle/'],
        },
        {
          id: 'platzi-symfony',
          name: 'Symfony',
          provider: 'Platzi',
          title: 'Curso de Symfony Framework',
          detail: 'Desarrollo de aplicaciones web con Symfony: arquitectura MVC, routing, Doctrine ORM, servicios, seguridad y buenas prácticas del ecosistema PHP moderno.',
          obtained: 'Marz. 2022',
          image: '/docs/certs/platzi-symfony.pdf',
          links: ['https://platzi.com/p/dgutierrezvillegas565/curso/1901-course/diploma/detalle/'],
        },
        {
          id: 'platzi-js',
          name: 'JavaScript Fundamentos',
          provider: 'Platzi',
          title: 'Curso Básico de JavaScript',
          detail: 'Bases del lenguaje JavaScript: tipos de datos, funciones, scope, closures, manipulación del DOM y fundamentos de la programación asíncrona.',
          obtained: 'Marz. 2022',
          image: '/docs/certs/platzi-basicojavascript.pdf',
          links: ['https://platzi.com/p/dgutierrezvillegas565/curso/1814-course/diploma/detalle/'],
        },
        {
          id: 'platzi-js-practico',
          name: 'JavaScript Practico',
          provider: 'Platzi',
          title: 'Curso Práctico de JavaScript',
          detail: 'Aplicación práctica de JavaScript: proyectos reales, consumo de APIs, manipulación avanzada del DOM y patrones de código limpio y reutilizable.',
          obtained: 'Abr. 2022',
          image: '/docs/certs/platzi-practicojavascript.pdf',
          links: ['https://platzi.com/p/dgutierrezvillegas565/curso/2327-course/diploma/detalle/'],
        },
        {
          id: 'platzi-codestream',
          name: 'Codestream',
          provider: 'Platzi',
          title: 'Curso de Flujo de Desarrollo Moderno CodeStream',
          detail: 'Integración de herramientas de revisión de código, colaboración en equipo y flujo de trabajo moderno con Codestream.',
          obtained: 'Abr. 2022',
          image: '/docs/certs/platzi-codestream.pdf',
          links: ['https://platzi.com/p/dgutierrezvillegas565/curso/2157-course/diploma/detalle/'],
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
          links: [],
        },
        {
          id: 'kb-java',
          name: 'Java',
          provider: 'KB Soluciones',
          title: 'Java',
          detail: 'Programación orientada a objetos con Java: clases, herencia, polimorfismo, colecciones y fundamentos de desarrollo de aplicaciones.',
          obtained: 'Nov. 2021',
          image: '/docs/certs/kb-java.pdf',
          links: [],
        },
        {
          id: 'kb-phpmysql',
          name: 'PHP y MySQL',
          provider: 'KB Soluciones',
          title: 'PHP y MySQL',
          detail: 'Desarrollo web backend con PHP y gestión de bases de datos relacionales con MySQL: consultas, procedimientos y diseño de esquemas.',
          obtained: 'Oct. 2021',
          image: '/docs/certs/kb-phpmysql.pdf',
          links: [],
        },
        {
          id: 'kb-bd',
          name: 'Modelado de BD',
          provider: 'KB Soluciones',
          title: 'Estructura y modelado de BD',
          detail: 'Principios de diseño de bases de datos: normalización, diagramas ER, integridad referencial y optimización de consultas.',
          obtained: 'Set. 2021',
          image: '/docs/certs/kb-modeladodatos.pdf',
          links: [],
        },
      ],
    },
  ],
};
