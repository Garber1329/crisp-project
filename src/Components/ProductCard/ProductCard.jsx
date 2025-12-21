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
        <div className="product-card">
            <div className="product-card__img-wrp">
                {hasDiscount && (
                    <span className="product-card__discount">-{discountPercentage}%</span>
                )}

                <img className="product-card__image" src={image} alt={title} />
            </div>

            <p className="product-card__category">{category || "TOP WOMAN"}</p>

            <p className="product-card__description">{description}</p>

            <div className="product-card__price-wrp">
                <span className="product-card__price">{currentPrice},00 EUR</span>

                {hasDiscount && (
                    <span className="product-card__oldPrice">
                        <del className="product-card__oldPrice">{originalPrice},00 EUR</del>
                    </span>
                )}
            </div>
        </div>
    );
};
export default ProductCard;
