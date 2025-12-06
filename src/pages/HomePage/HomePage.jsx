import Footer from "../../Components/Footer/Footer";
import ProductCardList from "../../Components/ProductCard/ProductCardList"
import ProductCardSwiper from "../../Components/ProductCard/ProductCardSwiper"
import productsData from "../../data/productsData.json"
import '../../Components/ProductCard/ProductCard.css'
import Hero from "../../Components/Hero/Hero";
import Header from "../../Components/Header/Header";
import OfferCard from "../../Components/Offercards/Offer-cards";

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Hero />
        <OfferCard />
        <ProductCardList title="Featured Items">
            <ProductCardSwiper products={productsData.data} swiperId="featured" /> 
        </ProductCardList>
        <ProductCardList title="Most Popular">
            <ProductCardSwiper products={productsData.data} swiperId="popular" />
        </ProductCardList>
        <Footer />
    </div>
    )
}

export default HomePage