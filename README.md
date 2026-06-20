# Portafolio — Cesar Daniel Gutiérrez Villegas · Software Engineer

Portafolio profesional personal de una sola página (SPA) construido con React 19 y TypeScript. Presenta experiencia laboral, proyectos, stack técnico, formación académica y certificaciones, con soporte de tema oscuro/claro y animaciones de scroll reveal.

---

## ✨ Características

- Tema oscuro / claro persistido en `localStorage` con transición sin parpadeo
- Animaciones de entrada mediante `IntersectionObserver` (scroll reveal)
- Carrusel táctil de imágenes con soporte swipe en móvil y flag de confidencialidad
- Lightbox accesible nativo (`<dialog>`) para certificados, diplomas, proyectos y constancias
- Timeline de experiencia profesional con indicador de estado activo
- Grid de proyectos con historial de releases y control de visibilidad por confidencialidad
- Grid de capacitaciones agrupadas por proveedor con chip interactivo y detalle en lightbox
- Layout de formación en columna única con cert-grid de 3 columnas responsivo
- Diseño responsivo adaptado a móvil, tablet y escritorio
- SVG sprite inline — sin peticiones externas de iconos
- Interfaces TypeScript co-ubicadas con sus datos en `src/data/` — sin barrel files
- Tipado estricto en todo el proyecto (`strict: true`, `noUnusedLocals`, `noUnusedParameters`)
- Cero dependencias de librerías de UI externas — CSS vanilla con design tokens
- Suite de tests unitarios con Vitest + Testing Library (121 tests)

---

## 🛠️ Tecnologías

| Tecnología                   | Versión |
|------------------------------|---------|
| React                        | 19.2.6  |
| React DOM                    | 19.2.6  |
| TypeScript                   | 6.0.3   |
| Vite                         | 8.0.12  |
| @vitejs/plugin-react         | 6.0.1   |
| Vitest                       | latest  |
| @testing-library/react       | latest  |
| ESLint                       | 10.3.0  |
| typescript-eslint            | 8.61.1  |

---

## 📋 Prerrequisitos

- Node.js 20 o superior
- npm 10 o superior

---

## 📦 Dependencias

### Producción

| Dependencia | Versión | Licencia | Propósito                                    |
|-------------|---------|----------|----------------------------------------------|
| react       | ^19.2.6 | MIT      | Biblioteca de UI declarativa con hooks       |
| react-dom   | ^19.2.6 | MIT      | Renderizado de React en el DOM del navegador |

### Desarrollo

| Dependencia                   | Versión  | Licencia   | Propósito                                               |
|-------------------------------|----------|------------|---------------------------------------------------------|
| typescript                    | ^6.0.3   | Apache-2.0 | Tipado estático y verificación en tiempo de compilación |
| vite                          | ^8.0.12  | MIT        | Bundler y servidor de desarrollo con HMR                |
| @vitejs/plugin-react          | ^6.0.1   | MIT        | Fast Refresh y JSX transform para Vite                  |
| @types/react                  | ^19.2.14 | MIT        | Tipos TypeScript para React                             |
| @types/react-dom              | ^19.2.3  | MIT        | Tipos TypeScript para React DOM                         |
| vitest                        | latest   | MIT        | Runner de tests unitarios compatible con Vite           |
| @vitest/coverage-v8           | latest   | MIT        | Cobertura de código mediante V8                         |
| @testing-library/react        | latest   | MIT        | Utilidades de render y queries para tests de React      |
| @testing-library/user-event   | latest   | MIT        | Simulación de interacciones reales de usuario           |
| @testing-library/jest-dom     | latest   | MIT        | Matchers adicionales para el DOM en Vitest              |
| jsdom                         | latest   | MIT        | Entorno DOM simulado para tests                         |
| eslint                        | ^10.3.0  | MIT        | Linter de código estático                               |
| @eslint/js                    | ^10.0.1  | MIT        | Reglas ESLint para JavaScript                           |
| typescript-eslint             | ^8.61.1  | MIT        | Reglas ESLint para TypeScript                           |
| eslint-plugin-react-hooks     | ^7.1.1   | MIT        | Reglas de uso correcto de hooks de React                |
| eslint-plugin-react-refresh   | ^0.5.2   | MIT        | Compatibilidad de componentes con Fast Refresh          |
| globals                       | ^17.6.0  | MIT        | Variables globales del entorno browser para ESLint      |

