import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import styles from '../components/CartPage.module.css';

function CheckoutPage() {
  const { cart, totalPrice, totalItems, clearCart } = useCart();
  const [confirmed, setConfirmed] = useState(false);
  const [buyer, setBuyer] = useState({ nombre: '', email: '', direccion: '' });
  const [totalPagado, setTotalPagado] = useState(0);

  const handleConfirm = () => {
    if (!buyer.nombre || !buyer.email || !buyer.direccion) {
      alert('Por favor completá todos los datos');
      return;
    }
    setTotalPagado(totalPrice);
    setConfirmed(true);
    clearCart();
  };

  if (confirmed) {
    return (
      <div>
        <Navbar cartCount={0} totalPrice={0} />
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <h1>¡Gracias por tu compra, {buyer.nombre}!</h1>
          <p>Recibirás la confirmación en: {buyer.email}</p>
          <p>Enviaremos los productos a: {buyer.direccion}</p>
          <h2>Total pagado: ${totalPagado.toLocaleString()}</h2>
          <Link to="/">
            <button className={styles.buttonLink} style={{ marginTop: '1rem' }}>
              ⏎ Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar cartCount={totalItems} totalPrice={totalPrice} />
      <div style={{ padding: '1rem', maxWidth: '600px', margin: 'auto' }}>
        <h1 style={{ textAlign: 'center' }}>Checkout</h1>

        <h3>Resumen del pedido:</h3>
        <ul>
          {Object.entries(cart).map(([id, qty]) => {
            const product = products.find((p) => p.id === id);
            if (!product) return null;
            return (
              <li key={id}>
                {product.name} x {qty} ($
                {(product.price * qty).toLocaleString()})
              </li>
            );
          })}
        </ul>

        <h3>Total: ${totalPrice.toLocaleString()}</h3>
        <hr />

        <h3>Datos del comprador:</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={buyer.nombre}
          onChange={(e) => setBuyer({ ...buyer, nombre: e.target.value })}
          style={{
            display: 'block',
            marginBottom: '1rem',
            width: '100%',
            padding: '0.5rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={buyer.email}
          onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
          style={{
            display: 'block',
            marginBottom: '1rem',
            width: '100%',
            padding: '0.5rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="text"
          placeholder="Dirección"
          value={buyer.direccion}
          onChange={(e) => setBuyer({ ...buyer, direccion: e.target.value })}
          style={{
            display: 'block',
            marginBottom: '1rem',
            width: '100%',
            padding: '0.5rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button className={styles.buttonLink} onClick={handleConfirm}>
            Confirmar compra
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link to="/">
            <button className={styles.buttonLink}>
              ← Volver y seguir comprando
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
