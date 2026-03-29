import { useState } from "react";
import Header from "/src/Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import "./CartPage2.css";

function CartPage2() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "",
    region: "",
    shipping: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Header />

      <div className="checkout-container">
        <h2 className="checkout-title">Shipping Address</h2>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="roni_cost@example.com"
              onChange={handleChange}
            />
          </div>

          <div className="field-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="****************"
              onChange={handleChange}
            />
          </div>

          <p className="note">
            You already have an account with us. Sign in or continue as guest.
          </p>

          <div className="login-actions">
            <button type="button" className="btn black">LOGIN</button>
            <button type="button" className="link">Forgot Your Password?</button>
          </div>

          <div className="grid-2">
            <div className="field-group">
              <label>First Name *</label>
              <input type="text" name="firstName" onChange={handleChange} />
            </div>

            <div className="field-group">
              <label>Last Name *</label>
              <input type="text" name="lastName" onChange={handleChange} />
            </div>
          </div>

          <div className="field-group">
            <label>Company</label>
            <input type="text" name="company" onChange={handleChange} />
          </div>

          <div className="field-group">
            <label>Street Address *</label>
            <input type="text" name="address" onChange={handleChange} />
          </div>

          <div className="grid-2">
            <div className="field-group">
              <label>Country *</label>
              <input type="text" name="country" onChange={handleChange} />
            </div>

            <div className="field-group">
              <label>State/Province *</label>
              <select name="region" onChange={handleChange}>
                <option value="">Please select a region</option>
                <option value="USA">USA</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Germany">Germany</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>

          <h3 className="section-title">Shipping Methods</h3>

          <div className="shipping-box">
            <label className="shipping-option">
              <input
                type="radio"
                name="shipping"
                value="5"
                onChange={handleChange}
              />
              <span>$5.00</span>
              <span>Fixed</span>
              <span>Flat Rate</span>
            </label>

            <label className="shipping-option">
              <input
                type="radio"
                name="shipping"
                value="10"
                onChange={handleChange}
              />
              <span>$10.00</span>
              <span>Table Rate</span>
              <span>Best Way</span>
            </label>
          </div>

          <div className="form-footer">
            <button type="submit" className="btn black">NEXT</button>
            <button type="button" className="btn ghost">BACK</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default CartPage2;