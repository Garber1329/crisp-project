import { Component } from 'react';
import clsx from 'clsx';
import styles from './shopwear.module.css';

export default class ShopBoard extends Component {
  render() {
    const { categories, filters, onChange } = this.props;
    return (
      <div className={clsx(styles.sideBarClothes)}>
        <h2 className={clsx(styles.sideBarClothesTitle)}>Shop Some Wear:</h2>
        <form className={clsx(styles.clothesTypes)}>
          {categories.map((category, index) => {
            return (
              <label key={index} className={styles.clothType}>
                <input
                  type="checkbox"
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
