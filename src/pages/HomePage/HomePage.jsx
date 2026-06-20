import Blog from '../../Components/Blog/Blog';
import postsData from '../../data/postsData.json';
import Footer from '../../Components/Footer/Footer.jsx';
import '../../Components/ProductCard/ProductCard.css';
import ProductCatalog from '../ProductCatalog/ProductCatalog.jsx';
import ProductCardList from '../../Components/ProductCard/ProductCardList.jsx';
import ProductCardSwiper from '../../Components/ProductCard/ProductCardSwiper.jsx';
import productsData from '../../data/productsData.json';
import Header from '/src/Components/Header/Header.jsx';
import Hero from '../../Components/Hero/Hero';
import OfferCard from '../../Components/Offercards/Offer-cards.jsx';
import Brands from '../../Components/Brands/Brands-logo.jsx';
import ShopFilters from '../../Components/ShopFilters/ShopFilters.jsx';
import CartPage2 from '../CartPage/CartPage2.jsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Brands />
      <OfferCard />
      <ShopFilters />
      <ProductCardList title="Featured Items">
        <ProductCardSwiper products={productsData.data} swiperId="featured" />
      </ProductCardList>
      <ProductCardList title="Most Popular">
        <ProductCardSwiper products={productsData.data} swiperId="popular" />
      </ProductCardList>
      <Blog data={postsData ? postsData.data : []} />
    </>
  );
};

export default HomePage;
