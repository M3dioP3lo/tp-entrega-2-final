import { Link } from 'react-router-dom';
import styles from '../components/CartPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>Error - 404</h1>
      <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '2rem' }}>
        ¡Oops! Esta página no existe
      </p>

      <img
        src="/images/capibara/perdido.webp"
        alt="Capibara perdido"
        className={styles.notFoundImage}
      />

      <div>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            padding: '0.8rem 1.6rem',
            backgroundColor: '#0077cc',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            boxShadow: '0 2px 6px rgba(2,2,2,2.2)',
            transition: '0.3s ease',
          }}
        >
          ⏎ Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
