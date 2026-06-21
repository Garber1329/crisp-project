import { motion, AnimatePresence } from "framer-motion";
import css from "./CatalogProducts.module.css";
import { Link } from "react-router-dom";

function ProductItem({ images = [], title, price, type, id, _id }) {
  const productId = id ?? _id;
  const imageSrc = images[0] || "";

  return (
    <Link to={`/product/${productId}`} className={css.productItem}>
      <img src={imageSrc} alt={title} className={css.productItem__photo} />
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
      <AnimatePresence mode="popLayout">
        {products.map((product, index) => {
          const productId = product.id ?? product._id ?? index;

          return (
            <motion.div
              key={productId}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ProductItem {...product} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
