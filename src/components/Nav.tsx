import { useState } from 'react';
import { useTheme } from '../context/useTheme';
import { Icon } from './ui/Icon';
import { Button } from './ui/Button';
import { NAV_LINKS } from '../data/nav';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`nav${isOpen ? ' is-open' : ''}`} id="nav">
      <div className="container nav__inner">
        <a href="/" className="nav__logo">
          ~/daniel<span className="nav__cursor">_</span>
        </a>

        <nav className="nav__links" id="navLinks">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            aria-pressed={isDark}
          >
            <Icon id="sun" className="icon-sun" />
            <Icon id="moon" className="icon-moon" />
          </button>

          <Button variant="primary" href="#contacto" className="nav__cta">
            Contactar
          </Button>

          <button
            className="nav__toggle"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <Icon id="menu" className="icon--menu" />
            <Icon id="close" className="icon--close" />
          </button>
        </div>
      </div>
    </header>
  );
}
