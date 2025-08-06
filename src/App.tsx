import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import { useCart } from './context/CartContext';

function App() {
  const { totalItems } = useCart();

  return (
    <div>
      <Header cartCount={totalItems} />
      <AppRoutes />
    </div>
  );
}

export default App;
