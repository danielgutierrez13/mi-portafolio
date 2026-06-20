export interface SkillGroup {
  readonly id: string;
  readonly label: string;
  readonly chips: string[];
}

export interface Stack {
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly metrics: { num: string; label: string }[];
  readonly skills: SkillGroup[];
}

export const STACK: Stack = {
  eyebrow: '// stack-tecnologico',
  heading: 'Stack técnico',
  description: 'Tecnologías con las que diseño, construyo, despliego y monitoreo software, organizadas como un panel de estado.',
  metrics: [
    { num: '30+', label: 'tecnologías en uso' },
    { num: '8+', label: 'empresas / clientes' },
    { num: '4+', label: 'años de experiencia' },
  ],
  skills: [
    { id: 'lenguajes', label: '// lenguajes', chips: ['Java', 'PHP', 'TypeScript', 'JavaScript', 'Dart', 'C++', '.Net'] },
    { id: 'frontend', label: '// frontend', chips: ['HTML', 'SCSS', 'CSS', 'Angular', 'React', 'Flutter'] },
    { id: 'backend', label: '// backend & automatizacion', chips: ['Spring Boot', 'Symfony', 'Express JS', '.Net Framework', 'RPA UiPath'] },
    { id: 'cloud', label: '// cloud & devops', chips: ['Azure', 'AWS', 'Docker', 'Git & GitHub', 'GitHub Actions', 'Dependabot', 'GitHub Projects'] },
    { id: 'db', label: '// bases-de-datos', chips: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Oracle'] },
    { id: 'calidad', label: '// calidad & monitoreo', chips: ['Jira', 'SonarQube', 'Grafana', 'Swagger Hub'] },
  ],
};
