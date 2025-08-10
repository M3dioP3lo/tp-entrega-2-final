import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';
import styles from '../components/CartPage.module.css';
import { productService } from '../MOCKS/ecommerce/service';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { handleAdd, handleRemove, cart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await productService.getProductById(id);
        setProduct(result);
      } catch (error) {
        setProduct(null);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className={styles.cartContainer}>
        <h2>Producto no encontrado</h2>
      </div>
    );
  }

  const quantity = cart[product.id.toString()] || 0;

  return (
    <div className={styles.cartContainer}>
      <div className={styles.itemCard}>
        <h3>{product.name}</h3>
        <div className={styles.itemDetails}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '580px',
              height: '580px',
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              marginRight: '20px',
            }}
          />
          <div className={styles.descriptionBox}>
            <h4 className={styles.descriptionTitle}>Descripción del Producto</h4>
            <p className={styles.descriptionText}>{product.description}</p>
            <p className={styles.priceText}>Precio: ${product.price}</p>

            <div className={styles.controls}>
              <button
                onClick={() => handleAdd(product.id.toString())}
                className={styles.buttonLink}
              >
                Agregar al carrito
              </button>

              {quantity > 0 && (
                <button
                  onClick={() => handleRemove(product.id.toString())}
                  className={styles.buttonLink}
                >
                  Quitar
                </button>
              )}
            </div>

            {quantity > 0 && (
              <p style={{ marginTop: '10px' }}>
                En el carrito: <strong>{quantity}</strong>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

};

export default ProductDetailPage;