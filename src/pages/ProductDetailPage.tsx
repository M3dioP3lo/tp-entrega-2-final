import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

function ProductDetailPage() {
  const { id } = useParams();
  const { cart, handleAdd, handleRemove, totalItems, totalPrice } = useCart();

  const product = products.find((p) => p.id === id);
  const quantity = product ? cart[product.id] || 0 : 0;

  if (!product) {
    return (
      <div>
        <Navbar cartCount={totalItems} totalPrice={totalPrice} />
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <h2>Producto no encontrado</h2>
          <p>Verificá el enlace o volvé al inicio.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar cartCount={totalItems} totalPrice={totalPrice} />
      <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'contain',
            marginBottom: '1rem',
          }}
        />
        <h2>{product.name}</h2>
        <p style={{ fontSize: '1.2rem', color: '#444' }}>
          {product.description}
        </p>
        <h3>Precio: ${product.price.toLocaleString()}</h3>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button onClick={() => handleAdd(product.id)}>+</button>
          {quantity > 0 && (
            <button onClick={() => handleRemove(product.id)}>-</button>
          )}
        </div>

        {quantity > 0 && (
          <p style={{ marginTop: '0.5rem' }}>
            En carrito: <strong>{quantity}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductDetailPage;
