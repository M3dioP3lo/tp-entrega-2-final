import { createContext, useContext, useState, useEffect } from 'react';
import { productsDB } from '../MOCKS/ecommerce/db';

interface CartContextValue {
  cart: { [id: string]: number };
  cartItems: { id: string; quantity: number }[];
  handleAdd: (id: string) => void;
  handleRemove: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<{ [id: string]: number }>({});

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch {
        setCart({});
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAdd = (id: string) => {
    setCart((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  const handleRemove = (id: string) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) updated[id] -= 1;
      else delete updated[id];
      return updated;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = productsDB.find((p) => p.id.toString() === id);
    return sum + (product?.price || 0) * qty;
  }, 0);

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const cartItems = Object.entries(cart).map(([id, quantity]) => ({
    id,
    quantity,
  }));

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        handleAdd,
        handleRemove,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

