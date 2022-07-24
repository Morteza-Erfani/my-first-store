import React, { createContext, useEffect, useState } from "react";

// API
import { getProduct } from "../services/api";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProduct());
    };

    fetchAPI();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={Products}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
