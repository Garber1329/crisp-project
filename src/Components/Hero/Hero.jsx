import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./hero.css";
import Container from '../Container.jsx';
// import Icon from "./Icon.jsx"; // commented out — replaced with inline SVGs below
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
    <Container>
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
          {/* Original Icon component commented out and replaced with inline SVGs */}
          {/* <Icon name="arrow-right" className="icon icon-arrow-right" width="20px" height="20px"></Icon> */}
          <svg className="custom-next" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.48505 0.707153L1.4142 7.778L8.48504 14.8488" stroke="white" strokeWidth="2" />
          </svg>
          {/* <Icon name="arrow-left" className="icon icon-arrow-right" width="20px" height="20px"></Icon> */}
          <svg className="custom-prev" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M0.707092 14.8488L7.77794 7.77791L0.707095 0.707061" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
      </Container>
    </>
  );
};

export default Hero;
