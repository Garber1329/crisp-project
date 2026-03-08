import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import "./ProductPage.css";

import photos from "../../data/photos.json";
import productsData from "../../data/productsData.json";

// Локальні SVG заглушки (замість via.placeholder.com)
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='600' height='800' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%23999'%3ENo Image%3C/text%3E%3C/svg%3E";

const errorImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='600' height='800' fill='%23ffeeee'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%23ff4444'%3EError%3C/text%3E%3C/svg%3E";

export default function ProductPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  const [productData, setProductData] = useState({
    _id: null,
    brand: "",
    title: "",
    price: 0,
    oldPrice: "",
    discountedPrice: null,
    description: "",
    category: "",
    type: "",
    stock: 0,
    size: [],
    image: "",
    rating: 0,
    isNew: false
  });

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        // Завантажуємо дані з photos.json
        let productImages = [];
        
        if (photos && photos.data) {
          const product = photos.data.find((item) => item._id === 20);
          if (product && product.urls && product.urls.length > 0) {
            productImages = product.urls;
          }
        }
        
        // Якщо немає зображень, використовуємо локальну заглушку
        setImages(productImages.length > 0 ? productImages : [placeholderImage]);

        // Завантажуємо дані з productsData.json
        if (productsData) {
          let productInfo = null;
          
          if (Array.isArray(productsData)) {
            productInfo = productsData.find((item) => item._id === 20);
          } else if (productsData.data && Array.isArray(productsData.data)) {
            productInfo = productsData.data.find((item) => item._id === 20);
          } else if (productsData.products && Array.isArray(productsData.products)) {
            productInfo = productsData.products.find((item) => item._id === 20);
          }
          
          if (productInfo) {
            setProductData(productInfo);
          }
        }

        setError(null);
      } catch (err) {
        console.error("Помилка завантаження:", err);
        setError("Не вдалося завантажити дані");
        setImages([errorImage]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(prev => prev + 1);
    }
    if (type === "decrement") {
      setQuantity(prev => prev > 1 ? prev - 1 : 1);
    }
  };

  // Функція для обробки помилок завантаження зображень
  const handleImageError = (e) => {
    e.target.src = placeholderImage;
  };

  const displayPrice = productData.discountedPrice || productData.price;
  const totalPrice = (displayPrice * quantity).toFixed(2);

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert("Please select size");
      return;
    }

    if (quantity > productData.stock) {
      alert(`Only ${productData.stock} items available`);
      return;
    }

    console.log({
      productId: productData._id,
      title: productData.title,
      size: selectedSize,
      quantity,
      price: displayPrice,
      totalPrice,
      brand: productData.brand
    });
  };

  const handleSave = () => {
    console.log("Saved to wishlist", {
      productId: productData._id,
      title: productData.title
    });
  };

  const renderSizes = () => {
    if (!productData.size) return null;
    
    if (Array.isArray(productData.size)) {
      return productData.size.map((size, index) => (
        <button
          key={index}
          className={`size-btn ${selectedSize === size ? "selected" : ""}`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ));
    }
    return null;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Завантаження...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="/">Home</a>
        <span className="separator">/</span>
        <a href={`/${productData.category || 'category'}`}>
          {productData.category || 'Category'}
        </a>
        <span className="separator">/</span>
        <span>{productData.type || 'Product'}</span>
      </div>

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
                <img 
                  src={img} 
                  alt={`thumb-${index}`}
                  onError={handleImageError}
                />
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
                <img 
                  src={img} 
                  alt={`main-${index}`}
                  onError={handleImageError}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Info */}
        <div className="product-info-wrapper">
          {/* Бренд та статус NEW */}
          <div className="brand-header">
            <div className="brand">{productData.brand || "FENDI"}</div>
            {productData.isNew && <span className="new-badge">NEW</span>}
          </div>

          <h1 className="product-title">
            {productData.title || "Women Black Checked Fit and Flare Dress"}
          </h1>

          {/* Рейтинг */}
          {productData.rating > 0 && (
            <div className="rating">
              {"★".repeat(productData.rating)}
              {"☆".repeat(5 - productData.rating)}
              <span>({productData.rating})</span>
            </div>
          )}

          {/* Опис */}
          {productData.description && (
            <p className="description">{productData.description}</p>
          )}

          {/* Розміри */}
          {productData.size && productData.size.length > 0 && (
            <div className="info-section">
              <h3 className="section-title">SELECT SIZE</h3>
              <div className="size-grid">
                {renderSizes()}
              </div>
            </div>
          )}

          {/* Кількість */}
          <div className="info-section">
            <h3 className="section-title">QUANTITY</h3>
            <div className="quantity-control">
              <button 
                className="quantity-btn" 
                onClick={() => handleQuantityChange("decrement")}
              >
              −
              </button>
              <span className="quantity-value">{quantity}</span>
              <button 
                className="quantity-btn" 
                onClick={() => handleQuantityChange("increment")}
              >
              +
              </button>
            </div>
            {productData.stock > 0 && (
              <div className="stock-info">In stock: {productData.stock}</div>
            )}
          </div>

          {/* Ціна */}
          <div className="price-section">
            <div className="price-label">PRICE TOTAL</div>
            <div className="price-value">
              {productData.discountedPrice ? (
                <>
                  <span className="old-price">
                    {productData.oldPrice || productData.price} EUR
                  </span>
                  <span className="current-price">{totalPrice} EUR</span>
                  <span className="discount-badge">
                    -{Math.round((1 - productData.discountedPrice / productData.price) * 100)}%
                  </span>
                </>
              ) : (
                <span>{totalPrice} EUR</span>
              )}
            </div>
          </div>

          {/* Кнопки */}
          <div className="action-buttons">
            <button 
              className="add-to-bag" 
              onClick={handleAddToBag}
              disabled={productData.stock === 0}
            >
              {productData.stock > 0 ? "ADD TO BAG" : "OUT OF STOCK"}
            </button>
            <button className="save-btn" onClick={handleSave}>
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}