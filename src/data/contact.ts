export interface Contact {
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly phoneHref: string;
  readonly location: string;
}

export const CONTACT: Contact = {
  eyebrow: '// contacto',
  heading: '¿Construimos algo juntos?',
  description: 'Abierto a nuevas oportunidades como backend / full stack developer. Escríbeme y respondo a la brevedad.',
  name: 'Cesar Daniel Gutiérrez Villegas',
  email: 'dgutierrezvillegas@gmail.com',
  phone: '+51 917 845 429',
  phoneHref: '+51917845429',
  location: 'Lima, Perú',
};
