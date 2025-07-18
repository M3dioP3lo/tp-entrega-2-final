import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cart, handleAdd, handleRemove, totalPrice, totalItems } = useCart();

  const items = Object.entries(cart).map(([id, qty]) => {
    const product = products.find((p) => p.id === id);
    if (!product) return null;
    return (
      <div key={id} style={{ borderBottom: '1px solid #ccc', padding: '0rem' }}>
        <h3>{product.name}</h3>
        <p>Cantidad: {qty}</p>
        <p>Precio unitario: ${product.price.toLocaleString()}</p>
        <p>Total: ${(product.price * qty).toLocaleString()}</p>
        <button onClick={() => handleAdd(id)}>+</button>
        <button onClick={() => handleRemove(id)}>-</button>
      </div>
    );
  });

  return (
    <div>
      <Navbar cartCount={totalItems} totalPrice={totalPrice} />
      <div style={{ padding: '0rem' }}>
        <h1>Carrito de compras</h1>
        {items.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            {items}
            <hr />
            <h2>Total general: ${totalPrice.toLocaleString()}</h2>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/checkout" style={{ marginRight: '1rem' }}>
                Finalizar compra
              </Link>
              <Link to="/">Seguir comprando</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
