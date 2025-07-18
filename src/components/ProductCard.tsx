import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

type Props = {
  product: Product;
  quantity: number;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
};

const ProductCard: React.FC<Props> = ({ product, quantity, onAdd, onRemove }) => {
  return (
    <div className={styles.card}>
      <Link to={`/producto/${product.id}`} className={styles.link}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
      </Link>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>${product.price.toLocaleString()}</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "0.8rem" }}>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => onAdd(product.id)}
        >
          Agregar
        </button>

        {quantity > 0 && (
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => onRemove(product.id)}
          >
            Quitar
          </button>
        )}
      </div>

      {quantity > 0 && (
        <p style={{ marginTop: "0.5rem", fontWeight: "normal", fontSize: "0.9rem" }}>
          En carrito: <strong>{quantity}</strong>
        </p>
      )}
    </div>
  );
};

export default ProductCard;