---

## 🚀 Scripts

| Comando                 | Descripción                                                  |
|-------------------------|--------------------------------------------------------------|
| `npm run dev`           | Inicia el servidor de desarrollo con HMR en `localhost:5173` |
| `npm run build`         | Compila TypeScript y genera el bundle de producción          |
| `npm run preview`       | Previsualiza el bundle de producción localmente              |
| `npm run lint`          | Ejecuta ESLint sobre todos los archivos del proyecto         |
| `npm test`              | Ejecuta la suite completa de tests (una sola pasada)         |
| `npm run test:watch`    | Ejecuta los tests en modo watch (re-ejecuta en cambios)      |
| `npm run test:coverage` | Genera reporte de cobertura de código en `coverage/`         |

---

## 📁 Estructura del Proyecto

```
mi-portafolio/
├── public/
│   ├── favicon.svg                      # Favicon estilo terminal (> _)
│   └── docs/                            # Diplomas, certificados y constancias (PDF/imagen)
├── src/
│   ├── main.tsx                         # Entry point — monta <App> con StrictMode
│   ├── App.tsx                          # Raíz: ThemeProvider + secciones de la página
│   ├── index.css                        # Punto de entrada de estilos (@imports)
│   ├── vite-env.d.ts                    # Referencia de tipos para Vite
│   │
│   ├── data/                            # Interfaces + constantes co-ubicadas por sección
│   │   ├── nav.ts                       # NavLink · NAV_LINKS
│   │   ├── hero.ts                      # HeroMeta, Hero · HERO
│   │   ├── about.ts                     # AboutFact, Language, About · ABOUT
│   │   ├── stack.ts                     # SkillGroup, Stack · STACK
│   │   ├── experience.ts                # ExperienceItem · EXPERIENCE
│   │   ├── projects.ts                  # Release, ProjectItem, Projects · PROJECTS
│   │   ├── education.ts                 # Degree, Cert, CertGroup, Education · EDUCATION
│   │   └── contact.ts                   # Contact · CONTACT
│   │
│   ├── context/
│   │   ├── ThemeContext.ts              # Definición del contexto de tema
│   │   ├── ThemeProvider.tsx            # Proveedor: persiste tema en localStorage
│   │   └── useTheme.ts                  # Hook consumidor del contexto de tema
│   │
│   ├── hooks/
│   │   ├── useScrollReveal.ts           # IntersectionObserver genérico para animaciones
│   │   └── useCarousel.ts               # Lógica de estado del carrusel de imágenes
│   │
│   ├── components/
│   │   ├── Nav.tsx                      # Navegación sticky + menú móvil + theme toggle
│   │   ├── Footer.tsx                   # Pie de página
│   │   ├── SVGSprite.tsx                # Sprite SVG inline con todos los iconos
│   │   │
│   │   ├── layout/
│   │   │   ├── Container.tsx            # Wrapper de ancho máximo
│   │   │   └── Section.tsx              # Wrapper de sección con variantes
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx               # Botón polimórfico (ancla o button)
│   │   │   ├── Chip.tsx                 # Chip + ChipRow
│   │   │   ├── Eyebrow.tsx              # Etiqueta decorativa estilo mono
│   │   │   ├── Icon.tsx                 # Referencia al sprite SVG
│   │   │   ├── Lightbox.tsx             # Modal accesible nativo <dialog>
│   │   │   └── SectionHead.tsx          # Eyebrow + h2 + descripción
│   │   │
│   │   └── sections/
│   │       ├── Hero/
│   │       │   ├── Hero.tsx             # Sección principal con pitch y API card
│   │       │   └── ApiCard.tsx          # Tarjeta decorativa estilo JSON
│   │       ├── About/
│   │       │   └── About.tsx            # Monograma, datos, idiomas y bio
│   │       ├── Stack/
│   │       │   └── Stack.tsx            # Métricas y grid de habilidades
│   │       ├── Experience/
│   │       │   └── Experience.tsx       # Timeline con constancias laborales
│   │       ├── Projects/
│   │       │   ├── Projects.tsx         # Grid de tarjetas de proyecto
│   │       │   ├── ProjectLightbox.tsx  # Modal: carrusel + releases + detalle
│   │       │   └── Carousel.tsx         # Carrusel con swipe táctil
│   │       ├── Education/
│   │       │   ├── Education.tsx        # Grados + capacitaciones + lightboxes
│   │       │   └── CertLightbox.tsx     # Modal: imagen/PDF de certificado
│   │       └── Contact/
│   │           └── Contact.tsx          # Terminal decorativa + botones de contacto
│   │
│   ├── test/                            # Tests unitarios — espejo de src/
│   │   ├── setup.ts                     # Configuración global: @testing-library/jest-dom
│   │   ├── context/
│   │   │   └── ThemeProvider.test.tsx
│   │   ├── hooks/
│   │   │   └── useCarousel.test.ts
│   │   ├── layout/
│   │   │   ├── Container.test.tsx
│   │   │   └── Section.test.tsx
│   │   ├── ui/
│   │   │   ├── Button.test.tsx
│   │   │   ├── Chip.test.tsx
│   │   │   ├── Eyebrow.test.tsx
│   │   │   ├── Icon.test.tsx
│   │   │   ├── Lightbox.test.tsx
│   │   │   └── SectionHead.test.tsx
│   │   └── sections/
│   │       ├── Footer.test.tsx
│   │       ├── Nav.test.tsx
│   │       ├── Hero/Hero.test.tsx
│   │       ├── About/About.test.tsx
│   │       ├── Stack/Stack.test.tsx
│   │       ├── Experience/Experience.test.tsx
│   │       ├── Projects/Carousel.test.tsx
│   │       ├── Projects/Projects.test.tsx
│   │       ├── Education/CertLightbox.test.tsx
│   │       ├── Education/Education.test.tsx
│   │       └── Contact/Contact.test.tsx
│   │
│   └── styles/
│       ├── base.css                     # Tokens CSS, dark mode, reset, keyframes
│       ├── layout.css                   # Contenedor, sección, reveal
│       ├── ui/
│       │   ├── button.css
│       │   ├── chip.css
│       │   ├── eyebrow.css
│       │   ├── section-head.css
│       │   ├── lightbox.css
│       │   └── carousel.css
│       └── sections/
│           ├── nav.css
│           ├── hero.css
│           ├── about.css
│           ├── stack.css
│           ├── experience.css
│           ├── projects.css
│           ├── education.css
│           ├── contact.css
│           └── footer.css
│
├── index.html                           # Shell HTML — lang="es"
├── vite.config.js                       # Configuración de Vite + Vitest
├── tsconfig.json                        # Configuración TypeScript strict
├── eslint.config.js                     # Configuración ESLint flat config
└── package.json                         # Dependencias y scripts
```

