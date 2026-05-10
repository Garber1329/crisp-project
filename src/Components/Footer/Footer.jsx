import css from "./footer.module.css";
import featuresData from "../../data/featuresData.json";
import Icon from "./Icon";

export default function Footer({
  address = "123 STREET NAME, CITY, ENGLAND",
  phone = "(123) 456-7890",
  email = "MAIL@EXAMPLE.COM",
}) {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.footer__content}>
          <a href="#" className={css["footer__logo-link"]}>
            <Icon name="logo-footer" width="102px" height="44px"></Icon>
          </a>

          <div className={css.footer__list}>
            <h3 className={css["footer__list-title"]}>features</h3>
            <div className={css["footer__list-items"]}>
              {featuresData.map((item) => {
                return (
                  <a
                    key={item.name}
                    href="#"
                    className={css["footer__list-item"]}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className={css.footer__list}>
            <h3 className={css["footer__list-title"]}>menu</h3>
            <div className={css["footer__list-items"]}>
              <a href="#" className={css["footer__list-item"]}>
                about us
              </a>
              <a href="#" className={css["footer__list-item"]}>
                contact us
              </a>
              <a href="#" className={css["footer__list-item"]}>
                my account
              </a>
              <a href="#" className={css["footer__list-item"]}>
                orders history
              </a>
              <a href="#" className={css["footer__list-item"]}>
                my wishlist
              </a>
              <a href="#" className={css["footer__list-item"]}>
                blog
              </a>
              <a href="#" className={css["footer__list-item"]}>
                login
              </a>
            </div>
          </div>

          <div className={css.footer__list}>
            <h3 className={css["footer__list-title"]}>contact us</h3>
            <div className={css["footer__list-items"]}>
              <div className={css["footer__list-item-container"]}>
                <h4 className={css["footer__list-address-title"]}>Address:</h4>
                <p className={css["footer__list-address"]}> {address} </p>
              </div>
              <div className={css["footer__list-item-container"]}>
                <h4 className={css["footer__list-address-title"]}>Phone:</h4>
                <p className={css["footer__list-address"]}> {phone} </p>
              </div>
              <div className={css["footer__list-item-container"]}>
                <h4 className={css["footer__list-address-title"]}>email:</h4>
                <p className={css["footer__list-address"]}> {email} </p>
              </div>
              <div className={css["footer__list-item-container"]}>
                <h4 className={css["footer__list-address-title"]}>
                  working days/hours
                </h4>
                <p className={css["footer__list-address"]}>
                  MON - SUN / 9:00AM - 8:00PM
                </p>
              </div>
            </div>
          </div>

          <div className={css.footer__list}>
            <h3 className={css["footer__list-title"]}>follow us</h3>
            {/* Тут було два класи, тому використовуємо шаблонний рядок */}
            <div
              className={`${css["footer__list-items"]} ${css["footer__list-items-soc"]}`}
            >
              <a href="#" className={css["footer__list-soc"]}>
                <Icon name="facebook-logo" width="21px" height="21px"></Icon>
                <span className={css["footer__list-soc-item"]}>FACEBOOK</span>
              </a>
              <a href="#" className={css["footer__list-soc"]}>
                <Icon name="twitter-logo" width="21px" height="21px"></Icon>
                <span className={css["footer__list-soc-item"]}>TWITTER</span>
              </a>
              <a href="#" className={css["footer__list-soc"]}>
                <Icon name="instagram-logo" width="21px" height="21px"></Icon>
                <span className={css["footer__list-soc-item"]}>INSTAGRAM</span>
              </a>
            </div>
          </div>

          <div className={css.footer__list}>
            <h3 className={css["footer__list-title"]}>join us</h3>
            <div className={css["footer__list-items"]}>
              <form action="" className={css.footer__form}>
                <p className={css["footer__form-title"]}>
                  Subscribe to our newsletters
                </p>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={css["footer__form-input"]}
                />
                <button type="submit" className={css["footer__form-btn"]}>
                  Subscribe!
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={css.footer__rights}>
          <hr className={css.footer__hr} />
          <span className={css["footer__rights-txt"]}>
            © 2019. Crisp theme Developed by Belvg
          </span>
        </div>
      </div>
    </footer>
  );
}
