import React, { useState, useCallback } from "react";
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

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
    },
    [formData]
  );

  return (
    <>
      <div className="checkout-container">
        <h2 className="checkout-title">Shipping Address</h2>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="roni_cost@example.com"
              onChange={handleChange}
            />
          </div>

          <div className="field-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="****************"
              onChange={handleChange}
            />
          </div>

          <p className="note">
            You already have an account with us. Sign in or continue as guest.
          </p>

          <div className="login-actions">
            <button type="button" className="btn black">LOGIN</button>
            <button type="button" className="link">
              Forgot Your Password?
            </button>
          </div>

          <div className="grid-2">
            <div className="field-group">
              <label>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label>Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field-group">
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="field-group">
            <label>Street Address *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="grid-2">
            <div className="field-group">
              <label>Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label>State/Province *</label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
              >
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
                checked={formData.shipping === "5"}
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
                checked={formData.shipping === "10"}
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
    </>
  );
}

export default React.memo(CartPage2);