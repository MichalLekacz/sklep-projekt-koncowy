import React from "react";
import { useParams } from "react-router-dom";

export const ProductScreen = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Screen {id}</h1>
    </div>
  );
};

export default ProductScreen;
