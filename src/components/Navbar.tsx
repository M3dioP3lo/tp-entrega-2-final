import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

type Props = {
  cartCount: number;
  totalPrice: number;
};

function Navbar({ totalPrice }: Props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.total}>
      <i className="fas fa-shopping-cart"></i>
        -Total: ${totalPrice.toLocaleString()}
      </div>
    </nav>
  );
}

export default Navbar;
