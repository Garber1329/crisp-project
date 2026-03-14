import { useEffect, useState } from "react";
import axios from "axios";
import { GrEdit } from "react-icons/gr";
import "./MyWishlist.css";

const WISHLIST_URL = "https://fakestoreapiserver.reactbd.org/api/wishlists/1";
const PRODUCTS_URL = "https://fakestoreapiserver.reactbd.org/api/products";

function MyWishlist() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchWishlist = async () => {
      try {
        const wishlistResponse = await axios.get(WISHLIST_URL);
        const productIds = wishlistResponse.data.productIds;

        const promises = productIds.map((id) => axios.get(`${PRODUCTS_URL}/${id}`));
        const responses = await Promise.all(promises);
        const selectedProducts = responses.map((response) => response.data);
        
        setProducts(selectedProducts);
      } catch (error) {
      console.error("Помилка завантаження:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWishlist();
  });

      if (loading) return <p>Loading...</p>;

        return (
          <div className="wishlist-root">
            <div className="wishlist-container">
              {products.map((product) => (
              <div key={product._id} className="wishlist-card">
                <div className="image-wrapper">
                  <img src={product.image} alt={product.title} />
                  <button className="change-btn"><GrEdit size={10} /></button>
                  <button className="delete-btn">✕</button>
                </div>

                <h3>{product.title}</h3>
                <p>{product.price} EUR</p>

                <div>
                  <span className="amount">1</span>
                  <button className="add-btn">ADD TO CART</button>
                </div>  
              </div>
              ))}
            </div>
            
            <div className="actions">
              <button>SHARE WISH LIST</button>
              <button>UPDATE WISH LIST</button>
              <button>ADD ALL TO CART</button>
            </div>
        </div>
  );
}

export default MyWishlist;