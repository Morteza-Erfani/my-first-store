import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";

// Component
import Product from "./shared/Product";

// Styles
import styles from "./Store.module.css";

const Store = () => {
  const products = useContext(ProductContext);

  return (
    <div
      className={styles.container}
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
