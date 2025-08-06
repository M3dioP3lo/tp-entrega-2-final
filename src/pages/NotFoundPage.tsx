import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1 style={{ fontSize: '3rem', color: '#d10000' }}>
        Error - 404
      </h1>
      <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '2rem' }}>
       ¡Oops! Esta página no existe
      </p>

      <img
        src="/images/capibara/perdido.webp"
        alt="Capibara perdido"
        style={{
          width: '300px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
          marginBottom: '2rem',
        }}
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
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
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
