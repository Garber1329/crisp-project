import css from "./CatalogProducts.module.css";
import { Link } from "react-router-dom";

function ProductItem({ image, title, price, type }) {
  return (
    <Link to={`/product/:id`} className={css.productItem}>
      <img src={image} alt={title} className={css.productItem__photo} />
      <div className={css.productItem__productInfo}>
        <span className={css.productItem__type}>{type}</span>
        <span className={css.productItem__title}>{title}</span>
        <span className={css.productItem__price}> {price},00 EUR </span>
      </div>
    </Link>
  );
}

export default function CatalogProducts({ products = [] }) {
  return (
    <div className={css.catalogProducts}>
      {products.map((product) => {
        return <ProductItem key={product._id} {...product} />;
      })}
    </div>
  );
}
