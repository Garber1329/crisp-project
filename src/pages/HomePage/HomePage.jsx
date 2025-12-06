import Footer from "../../Components/Footer/Footer";
import ProductCardList from "../../Components/ProductCard/ProductCardList"
import ProductCardSwiper from "../../Components/ProductCard/ProductCardSwiper"
import productsData from "../../data/productsData.json"
import '../../Components/ProductCard/ProductCard.css'


const HomePage = () => {
  return (
    <div>
        <h1>Welcome to the Home Page</h1>

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