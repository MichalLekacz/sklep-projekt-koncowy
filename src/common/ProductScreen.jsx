import React from "react";
import { useParams } from "react-router-dom";
import { Product } from "./Product";

export const ProductScreen = (props) => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Screen {id}</h1>
    </div>
  );
};

export default ProductScreen;
