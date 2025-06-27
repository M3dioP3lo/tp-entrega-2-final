import React from "react";
import styles from "./Navbar.module.css";

type Props = {
  cartCount: number;
  totalPrice: number;
};


const Navbar = ({ cartCount, totalPrice }: Props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/images/Logo/Logo.svg" alt="Compras OnLine" />
      </div>
      <div className={styles.cart}>
        🛒 {cartCount} - ${totalPrice.toLocaleString()}
      </div>
    </nav>
  );
};

export default Navbar;