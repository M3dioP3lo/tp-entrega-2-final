import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import { products as productsData } from './data/products';
import styles from './components/App.module.css';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

function App() {
  const [cart, setCart] = useState<{ [id: string]: number }>({});
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [showOffers, setShowOffers] = useState(false);

  const handleAdd = (id: string) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRemove = (id: string) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const allCategories = Array.from(
    new Set(productsData.map((p) => p.category))
  );

  const filteredProducts = productsData.filter((p) => {
    const matchName = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(p.category);
    const matchPrice =
      selectedPrice === '' ||
      (selectedPrice === '<1000000' && p.price < 1000000) ||
      (selectedPrice === '1000000-2000000' &&
        p.price >= 1000000 &&
        p.price <= 2000000) ||
      (selectedPrice === '>2000000' && p.price > 2000000);

    return matchName && matchCategory && matchPrice;
  });

  const filteredOffers: Product[] = allCategories
    .map((cat) => {
      const inCategory = filteredProducts.filter((p) => p.category === cat);
      if (inCategory.length === 0) return null;
      return inCategory.reduce(
        (min, p) => (p.price < min.price ? p : min),
        inCategory[0]
      );
    })
    .filter((p): p is Product => p !== null);

  const grouped = (showOffers ? filteredOffers : filteredProducts).reduce(
    (acc: Record<string, Product[]>, p) => {
      acc[p.category] = acc[p.category] || [];
      if (acc[p.category].length < 7) acc[p.category].push(p);
      return acc;
    },
    {} as Record<string, Product[]>
  );

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = productsData.find((p) => p.id === id);
    return sum + (product?.price || 0) * qty;
  }, 0);

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className={styles.app}>
      <Navbar cartCount={totalItems} totalPrice={total} />
      <div className={styles.controls}>
        <SearchBar value={search} onChange={setSearch} />
        <FilterPanel
          categories={allCategories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
        <button
          onClick={() => setShowOffers(!showOffers)}
          className={styles.button}
        >
          {showOffers ? 'Ver Todos' : 'Ofertas'}
        </button>
      </div>
      <Container>
        {Object.keys(grouped).length === 0 ? (
          <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
            <h3 style={{ color: '#333', opacity: 0.7 }}>
              No se encontraron productos con esos filtros.
            </h3>
          </div>
        ) : (
          Object.entries(grouped).map(([cat, prods]) => (
            <ProductList
              key={cat}
              category={cat}
              products={prods}
              cart={cart}
              onAdd={handleAdd}
              onRemove={handleRemove}
              isOffersView={showOffers}
            />
          ))
        )}
      </Container>
    </div>
  );
}

export default App;
