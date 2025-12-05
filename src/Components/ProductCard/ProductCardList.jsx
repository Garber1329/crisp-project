const ProductCardList = ({ title, children }) => {

    return (
        <div className="product-card__list">
            <h2>{title}</h2>
            {children}
        </div>
    )

};

export default ProductCardList;