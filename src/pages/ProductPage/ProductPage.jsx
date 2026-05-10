import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import Coments from '/src/Components/Coments/Coments.jsx'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import "./ProductPage.css";

// Локальні SVG заглушки
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='600' height='800' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%23999'%3ENo Image%3C/text%3E%3C/svg%3E";

const errorImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='600' height='800' fill='%23ffeeee'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%23ff4444'%3EError%3C/text%3E%3C/svg%3E";

export default function ProductPage() {
  // 1. Розбиваємо state на окремі хуки useState
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
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

  // Функція для отримання продукту
  const fetchArticles = async () => {
    setLoading(true);
    setError(null);

    try {
      // Використовуємо fetch замість axios
      const response = await fetch('https://fakestoreapiserver.reactbd.org/api/products/20');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const product = await response.json();

      // Маппінг даних з API на структуру нашого компоненту
      const mappedProduct = {
        _id: product._id,
        brand: product.brand || "FENDI",
        title: product.title || "Women Black Checked Fit and Flare Dress",
        price: product.price || 0,
        oldPrice: product.oldPrice || "",
        discountedPrice: product.discountedPrice || null,
        description: product.description || "",
        category: product.category || "",
        type: product.type || "",
        stock: product.stock || 10,
        size: product.size || ['XS', 'S', 'M', 'L', 'XL'],
        image: product.image || "",
        rating: product.rating || 4,
        isNew: product.isNew || false
      };

      setProductData(mappedProduct);

      // Обробка зображень
      let productImages = [];
      if (mappedProduct.image) {
        productImages = [mappedProduct.image];
      }
      
      // Додаємо додаткові зображення, якщо вони є
      if (product.additionalImages && Array.isArray(product.additionalImages)) {
        productImages = [...productImages, ...product.additionalImages];
      }

      setImages(productImages.length > 0 ? productImages : [placeholderImage]);

    } catch (err) {
      setError(err.message);
      console.error("Error fetching product:", err);
      setImages([errorImage]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(prev => prev + 1);
    }
    if (type === "decrement") {
      setQuantity(prev => prev > 1 ? prev - 1 : 1);
    }
  };

  const handleImageError = (e) => {
    e.target.src = placeholderImage;
  };

  const displayPrice = productData.discountedPrice || productData.price;
  const totalPrice = (displayPrice * quantity).toFixed(2);

  const handleAddToBag = () => {
    if (!selectedSize && productData.size && productData.size.length > 0) {
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
    if (!productData.size || !Array.isArray(productData.size)) return null;
    
    return productData.size.map((size, index) => (
      <button
        key={index}
        className={`size-btn ${selectedSize === size ? "selected" : ""}`}
        onClick={() => setSelectedSize(size)}
      >
        {size}
      </button>
    ));
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
        <div className="error-message">Помилка: {error}</div>
        <button onClick={fetchArticles} className="retry-btn">
          Спробувати знову
        </button>
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
          <div className="brand-header">
            <div className="brand">{productData.brand}</div>
            {productData.isNew && <span className="new-badge">NEW</span>}
          </div>

          <h1 className="product-title">{productData.title}</h1>

          {productData.rating > 0 && (
            <div className="rating">
              {"★".repeat(Math.floor(productData.rating))}
              {"☆".repeat(5 - Math.floor(productData.rating))}
              <span>({productData.rating})</span>
            </div>
          )}

          {productData.description && (
            <p className="description">{productData.description}</p>
          )}

          {productData.size && productData.size.length > 0 && (
            <div className="info-section">
              <h3 className="section-title">SELECT SIZE</h3>
              <div className="size-grid">
                {renderSizes()}
              </div>
            </div>
          )}

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
    
      <div className="prodact-pages-section2">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Product Details
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Product description:</strong> {productData.description || "No description available."}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Size Guide
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Available sizes: {productData.size && Array.isArray(productData.size) ? productData.size.join(', ') : 'Standard sizes apply'}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Shipping & Returns
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Free shipping on orders over 50 EUR. Returns accepted within 30 days.
              </div>
            </div>
          </div>
           <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                Comments
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Comments:</strong> 
                <Coments id={4}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}