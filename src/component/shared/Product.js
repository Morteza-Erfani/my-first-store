import React from "react";
import {Link} from 'react-router-dom';

// Functions
import { shorter } from "../../helpers/functions";

const Product = ({ productData }) => {
  return (
    <div>
      <img src={productData.image} alt="product" style={{ width: "200px" }} />
      <h3>{shorter(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>Detail</Link>
        <div>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
