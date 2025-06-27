import React from "react";
import styles from "./FilterPanel.module.css";

type Props = {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: (val: string[]) => void;
  selectedPrice: string;
  setSelectedPrice: (val: string) => void;
};

function FilterPanel({
  categories,
  selectedCategories,
  setSelectedCategories,
  selectedPrice,
  setSelectedPrice,
}: Props) {
  const toggleCategory = (cat: string) => {
    setSelectedCategories(
      selectedCategories.includes(cat)
        ? selectedCategories.filter((c) => c !== cat)
        : [...selectedCategories, cat]
    );
  };

  return (
    <div className={styles.panel}>
      <div>
        <strong>Categoría:</strong>
        {categories.map((cat) => (
          <label key={cat} className={styles.checkbox}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </div>
      <div>
        <strong>Precio:</strong>
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="<1000000">Menos de $1.000.000</option>
          <option value="1000000-2000000">$1.000.000 a $2.000.000</option>
          <option value=">2000000">Más de $2.000.000</option>
        </select>
      </div>
    </div>
  );
}

export default FilterPanel;
