import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./hero.css";
import Icon from "./Icon.jsx";
import Data from "../../data/photos.json";

const Hero = () => {
  const titles = [
    "SUMMER SALE GET 30% OFF On all dress",
    "WINTER COLLECTION Stay Warm & Stylish Up to 40% OFF",
    "NEW ARRIVALS Elegant Dresses Special Price −25%",
    "HOLIDAY SALE Shine at Every Party Get 30% OFF",
  ]
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        centeredSlides={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: ".custom-paginate",
          clickable: true,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        direction="horizontal"
        loop={true}
        speed={300}
      >
        {Data.data.map((item, index) => (
          <SwiperSlide key={item._id}>
            <img src={item.url} alt={item.title} />
            <h2>{titles[index]}</h2>
            <button>Shop now</button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-buttons">
        <div className="custom-paginate"></div>
        <div className="swipers">
          <Icon name="arrow-right" className="icon icon-arrow-right" width="20px" height="20px"></Icon>
          <Icon name="arrow-left" className="icon icon-arrow-right" width="20px" height="20px"></Icon>
        </div>
      </div>
    </>
  );
};

export default Hero;
