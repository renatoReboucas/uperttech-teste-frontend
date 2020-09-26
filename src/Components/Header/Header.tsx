import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import styles from './Header.module.css';

;

const Header: React.FC = () => (
  <header className={`${styles.header} ${styles.container}`}>
    <nav className={styles.nav}>
      <div>
        <Link className={styles.titleMenu} to="/">
          UPERTTECH
        </Link>
      </div>
      <div className={styles.menuNav}>
        <NavLink
          className={styles.link}
          to="/quem-somos"
          activeClassName={styles.active}
        >
          Quem somos
        </NavLink>
        <NavLink
          className={styles.link}
          to="/servicos"
          activeClassName={styles.active}
        >
          Serviços
        </NavLink>
        <NavLink className={`${styles.link} button `} to="/login">
          Soluções
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
