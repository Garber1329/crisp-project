import { useState } from "react";
import Header from '/src/Components/Header/Header.jsx';
import Footer from "../../Components/Footer/Footer.jsx";
import "./CartPage.css";


const CartPage = () => {
      const [openShipping, setOpenShipping] = useState(false);

      const countries = {
  USA: ["Alaska", "California", "Florida", "New York", "Texas"],
  Ukraine: ["Dnipro", "Kharkiv", "Kyiv", "Lviv", "Odesa"],
  Germany: ["Berlin", "Hamburg", "Munich", "Stuttgart"],
  Australia: ["Adelaide", "Brisbane", "Canberra", "Melbourne", "Perth", "Sydney"],
};

const [country, setCountry] = useState("USA");
const [city, setCity] = useState("");

    return (
        <>
        <Header/>
   <div className="checkout">
  <div className="block">
    <h3>Apply Discount Code</h3>
    <input type="text" placeholder="Enter discount code" />
    <button>APPLY DISCOUNT</button>
  </div>

  <div className="block">
    <div className="title" onClick={() => setOpenShipping(!openShipping)}>
      <h3>Estimate Shipping and Tax</h3>
      <span>{openShipping ? "-" : "+"}</span>
    </div>

    {openShipping && (
      <div className="shipping-form">
      <label>
  Country *
  <select
    value={country}
    onChange={(e) => {
      setCountry(e.target.value);
      setCity(""); 
    }}
  >
    {Object.keys(countries).map((c) => (
      <option key={c} value={c}>
        {c}
      </option>
    ))}
  </select>
</label>

<label>
  City *
  <select value={city} onChange={(e) => setCity(e.target.value)}>
    <option value="">Select city</option>
    {countries[country]
      .sort()
      .map((cityName) => (
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

    <button className="checkout-btn">PROCEED TO CHECKOUT</button>
  </div>
</div>

        <Footer/>
        </>
        
    )
    
};

export default CartPage;