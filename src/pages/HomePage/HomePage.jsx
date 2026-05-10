import Footer from "../../Components/Footer/Footer.jsx";
import ProductCardList from "../../Components/ProductCard/ProductCardList.jsx";
import ProductCardSwiper from "../../Components/ProductCard/ProductCardSwiper.jsx";
import productsData from "../../data/productsData.json";
import "../../Components/ProductCard/ProductCard.css";
import Header from "/src/Components/Header/Header.jsx";
import Hero from "../../Components/Hero/Hero";
import OfferCard from "../../Components/Offercards/Offer-cards.jsx";

import ProductCatalog from "../ProductCatalog/ProductCatalog.jsx";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <OfferCard />
      <ProductCardList title="Featured Items">
        <ProductCardSwiper products={productsData.data} swiperId="featured" />
      </ProductCardList>
      <ProductCardList title="Most Popular">
        <ProductCardSwiper products={productsData.data} swiperId="popular" />
      </ProductCardList>
      <Footer />
      <ProductCatalog />
    </div>
  );
};

export default HomePage;