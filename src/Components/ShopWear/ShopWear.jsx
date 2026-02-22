import { Component } from 'react';
import data from '../../data/productsData.json';
import Container from '../Container.jsx';
import ShopItems from './ShopItems.jsx';
import clsx from 'clsx';
import styles from './shopwear.module.css';
import ShopBoard from './ShopBoard.jsx';
import axios from 'axios';

export default class ShopWear extends Component {
  state = {
    filters: [],
    categories: [],
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
      const categoriesGet = await axios.get(
        'https://fakestoreapiserver.reactbd.org/api/categories',
      );
      const categories = categoriesGet.data.data;

      const productsRes = await axios.get('https://fakestoreapiserver.reactbd.org/api/products');
      const products = productsRes.data.data;

      this.setState({
        categories: categories,
        products: products,
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }
  render() {
    const { filters = [], categories = [], products = [] } = this.state;
    const filteredData =
      filters.length > 0 ? products.filter((item) => filters.includes(item.category)).slice(0, 8) : products.slice(0, 8);
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
