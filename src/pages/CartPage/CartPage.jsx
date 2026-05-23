import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "/src/Components/Header/Header.jsx";
import CartTable from "../../Components/Cart/CartTable.jsx";
import CartBtn from "../../Components/Cart/CartBtn";
import Footer from "../../Components/Footer/Footer.jsx";

import "./CartPage.css";
import {
  CartPageWrp,
  CartPageTitle,
  CartTableWrp,
  CartContentWrp,
} from "./CartPage.styles.js";

// const initialItems = [
//   {
//     _id: 3,
//     title: "Compact fashion t-shirt",
//     isNew: true,
//     oldPrice: "70",
//     price: 55.99,
//     discountedPrice: 50.39,
//     description:
//       "Lorem ipsumドル sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//     category: "women",
//     type: "t-shirt",
//     stock: 100,
//     brand: "TrendyTees",
//     size: "M",
//     image: "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg",
//     rating: 3,
//     quantity: 1,
//   },
//   {
//     _id: 4,
//     title: "Blue jins",
//     isNew: true,
//     oldPrice: "70",
//     price: 50,
//     discountedPrice: 45,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//     category: "women",
//     type: "jeans",
//     stock: 75,
//     brand: "DenimCo",
//     size: "32",
//     image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg",
//     rating: 3,
//     quantity: 1,
//   },
// ];

class CartPage extends Component {
  state = {
    cartItems: [],
    error: null,
    openShipping: false,
    country: "USA",
    city: "",
  };

  countries = {
    USA: ["Alaska", "California", "Florida", "New York", "Texas"],
    Ukraine: ["Dnipro", "Kharkiv", "Kyiv", "Lviv", "Odesa"],
    Germany: ["Berlin", "Hamburg", "Munich", "Stuttgart"],
    Australia: [
      "Adelaide",
      "Brisbane",
      "Canberra",
      "Melbourne",
      "Perth",
      "Sydney",
    ],
  };

  getCartItems = async () => {
    const response = await axios.get("https://fakestoreapiserver.reactbd.org/api/cart/2");
    return response.data.products;
  };

  componentDidMount() {
    this.fetchCartItems();
  }

  fetchCartItems = async () => {
    try {
      const cartData = await this.getCartItems();

      const promises = cartData.map((item) => {

        return axios.get(`https://fakestoreapiserver.reactbd.org/api/products/${item.productId}`);

      });

      const responses = await Promise.all(promises);
      const productInfo = responses.map((response, index) => {
        return {
          _id: response.data._id,
          title: response.data.title,
          price: response.data.price,
          image: response.data.image,
          quantity: cartData[index].quantity
        };
      });

      // const Example = cartData.map((item) => {
      //   return {
      //     _id: item.productId,
      //     quantity: item.quantity,
      //     title: `Product ID: ${item.productId}`, // Заглушка 
      //     price: 25.00, // Заглушка

      //   };
      // });

      this.setState({
        cartItems: productInfo,
        error: null
      })
    } catch (error) {
      console.error("Помилка завантаження даних:", error);
      console.error("Помилка завантаження даних:", error);
      this.setState({ error: "Не вдалося завантажити товари. Спробуйте оновити сторінку." });
    }
  };

  toggleShipping = () => {
    this.setState({ openShipping: !this.state.openShipping });
  };

  handleCountryChange = (e) => {
    this.setState({
      country: e.target.value,
      city: "",
    });
  };

  handleCityChange = (e) => {
    this.setState({ city: e.target.value });
  };

  handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.map((item) =>
        item._id === id ? { ...item, quantity: newQuantity } : item,
      ),
    }));
  };

  handleRemoveItem = (id) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((item) => item._id !== id),
    }));
  };

  render() {
    const { cartItems, error, openShipping, country, city } = this.state;

    return (
      <>
        <Header />

        <CartPageWrp>
          <CartPageTitle>Shopping Cart</CartPageTitle>
          <CartContentWrp>
            <CartTableWrp>
              {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
              <CartTable
                items={cartItems}
                onUpdate={this.handleUpdateQuantity}
                onRemove={this.handleRemoveItem}
              />
              <CartBtn />
            </CartTableWrp>

            <div className="checkout">
              <div className="block">
                <h3>Apply Discount Code</h3>
                <input type="text" placeholder="Enter discount code" />
                <button>APPLY DISCOUNT</button>
              </div>

              <div className="block">
                <div className="title" onClick={this.toggleShipping}>
                  <h3>Estimate Shipping and Tax</h3>
                  <span>{openShipping ? "-" : "+"}</span>
                </div>

                {openShipping && (
                  <div className="shipping-form">
                    <label>
                      Country *
                      <select
                        value={country}
                        onChange={this.handleCountryChange}
                      >
                        {Object.keys(this.countries).map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label>
                      City *
                      <select value={city} onChange={this.handleCityChange}>
                        <option value="">Select city</option>
                        {this.countries[country].sort().map((cityName) => (
                          <option key={cityName} value={cityName}>
                            {cityName}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label>
                      Zip/Postal Code
                      <input type="text" />
                    </label>

                    <div className="shipping-methods">
                      <p>Flat Rate</p>
                      <label>
                        <input type="radio" name="shipping" defaultChecked />
                        Fixed 5.00 EUR
                      </label>

                      <p>Best Way</p>
                      <label>
                        <input type="radio" name="shipping" />
                        Table Rate 10.00 EUR
                      </label>
                    </div>
                  </div>
                )}
              </div>

              <div className="summary">
                <div className="row">
                  <span>Subtotal</span>
                  <span>XXX EUR</span>
                </div>

                <div className="row">
                  <span>Tax</span>
                  <span>0.00 EUR</span>
                </div>

                <div className="row total">
                  <span>Order Total</span>
                  <span>XXX EUR</span>
                </div>

                <Link to="/checkout">
                  <button className="checkout-btn">PROCEED TO CHECKOUT</button>
                </Link>

              </div>
            </div>

          </CartContentWrp>
        </CartPageWrp>
        <Footer />
      </>
    );
  }
}

export default CartPage;
