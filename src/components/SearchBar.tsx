import React from "react";
import styles from "./SearchBar.module.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: Props) {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Buscar productos..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
