import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CartTable from "../../Components/Cart/CartTable.jsx";
import CartBtn from "../../Components/Cart/CartBtn";

import "./CartPage.css";
import {
  CartPageWrp,
  CartPageTitle,
  CartTableWrp,
  CartContentWrp,
} from "./CartPage.styles.js";

const COUNTRIES_DATA = {
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

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [openShipping, setOpenShipping] = useState(false);
  const [country, setCountry] = useState("USA");
  const [city, setCity] = useState("");
  const [shippingMethod, setShippingMethod] = useState("fixed");

  const getCartItems = async () => {
    const response = await axios.get(
      "https://crisp-project-server.onrender.com/carts/2",
    );

    if (Array.isArray(response.data)) {
      return response.data[0]?.items || [];
    }
    return response.data?.items || [];
  };

  const fetchCartItems = useCallback(async () => {
    try {
      const cartData = await getCartItems();

      if (!cartData || !Array.isArray(cartData) || cartData.length === 0) {
        setCartItems([]);
        return;
      }

      const promises = cartData.map((item) =>
        axios.get(
          `https://crisp-project-server.onrender.com/products/${item.productId}`,
        ),
      );

      const responses = await Promise.all(promises);

      const productInfo = responses.map((response, index) => {
        const actualId =
          response.data.id || response.data._id || cartData[index].productId;

        return {
          id: actualId,
          _id: actualId,
          title: response.data.title,
          price: response.data.price,
          image: response.data.images?.[0],
          quantity: cartData[index].quantity,
        };
      });

      setCartItems(productInfo);
      setError(null);
    } catch (err) {
      console.error("Помилка завантаження даних:", err);
      setError("Не вдалося завантажити товари. Спробуйте оновити сторінку.");
    }
  }, []);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const toggleShipping = () => setOpenShipping((prev) => !prev);
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setCity("");
  };
  const handleCityChange = (e) => setCity(e.target.value);

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        const itemId = item.id || item._id;
        return itemId === id ? { ...item, quantity: newQuantity } : item;
      }),
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => {
        const itemId = item.id || item._id;
        return itemId !== id;
      }),
    );
  };

  const handleClearCart = () => setCartItems([]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shippingCost = shippingMethod === "fixed" ? 5.0 : 10.0;
  const orderTotal = cartItems.length > 0 ? subtotal + shippingCost : 0;

  return (
    <CartPageWrp>
      <CartPageTitle>Shopping Cart</CartPageTitle>
      <CartContentWrp>
        <CartTableWrp>
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          )}

          <CartTable
            items={cartItems}
            onUpdate={handleUpdateQuantity}
            onRemove={handleRemoveItem}
          />

          <CartBtn onClear={handleClearCart} />
        </CartTableWrp>

        <div className="checkout">
          <div className="block">
            <h3>Apply Discount Code</h3>
            <input type="text" placeholder="Enter discount code" />
            <button>APPLY DISCOUNT</button>
          </div>

          <div className="block">
            <div className="title" onClick={toggleShipping}>
              <h3>Estimate Shipping and Tax</h3>
              <span>{openShipping ? "-" : "+"}</span>
            </div>

            {openShipping && (
              <div className="shipping-form">
                <label>
                  Country *
                  <select value={country} onChange={handleCountryChange}>
                    {Object.keys(COUNTRIES_DATA).map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  City *
                  <select value={city} onChange={handleCityChange}>
                    <option value="">Select city</option>
                    {COUNTRIES_DATA[country].sort().map((cityName) => (
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
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === "fixed"}
                      onChange={() => setShippingMethod("fixed")}
                    />
                    Fixed 5.00 EUR
                  </label>

                  <p>Best Way</p>
                  <label>
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === "table"}
                      onChange={() => setShippingMethod("table")}
                    />
                    Table Rate 10.00 EUR
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className="summary">
            <div className="row">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)} EUR</span>
            </div>

            <div className="row">
              <span>Tax</span>
              <span>0.00 EUR</span>
            </div>

            <div className="row total">
              <span>Order Total</span>
              <span>{orderTotal.toFixed(2)} EUR</span>
            </div>

            <Link to="/cart2">
              <button
                className="checkout-btn"
                disabled={cartItems.length === 0}
              >
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </CartContentWrp>
    </CartPageWrp>
  );
}

export default CartPage;


