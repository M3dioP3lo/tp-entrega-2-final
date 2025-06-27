import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

type Props = {
  category: string;
  products: Product[];
  cart: { [id: string]: number };
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
  isOffersView?: boolean;
};

function ProductList({
  category,
  products,
  cart,
  onAdd,
  onRemove,
  isOffersView = false,
}: Props) {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{category}</h2>
      <div className={styles.row}>
        {products.map((p) => (
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