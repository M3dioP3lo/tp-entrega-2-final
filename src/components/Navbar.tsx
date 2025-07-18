import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

type Props = {
  cartCount: number;
  totalPrice: number;
};

function Navbar({ cartCount, totalPrice }: Props) {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <img
          src="/images/Logo/Logo.svg"
          alt="Logo ComprasOnline"
          className={styles.logoIcon}
        />
        <span className={styles.logoText}>ComprasOnline</span>
      </Link>

      <ul className={styles.links}>
        <li>
          <Link to="/">🏠 Inicio</Link>
        </li>
        <li>
          <Link to="/carrito" className={styles.cartIcon}>
            🛒 Carrito ({cartCount})
          </Link>
        </li>
        <li>
          <Link to="/checkout">✅ Finalizar</Link>
        </li>
      </ul>

      <div className={styles.total}>
        <img
          src="/images/icons/carrito.jpg"
          alt="Carrito"
          style={{ width: '32px', marginRight: '1.5rem' }}
        />
        Total: ${totalPrice.toLocaleString()}
      </div>
    </nav>
  );
}

export default Navbar;
