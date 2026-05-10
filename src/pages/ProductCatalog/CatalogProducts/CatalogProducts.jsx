import css from "./CatalogProducts.module.css";

function ProductItem({ image, title, price, type }) {
  return (
    <div className={css.productItem}>
      <img src={image} alt={title} className={css.productItem__photo} />
      <div className={css.productItem__productInfo}>
        <span className={css.productItem__type}>{type}</span>
        <span className={css.productItem__title}>{title}</span>
        <span className={css.productItem__price}> {price},00 EUR </span>
      </div>
    </div>
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
