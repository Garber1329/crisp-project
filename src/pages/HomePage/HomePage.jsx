import Blog from "../../Components/Blog/Blog"
import postsData from "../../data/postsData.json"
import ProductCardList from "../../Components/ProductCard/ProductCardList.jsx"
import ProductCardSwiper from "../../Components/ProductCard/ProductCardSwiper.jsx"
import productsData from "../../data/productsData.json"
import Hero from "../../Components/Hero/Hero";
import OfferCard from "../../Components/Offercards/Offer-cards.jsx";
import Brands from '../../Components/Brands/Brands-logo.jsx';
import ShopFilters from "../../Components/ShopFilters/ShopFilters.jsx";
import Banner1 from "../../Components/Banners/banner1.jsx";
import Banner2 from "../../Components/Banners/banner2.jsx";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Brands />
            <OfferCard />
            <ShopFilters />
            <Banner1 />
            <ProductCardList title="Featured Items">
                <ProductCardSwiper products={productsData.data} swiperId="featured" />
            </ProductCardList>
            <ProductCardList title="Most Popular">
                <ProductCardSwiper products={productsData.data} swiperId="popular" />
            </ProductCardList>

            <Banner2 />

            <Blog data={postsData ? postsData.data : []} />
        </div>
    )
}

export default HomePage