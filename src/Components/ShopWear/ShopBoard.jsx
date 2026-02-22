import { Component } from 'react';
import clsx from 'clsx';
import styles from './shopwear.module.css';
import { nanoid } from 'nanoid';

export default class ShopBoard extends Component {
  randomId = nanoid();
  render() {
    const { categories, filters, onChange } = this.props;
    return (
      <div className={clsx(styles.sideBarClothes)}>
        <h2 className={clsx(styles.sideBarClothesTitle)}>Shop Some Wear:</h2>
        <form className={clsx(styles.clothesTypes)}>
          {categories.map((category) => {
            const uniqueId = nanoid();
            return (
              <label key={category._id} htmlFor={uniqueId} className={styles.clothType}>
                <input
                  type="checkbox"
                  id={uniqueId}
                  className={clsx(styles.clothCheckbox)}
                  checked={filters.includes(category)}
                  onChange={() => onChange(category)}
                />
                {category}
              </label>
            );
          })}
        </form>
      </div>
    );
  }
}
