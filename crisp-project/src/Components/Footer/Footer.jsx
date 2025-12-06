import "./footer.css";

import featuresData from "../../data/featuresData.json";
import Icon from "./Icon";

export default function Footer({
  address = "123 STREET NAME, CITY, ENGLAND",
  phone = "(123) 456-7890",
  email = "MAIL@EXAMPLE.COM",
}) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <a href="#" className="footer__logo-link">
            <Icon name="logo-footer" width="102px" height="44px"></Icon>
          </a>

          <div className="footer__list">
            <h3 className="footer__list-title">features</h3>
            <div className="footer__list-items">
              {featuresData.map((item) => {
                return (
                  <a key={item.name} href="#" className="footer__list-item">
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer__list">
            <h3 className="footer__list-title">menu</h3>
            <div className="footer__list-items">
              <a href="#" className="footer__list-item">
                about us
              </a>
              <a href="#" className="footer__list-item">
                contact us
              </a>
              <a href="#" className="footer__list-item">
                my account
              </a>
              <a href="#" className="footer__list-item">
                orders history
              </a>
              <a href="#" className="footer__list-item">
                my wishlist
              </a>
              <a href="#" className="footer__list-item">
                blog
              </a>
              <a href="#" className="footer__list-item">
                login
              </a>
            </div>
          </div>

          <div className="footer__list">
            <h3 className="footer__list-title">contact us</h3>
            <div className="footer__list-items">
              <div className="footer__list-item-container">
                <h4 className="footer__list-address-title">Address:</h4>
                <p className="footer__list-address"> {address} </p>
              </div>
              <div className="footer__list-item-container">
                <h4 className="footer__list-address-title">Phone:</h4>
                <p className="footer__list-address"> {phone} </p>
              </div>
              <div className="footer__list-item-container">
                <h4 className="footer__list-address-title">email:</h4>
                <p className="footer__list-address"> {email} </p>
              </div>
              <div className="footer__list-item-container">
                <h4 className="footer__list-address-title">
                  working days/hours
                </h4>
                <p className="footer__list-address">
                  MON - SUN / 9:00AM - 8:00PM
                </p>
              </div>
            </div>
          </div>

          <div className="footer__list">
            <h3 className="footer__list-title">follow us</h3>
            <div className="footer__list-items footer__list-items-soc">
              <a href="#" className="footer__list-soc">
                <Icon name="facebook-logo" width="21px" height="21px"></Icon>
                <span className="footer__list-soc-item">FACEBOOK</span>
              </a>
              <a href="#" className="footer__list-soc">
                <Icon name="twitter-logo" width="21px" height="21px"></Icon>
                <span className="footer__list-soc-item">TWITTER</span>
              </a>
              <a href="#" className="footer__list-soc">
                <Icon name="instagram-logo" width="21px" height="21px"></Icon>
                <span className="footer__list-soc-item">INSTAGRAM</span>
              </a>
            </div>
          </div>

          <div className="footer__list">
            <h3 className="footer__list-title">join us</h3>
            <div className="footer__list-items">
              <form action="" className="footer__form">
                <p className="footer__form-title">
                  Subscribe to our newsletters
                </p>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="footer__form-input"
                />
                <button type="submit" className="footer__form-btn">
                  Subscribe!
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer__rights">
          <hr className="footer__hr" />
          <span className="footer__rights-txt">
            © 2019. Crisp theme Developed by Belvg
          </span>
        </div>
      </div>
    </footer>
  );
}
