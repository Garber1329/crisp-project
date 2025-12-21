import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductCardSwiper = ({ products, swiperId }) => {

    const prevClass = `swiper-button-prev-${swiperId}`;
    const nextClass = `swiper-button-next-${swiperId}`;

    const defaultSettings = {
        spaceBetween: 31,
        slidesPerView: 4,
        slidesPerGroup: 4,
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20, slidesPerGroup: 2 },
            1024: { slidesPerView: 5, spaceBetween: 31, slidesPerGroup: 5 },
        },

        navigation: {
            nextEl: `.${nextClass}`,
            prevEl: `.${prevClass}`,
        },
        modules: [Navigation],
    };

    return (
        <div className="product-card__swiper">
            <div className="product-card__nav">
                <button  className={`product-card__btn-prev ${prevClass} `}>{`<`}</button>
                <button  className={`product-card__btn-next ${nextClass} `}>{`>`}</button>
            </div>

            <Swiper {...defaultSettings}>
                {products.map((product) => (
                    <SwiperSlide key={product._id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCardSwiper;