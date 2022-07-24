import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

// Constext
import { ProductContext } from "../context/ProductContextProvider";

const ProductDetails = (props) => {
  const params = useParams();
  const id = params.id;
  const data = useContext(ProductContext);
  const product = data[id - 1];
  const { category, description, image, price, title } = product;

  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span>category: </span>
          {category}
        </p>
        <div>
          <span>{price}$</span>
          <Link to="/products">Back To Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
