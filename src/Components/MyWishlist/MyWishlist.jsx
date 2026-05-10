import { Component } from "react";
import axios from "axios";
import "./MyWishlist.css";

const WISHLIST_URL = "https://fakestoreapiserver.reactbd.org/api/wishlists/6";
const PRODUCTS_URL = "https://fakestoreapiserver.reactbd.org/api/products";

class MyWishlist extends Component {
  state = {
    products: [],
    loading: true
  }

  async componentDidMount() {
    try {
    const getWishlist = await axios.get(WISHLIST_URL);
    const productIds = getWishlist.data.productIds;

    const promises = productIds.map((id) => axios.get(`${PRODUCTS_URL}/${id}`));

    const responses = await Promise.all(promises);

    const selectedProducts = responses.map((response) => response.data);

    this.setState({
        products: selectedProducts,
        loading: false,
      });

    } catch (error) {
      console.error("Помилка завантаження:", error);
      this.setState({ loading: false });
    }
  }

    render () {
      const { products, loading } = this.state;
      if (loading) return <p>Loading...</p>;

        return (
          <div className="wishlist-root">
            <div className="wishlist-container">
              {products.map((product) => (
              <div key={product._id} className="wishlist-card">
                <div className="image-wrapper">
                  <img src={product.image} alt={product.title} />
                  <button className="change-btn"><img src="/images/MyWishlist.svg" alt="" /></button>
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
}

export default MyWishlist;