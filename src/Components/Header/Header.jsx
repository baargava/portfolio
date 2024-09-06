import { Container } from './stylesHead';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Resume from '../../assets/Resume_ReactJs_2y.pdf';
import { NavLink } from 'react-router-dom';

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <NavLink to="/" >
        <span className="logo">{"<Baargava/>"}</span>
      </NavLink>

      <nav className={isActive ? 'active' : ''}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/projects" onClick={closeMenu}>
          Projects
        </NavLink>
        <a href={Resume} download className="button">
          Resume
        </a>
      </nav>

      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => setActive(!isActive)}
      ></div>
    </Container>
  );
}
