import styles from "./ProductCard.module.css";

const ProductCard = ({product = {}}) => {
    const {
        _id,
        image,
        title,
        price,
        oldPrice,
        category,
        description,
        discountedPrice,
    } = product;

    const currentPrice = discountedPrice || price;
    const originalPrice = parseInt(oldPrice) || price;
    const hasDiscount = oldPrice && currentPrice < originalPrice;

    const discountPercentage = hasDiscount
        ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
        : null;

    return (
        <div className={styles["product-card"]}>
            <div className={styles["product-card__img-wrp"]}>
                {hasDiscount && (
                    <span className={styles["product-card__discount"]}>-{discountPercentage}%</span>
                )}

                <img className={styles["product-card__image"]} src={image} alt={title} />
            </div>

            <p className={styles["product-card__category"]}>{category || "TOP WOMAN"}</p>

            <p className={styles["product-card__description"]}>{description}</p>

            <div className={styles["product-card__price-wrp"]}>
                <span className={styles["product-card__price"]}>{currentPrice},00 EUR</span>

                {hasDiscount && (
                    <span className={styles["product-card__oldPrice"]}>
                        <del className={styles["product-card__oldPrice"]}>{originalPrice},00 EUR</del>
                    </span>
                )}
            </div>
        </div>
    );
};
export default ProductCard;
