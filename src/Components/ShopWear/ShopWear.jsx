import { Component } from 'react';
import Container from '../Container.jsx';
import ShopItems from './ShopItems.jsx';
import clsx from 'clsx';
import styles from './shopwear.module.css';
import ShopBoard from './ShopBoard.jsx';
import axios from 'axios';

export default class ShopWear extends Component {
  state = {
    filters: [],
    products: [],
    error: null,
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
  async componentDidMount() {
    try {
      const productsGet = await axios.get('https://fakestoreapiserver.reactbd.org/api/products');
      const products = productsGet.data.data;

      this.setState({
        products,
        error: null
      });
    } catch (err) {
      this.setState({ error: err.message });
      console.log(`error in line: ${err}`);
    }
  }
  render() {
    const { filters, products } = this.state;
    const categories = [...new Set(products.map((item) => item.type))];
    const filteredData =
      filters.length > 0
        ? products.filter((item) => filters.includes(item.type)).slice(0, 8)
        : products.slice(0, 8);
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
