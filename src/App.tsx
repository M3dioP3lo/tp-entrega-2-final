import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Navbar from './components/Navbar';
import { useCart } from './context/CartContext';
import Header from './components/Header';
import CreateProductPage from './pages/CreateProductPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const { totalPrice, totalItems } = useCart();

  return (
    <>
      <Header cartCount={totalItems} />
      <Navbar totalPrice={totalPrice} />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/producto/:id" element={<ProductDetailPage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/crear-producto" element={<CreateProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
