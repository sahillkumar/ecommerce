import React from "react";
import styles from "./styles.module.scss";
import Filters from "./Filters";
import Sorter from "./Sorter";
import AllProducts from "./AllProducts";

function Shop() {
  return (
    <div className={styles.shop}>
      <Filters />
      <Sorter />
      <AllProducts />
    </div>
  );
}

export default Shop;
