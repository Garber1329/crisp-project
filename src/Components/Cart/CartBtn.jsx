import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const CartBtn = ({ onClear }) => {
  return (
    <div className={styles.btnWrapper}>
      <Link to='/shop' className={`${styles.cartBtn} ${styles.continueBtn}`}>
        CONTINUE SHOPPING
      </Link>
      
      <button 
        className={`${styles.cartBtn} ${styles.clearBtn}`}
        onClick={onClear}
      >
        CLEAR SHOPPING CART
      </button>
    </div>
  );
};

export default CartBtn;















// import { Link } from "react-router-dom";
// import styles from "./Cart.module.css";

// const CartBtn = () => {
//   return (
//     <div className={styles.btnWrapper}>
//       <Link to='/cart2' className={`${styles.cartBtn} ${styles.continueBtn}`}>
//         CONTINUE SHOPPING
//       </Link>
//       <button className={`${styles.cartBtn} ${styles.clearBtn}`}>
//         CLEAR SHOPPING CART
//       </button>
//     </div>
//   );
// };

// export default CartBtn;
