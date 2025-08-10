import { useCart } from '../context/CartContext';
import { Product } from '../types/Product';
import styles from './ProductCard.module.css';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { cart, handleAdd, handleRemove } = useCart();

  const productId = product.id.toString();
  const quantity = cart[productId] || 0;

  return (
    <div className={styles.card}>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>

      {quantity === 0 ? (
        <button
          onClick={() => handleAdd(productId)}
          className={styles.button}
        >
          Agregar al carrito
        </button>
      ) : (
        <div className={styles.controls}>
          <button onClick={() => handleRemove(productId)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleAdd(productId)}>+</button>
        </div>
      )}
    </div>
  );
}
