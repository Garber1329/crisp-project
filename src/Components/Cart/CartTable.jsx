import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const CartTable = ({ items, onUpdate, onRemove }) => {
  return (
    <div className={styles.tableWrp}>
      <table className={styles.cartTable}>
        <thead className={styles.cartHeaderRow}>
          <tr>
            <th className={styles.headerCell}>Product</th>
            <th className={styles.headerCell}>Price</th>
            <th className={styles.headerCell}>Size</th>
            <th className={styles.headerCell}>Quantity</th>
            <th className={styles.headerCell}>Total</th>
          </tr>
        </thead>
        <tbody className={styles.cartTBody}>
          {items.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              onUpdate={onUpdate}
              onRemove={onRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
