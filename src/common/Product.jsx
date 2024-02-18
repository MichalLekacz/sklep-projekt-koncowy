export const Product = (props) => {
  console.log(props);
  const { category, thumbnail, price, title } = props.product;

  return (
    <div>
      <img src={thumbnail} className="product__img"></img>
      <h3>{title}</h3>
      <h6>category: {category}</h6>
      <h6>price: {price}€</h6>
      <button>Read More</button>
    </div>
  );
};
