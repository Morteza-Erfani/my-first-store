import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";

// Component
import Product from "./shared/Product";

const Store = () => {
  const products = useContext(ProductContext);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
