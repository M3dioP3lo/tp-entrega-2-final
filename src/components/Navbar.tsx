import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

type Props = {
  totalPrice?: number;
};

function Navbar({ totalPrice = 0 }: Props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.total}>
        <i className="fas fa-shopping-cart"></i>
        &nbsp;Total: ${totalPrice.toLocaleString()}
      </div>
      <Link to="/crear-producto" className={styles.navButton}>
        Crear producto
      </Link>
    </nav>
  );
}

export default Navbar;
