import styles from "./Cart.module.css";

const CartBtn = () => {
  return (
    <div className={styles.btnWrapper}>
      <button className={`${styles.cartBtn} ${styles.continueBtn}`}>
        CONTINUE SHOPPING
      </button>
      <button className={`${styles.cartBtn} ${styles.clearBtn}`}>
        CLEAR SHOPPING CART
      </button>
    </div>
  );
};

export default CartBtn;
