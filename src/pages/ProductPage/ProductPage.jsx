import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import "./ProductPage.css";

// ✅ Імпорт твого JSON
import photos from "../../data/photos.json";

export default function ProductGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);

      // 🔥 Знаходимо товар по _id
      const product = photos.data.find((item) => item._id === 1);

      if (product && product.urls) {
        setImages(product.urls);
      } else {
        setImages([
          "https://via.placeholder.com/600x800?text=No+Image",
        ]);
      }

      setError(null);
    } catch (err) {
      console.error("Помилка:", err);
      setError("Не вдалося завантажити зображення");
      setImages([
        "https://via.placeholder.com/600x800?text=Error+Loading",
      ]);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="gallery-container loading">
        <div className="loading-spinner">Завантаження...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gallery-container error">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="gallery-container">
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
        thumbs={{ swiper: thumbsSwiper }}
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
  );
}