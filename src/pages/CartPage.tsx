import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import styles from '../components/CartPage.module.css';

function CartPage() {
  const { cart, handleAdd, handleRemove, totalPrice, totalItems } = useCart();

  const items = Object.entries(cart).map(([id, qty]) => {
    const product = products.find((p) => p.id === id);
    if (!product) return null;
    return (
      <div key={id} className={styles.itemCard}>
        <h3>{product.name}</h3>
        <div className={styles.itemDetails}>
          <p>Cantidad: {qty}</p>
          <p>Precio unitario: ${product.price.toLocaleString()}</p>
          <p>Total: ${(product.price * qty).toLocaleString()}</p>
        </div>
        <div className={styles.controls}>
          <button onClick={() => handleAdd(id)}>➕</button>
          <button onClick={() => handleRemove(id)}>➖</button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Navbar cartCount={totalItems} totalPrice={totalPrice} />
      <div style={{ padding: '1rem', maxWidth: '800px', margin: 'auto' }}>
        <h1 style={{ textAlign: 'center' }}>Carrito de compras</h1>
        {items.length === 0 ? (
          <p style={{ textAlign: 'center' }}>Tu carrito está vacío.</p>
        ) : (
          <>
            {items}
            <hr />
            <div className={styles.totalSection}>
              <h2>Total general: ${totalPrice.toLocaleString()}</h2>
              <div className={styles.links}>
                <Link to="/checkout">
                  <button className={styles.buttonLink}>
                    Finalizar compra
                  </button>
                </Link>
                <Link to="/">
                  <button className={styles.buttonLink}>
                    Seguir comprando
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
