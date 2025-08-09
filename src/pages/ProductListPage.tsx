import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { productService } from '../MOCKS/ecommerce/service';
import { Link } from 'react-router-dom';
import styles from '../components/CartPage.module.css';

const ProductListPage = () => {
  const { handleAdd, handleRemove, cartItems } = useCart();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const result = await productService.getAllProducts();
        setProducts(result);
      } catch (err) {
        setError('Error al cargar productos');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter
      ? product.category === categoryFilter
      : true;
    return matchesSearch && matchesCategory;
  });

  if (sortOption === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'name-az') {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === 'name-za') {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (loading) {
    return (
      <div className={styles.cartContainer}>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.cartContainer}>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    );
  }

  const categories = [...new Set(products.map((product) => product.category))];

  const getQuantityInCart = (productId: string) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const traducciones: { [key: string]: string } = {
    electronics: 'Electrónicos',
    clothing: 'Ropa y Accesorios',
    home: 'Hogar y Cocina',
  };

  return (
    <>
      <div className={styles.cartContainer}>
        <h2>Lista de Productos</h2>

        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '0.5rem', marginRight: '1rem' }}
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{ padding: '0.5rem' }}
          >
            <option value="">Todas las categorías</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {traducciones[cat] || cat}
              </option>
            ))}
          </select>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={{ padding: '0.5rem', marginLeft: '1rem' }}
          >
            <option value="">Ordenar por...</option>
            <option value="price-low">Precio: menor a mayor</option>
            <option value="price-high">Precio: mayor a menor</option>
            <option value="name-az">Nombre: A-Z</option>
            <option value="name-za">Nombre: Z-A</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {filteredProducts.length === 0 ? (
            <p>No se encontraron productos.</p>
          ) : (
            filteredProducts.map((product) => {
              const quantity = getQuantityInCart(product.id.toString());

              return (
                <div
                  key={product.id}
                  className={styles.itemCard}
                  style={{ width: '300px' }}
                >
                  <h3>{product.title}</h3>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                  <p>{product.description}</p>
                  <p>Precio: ${product.price}</p>
                  <p>
                    Categoría:{' '}
                    {traducciones[product.category] || product.category}
                  </p>

                  <div className={styles.controls}>
                    <button
                      onClick={() => handleAdd(product.id.toString())}
                      className={styles.buttonLink}
                    >
                      +
                    </button>
                    <span style={{ margin: '0 0.5rem' }}>{quantity}</span>
                    <button
                      onClick={() => handleRemove(product.id.toString())}
                      className={styles.buttonLink}
                      disabled={quantity === 0}
                    >
                      -
                    </button>
                  </div>

                  <div className={styles.detailButtonWrapper}></div>
                  <Link
                    to={`/producto/${product.id}`}
                    className={styles.detailButton}
                  >
                    Ver detalle
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
