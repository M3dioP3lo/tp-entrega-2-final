import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function CheckoutPage() {
  const { cart, totalPrice, totalItems } = useCart();
  const [confirmed, setConfirmed] = useState(false);
  const [buyer, setBuyer] = useState({ nombre: '', email: '', direccion: '' });

  const handleConfirm = () => {
    if (!buyer.nombre || !buyer.email || !buyer.direccion) {
      alert('Por favor completá todos los datos');
      return;
    }
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div>
        <Navbar cartCount={totalItems} totalPrice={totalPrice} />
        <div style={{ padding: '0rem', textAlign: 'center' }}>
          <h1>¡Gracias por tu compra, {buyer.nombre}!</h1>
          <p>Recibirás la confirmación en: {buyer.email}</p>
          <p>Enviaremos los productos a: {buyer.direccion}</p>
          <h2>Total pagado: ${totalPrice.toLocaleString()}</h2>
          <Link to="/" style={{ marginTop: '1rem', display: 'inline-block' }}>
            ⏎ Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar cartCount={totalItems} totalPrice={totalPrice} />
      <div style={{ padding: '0rem', maxWidth: '600px', margin: 'auto' }}>
        <h1>Checkout</h1>

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
          style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={buyer.email}
          onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
          style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
        />
        <input
          type="text"
          placeholder="Dirección"
          value={buyer.direccion}
          onChange={(e) => setBuyer({ ...buyer, direccion: e.target.value })}
          style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
        />

        <button onClick={handleConfirm}>Confirmar compra</button>
        <Link to="/" style={{ display: 'block', marginTop: '1rem' }}>
          ← Volver y seguir comprando
        </Link>
      </div>
    </div>
  );
}

export default CheckoutPage;