---

## 🧪 Tests

La suite de tests cubre todos los componentes, hooks y contexto:

| Archivo de test                              | Tests   |
|----------------------------------------------|---------|
| `context/ThemeProvider.test.tsx`             | 6       |
| `hooks/useCarousel.test.ts`                  | 7       |
| `layout/Container.test.tsx`                  | 3       |
| `layout/Section.test.tsx`                    | 6       |
| `ui/Button.test.tsx`                         | 7       |
| `ui/Chip.test.tsx`                           | 7       |
| `ui/Eyebrow.test.tsx`                        | 2       |
| `ui/Icon.test.tsx`                           | 4       |
| `ui/Lightbox.test.tsx`                       | 7       |
| `ui/SectionHead.test.tsx`                    | 5       |
| `sections/Footer.test.tsx`                   | 4       |
| `sections/Nav.test.tsx`                      | 6       |
| `sections/Hero/Hero.test.tsx`                | 8       |
| `sections/About/About.test.tsx`              | 6       |
| `sections/Stack/Stack.test.tsx`              | 5       |
| `sections/Experience/Experience.test.tsx`    | 6       |
| `sections/Projects/Carousel.test.tsx`        | 7       |
| `sections/Projects/Projects.test.tsx`        | 5       |
| `sections/Education/CertLightbox.test.tsx`   | 8       |
| `sections/Education/Education.test.tsx`      | 6       |
| `sections/Contact/Contact.test.tsx`          | 6       |
| **Total**                                    | **121** |

---

## 📞 Contacto

| Campo             | Valor                           |
|-------------------|---------------------------------|
| **Desarrollador** | Cesar Daniel Gutiérrez Villegas |
| **Correo**        | dgutierrezvillegas@gmail.com    |
| **Ubicación**     | Lima, Perú                      |
