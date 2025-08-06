import { useState } from 'react';
import { products as productsData } from '../data/products';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import Container from '../components/Container';
import ProductList from '../components/ProductList';
import { useCart } from '../context/CartContext';
import panelStyles from '../components/ControlPanel.module.css';
// import filterStyles from '../components/FilterPanel.module.css'; no lo borro por las dudas

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

function ProductListPage() {
  const { cart, handleAdd, handleRemove, totalItems, totalPrice } = useCart();

  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [showOffers, setShowOffers] = useState(false);

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

  return (
    <div>
      <Navbar cartCount={totalItems} totalPrice={totalPrice} />
      <div style={{ padding: '2rem' }}>
        <div className={panelStyles.controlPanel}>
          <div className={panelStyles.searchBar}>
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <div className={panelStyles.filters}>
            <FilterPanel
              categories={allCategories}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
            />
          </div>
          <button
            className={panelStyles.ofertasButton}
            onClick={() => setShowOffers(!showOffers)}
          >
            {showOffers ? 'Ver todos' : 'Ofertas Imperdibles'}
          </button>
        </div>
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
            />
          ))
        )}
      </Container>
    </div>
  );
}

export default ProductListPage;
