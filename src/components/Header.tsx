import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import styles from './Navbar.module.css';

export default function Header({ cartCount}: Props) {
  return (
    <header className="main-header">
      <Link to="/" className={styles.logo}>
        <img
          src="/images/Logo/Logo.svg"
          alt="Logo ComprasOnline"
          className={styles.logoIcon}
        />
        <span className={styles.logoText}>Todo lo que querés, a un clic de distancia!</span>
      </Link>
      <nav className="nav-buttons">
        <Link to="/" className="nav-button">
          <i className="fas fa-home"></i> Inicio
        </Link>
        <Link to="/carrito" className="nav-button">
          <i className="fas fa-shopping-cart"></i> Carrito ({cartCount})
        </Link>
        <Link to="/checkout" className="nav-button">
          <i className="fas fa-check-circle"></i> Finalizar
        </Link>
      </nav>
    </header>
  );
}
