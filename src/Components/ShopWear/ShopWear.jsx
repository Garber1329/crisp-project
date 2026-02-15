import { Component } from 'react';
import data from '../../data/productsData.json';
import Container from '../Container.jsx';
import ShopItems from './ShopItems.jsx';
import clsx from 'clsx';
import styles from './shopwear.module.css';
import ShopBoard from './SideBar.jsx';
import LoginMain from '../LoginPage/LoginPageContent.jsx';

export default class ShopWear extends Component {
  state = {
    filters: [],
  };
  handleCheckboxChange = (category) => {
    this.setState((prevState) => {
      const { filters } = prevState;
      return {
        filters: filters.includes(category)
          ? filters.filter((f) => f !== category)
          : [...filters, category],
      };
    });
  };
  render() {
    const { filters } = this.state;
    const categories = [...new Set(data.data.map((item) => item.type))];
    const filteredData =
      filters.length > 0
        ? data.data.filter((item) => filters.includes(item.type)).slice(0, 8)
        : data.data.slice(0, 8);
    return (
      <section className={clsx(styles.shopwear)}>
        <div className={clsx(styles.shopwearContent)}>
          <ShopBoard
            categories={categories}
            filters={this.state.filters}
            onChange={this.handleCheckboxChange}
          />
          <Container className={clsx(styles.clothesItems)}>
            <ShopItems shopItems={filteredData} />
            <button className={styles.shopItemsBtn}>Load More</button>
          </Container>
        </div>
      </section>
    );
  }
}
