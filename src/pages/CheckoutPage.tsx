import { useState } from 'react';
import { useCart } from '../context/CartContext';
import styles from '../components/CarritoCompras.module.css';
import { productsDB } from '../MOCKS/ecommerce/db';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    email: '',
  });
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const cartItems = Object.entries(cart).map(([id, qty]) => ({
    id,
    quantity: qty,
  }));

  const getProductById = (id) => {
    return productsDB.find((p) => p.id.toString() === id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompraFinalizada(true);
    clearCart();
  };

  const getPriceById = (id) => {
    const product = productsDB.find((p) => p.id.toString() === id);
    return product?.price || 0;
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => {
      return sum + getPriceById(item.id) * item.quantity;
    }, 0);
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.checkoutTitle}>Finalizar Compra</h2>

      {compraFinalizada ? (
        <div>
          <h3>✅ ¡Gracias por su compra!</h3>
          <p>Recibirá un correo con los detalles.</p>
        </div>
      ) : cartItems.length === 0 ? (
        <p>
          🛒 El carrito está vacío. Agregue productos antes de finalizar la
          compra.
        </p>
      ) : (
        <>
          <div className={styles.itemCard}>
            <h3>Resumen del pedido</h3>
            {cartItems.map((item) => {
              const product = getProductById(item.id);
              return (
                <div key={item.id} style={{ marginBottom: '0.5rem' }}>
                  <p>
                    <strong>{product?.title || 'Producto'}</strong> —{' '}
                    {item.quantity} unidad(es)
                  </p>
                  <p>
                    Subtotal: $
                    {(item.quantity * (product?.price || 0)).toFixed(2)}
                  </p>
                </div>
              );
            })}

            <hr />
            <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
              Total a abonar: ${getTotalPrice().toFixed(2)}
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.checkoutForm}>
            <label>
              Nombre:
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Dirección:
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" className={styles.buttonLink}>
              Confirmar Compra
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
