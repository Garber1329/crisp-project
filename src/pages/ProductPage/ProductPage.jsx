import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import "./ProductPage.css";

import photos from "../../data/photos.json";

export default function ProductPage() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [productData] = useState({
    brand: "FENDI",
    title: "Women Black Checked Fit and Flare Dress",
    price: 90,
    productCode: "8HXK024",
    tags: ["NEW ARRIVALS", "TOP RICHES"],
   
    sizes: [
      "XS","S", "M", "L", "XL", "XXL"
    ]
  });

  useEffect(() => {
    try {

      setLoading(true);

      if (!photos || !photos.data) {
        throw new Error("JSON structure error");
      }

      const product = photos.data.find((item) => item._id === 1);

      if (product && product.urls) {
        setImages(product.urls);
      } else {
        setImages([
          "https://via.placeholder.com/600x800?text=No+Image"
        ]);
      }

      setError(null);

    } catch (err) {

      console.error(err);

      setError("Не вдалося завантажити зображення");

      setImages([
        "https://via.placeholder.com/600x800?text=Error"
      ]);

    } finally {
      setLoading(false);
    }

  }, []);

  const handleQuantityChange = (type) => {

    if (type === "increment") {
      setQuantity(prev => prev + 1);
    }

    if (type === "decrement") {
      setQuantity(prev => prev > 1 ? prev - 1 : 1);
    }

  };

  const totalPrice = (productData.price * quantity).toFixed(2);

  const handleAddToBag = () => {

    if (!selectedSize) {
      alert("Please select size");
      return;
    }

    console.log({
      product: productData.title,
      color: selectedColor,
      size: selectedSize,
      quantity,
      totalPrice
    });

  };

  const handleSave = () => {
    console.log("Saved to wishlist");
  };

  if (loading) {
    return <div className="loading">Завантаження...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (

    <div className="product-page">

      <div className="product-container">

        {/* Gallery */}

        <div className="product-gallery-wrapper">

          <Swiper
            onSwiper={setThumbsSwiper}
            direction="vertical"
            spaceBetween={5}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="gallery-thumbs"
          >

            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`thumb-${index}`} />
              </SwiperSlide>
            ))}

          </Swiper>


          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[Navigation, Thumbs]}
            className="gallery-main"
          >

            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`main-${index}`} />
              </SwiperSlide>
            ))}

          </Swiper>

        </div>


        {/* Info */}

        <div className="product-info-wrapper">

          <div className="brand">{productData.brand}</div>

          <h1>{productData.title}</h1>

          

          {/* Sizes */}

          <div>

            <h3>SELECT SIZE</h3>

            <div className="size-grid">

              {productData.sizes.map((size, index) => (

                <button
                  key={index}
                  className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>

              ))}

            </div>

          </div>


          {/* Quantity */}

          <div>

            <h3>QUANTITY</h3>

            <div className="quantity-control">

              <button onClick={() => handleQuantityChange("decrement")}>−</button>

              <span>{quantity}</span>

              <button onClick={() => handleQuantityChange("increment")}>+</button>

            </div>

          </div>


          {/* Price */}

          <div className="price">

            <div>PRICE TOTAL</div>

            <div>{totalPrice} EUR</div>

          </div>


          {/* Buttons */}

          <div className="action-buttons">

            <button onClick={handleAddToBag}>
              ADD TO BAG
            </button>

            <button onClick={handleSave}>
              SAVE
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}