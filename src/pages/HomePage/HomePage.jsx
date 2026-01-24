import Blog from "../../Components/Blog/Blog"
import postsData from "../../data/postsData.json"
import Footer from "../../Components/Footer/Footer.jsx";
import ProductCardList from "../../Components/ProductCard/ProductCardList.jsx"
import ProductCardSwiper from "../../Components/ProductCard/ProductCardSwiper.jsx"
import productsData from "../../data/productsData.json"
import Header from '/src/Components/Header/Header.jsx'
import Hero from "../../Components/Hero/Hero";
import OfferCard from "../../Components/Offercards/Offer-cards.jsx";
import Brands from '../../Components/Brands/Brands-logo.jsx';


import Banner1 from "../../Components/Banners/banner1.jsx";
import Banner2 from "../../Components/Banners/banner2.jsx";

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Hero />
        <Brands />
        <OfferCard />
        <ProductCardList title="Featured Items">
            <ProductCardSwiper products={productsData.data} swiperId="featured" /> 
        </ProductCardList>
        <ProductCardList title="Most Popular">
            <ProductCardSwiper products={productsData.data} swiperId="popular" />
        </ProductCardList>
        <Banner1/>
      <Banner2/>
          <Blog data={postsData ? postsData.data : []} />
        <Footer />
    </div>
    )
}

export default HomePage