import "./App.css";
import { Product } from "./common/Product";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Pobierz dane z dummyjson za pomocą Axios
        const res = await axios.get(
          "https://dummyjson.com/products?limit=9&select=category,thumbnail,price,title,stock"
        );
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <span className="list__loader"></span>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const productsToRender = products.products.map((product, index) => (
    <li key={index} className="list__item">
      <Product product={product} />
    </li>
  ));

  return (
    <>
      <ul className="list__wrapper">{productsToRender}</ul>
    </>
  );
}

export default App;
