import { Link } from "react-router-dom";

export const Product = (props) => {
  console.log(props);
  const { id, category, thumbnail, price, title, stock } = props.product;

  return (
    <div>
      <img src={thumbnail} className="product__img"></img>
      <h3>{title}</h3>
      <h3></h3>
      <p>category: {category}</p>
      <p>price: {price}€</p>
      <p>stock: {stock}</p>
      <Link to={`./ProductScreen/${id}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
};
