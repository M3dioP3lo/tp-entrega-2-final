import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/CarritoCompras.module.css';
import { productService } from '../MOCKS/ecommerce/service';

export default function CartPage() {
  const { cart, handleAdd, handleRemove, totalPrice } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await productService.getAllProducts();
      setProducts(result);
    };
    fetchProducts();
  }, []);

  const getProductById = (id) => {
    return productsDB.find((p) => p.id.toString() === id);
  };

  const cartItems = Object.entries(cart)
    .map(([id, qty]) => {
      const product = products.find((p) => p.id.toString() === id);
      return product ? { ...product, qty } : null;
    })
    .filter(Boolean);

  if (cartItems.length === 0) {
    return (
      <div className={styles.totalSection}>
        <h1>Tu carrito está vacío 🛒</h1>
        <div className={styles.links}>
          <Link to="/" className={styles.buttonLink}>
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Carrito de Compras
      </h1>

      {cartItems.map((product) => (
        <div key={product.id} className={styles.itemCard}>
          <div className={styles.itemDetails}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />

            <div className={styles.productContent}>
              <h3 className={styles.productTitle}>{product.title}</h3>

              <div className={styles.priceSection}>
                <p>Precio: ${product.price}</p>
                <p>Subtotal: ${(product.price * product.qty).toFixed(2)}</p>

                <div className={styles.controls}>
                  <button onClick={() => handleRemove(product.id.toString())}>
                    −
                  </button>
                  <span>{product.qty}</span>
                  <button onClick={() => handleAdd(product.id.toString())}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.totalSection}>
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <div className={styles.links}>
          <Link to="/checkout" className={styles.buttonLink}>
            Finalizar compra
          </Link>
          <Link to="/" className={styles.buttonLink}>
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  );
}
