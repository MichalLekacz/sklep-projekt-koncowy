export const Product = (props) => {
  console.log(props);
  const { category, thumbnail, price, title, stock } = props.product;

  return (
    <div>
      <img src={thumbnail} className="product__img"></img>
      <h3>{title}</h3>
      <p>category: {category}</p>
      <p>price: {price}€</p>
      <p>stock: {stock}</p>
      <button>Read More</button>
    </div>
  );
};
