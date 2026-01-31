import styles from "./Cart.module.css";
import { BiHeart, BiPencil } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const CartItem = ({ item, onUpdate, onRemove }) => {
  const total = (item.price * item.quantity).toFixed(2);
  return (
    <tr className={styles.tableRow}>
      <td className={styles.cartItemCell}>
        <div className={styles.itemWrp}>
          <img src={item.image} alt={item.title} className={styles.itemImg} />
          <div className={styles.itemInfo}>
            <div className={styles.itemTitle}>{item.title}</div>
            <div className={styles.itemSubtitle}>SLIM BLACK USED</div>
          </div>
        </div>
      </td>

      <td className={styles.cartItemCell}>{item.price.toFixed(2)} EUR</td>

      <td className={styles.cartItemCell}>{item.size}</td>

      <td className={styles.cartItemCell}>
        <div className={styles.quantityCounter}>
          <button
            className={styles.counterBtn}
            onClick={() => onUpdate(item._id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            –
          </button>

          <span className={styles.quantityValue}>{item.quantity}</span>

          <button
            className={styles.counterBtn}
            onClick={() => onUpdate(item._id, item.quantity + 1)}
          >
            +
          </button>
        </div>
      </td>

      <td className={`${styles.totalText} ${styles.cartItemCell}`}>
        {total} EUR
      </td>

      <td className={styles.cartItemCell}>
        <div className={styles.actionButtons}>
          <button className={styles.iconBtn}>
            <BiHeart size={18} />
          </button>
          <button className={styles.iconBtn}>
            <BiPencil size={18} />
          </button>
          <button className={styles.iconBtn} onClick={() => onRemove(item._id)}>
            <RxCross2 size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
