import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

type Props = {
  category: string;
  cart: { [id: string]: number };
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
  isOffersView?: boolean;
};

function ProductList({
  category,
  cart,
  onAdd,
  onRemove,
}: Props) {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;


  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{category}</h2>
      <div className={styles.row}>
        {filteredProducts.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            quantity={cart[p.id] || 0}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
