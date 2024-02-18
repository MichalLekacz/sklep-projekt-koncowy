import "./App.css";
import { Product } from "./common/Product";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);

      const productData = res.data;

      setProducts(productData);
    };
    fetchData();
  }, []);

  return (
    <>
      <ul className="list__wrapper">
        {products.map((product) => (
          <li key={product.id} className="list__item">
            <Product product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
