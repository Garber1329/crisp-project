import { Component, useEffect, useState } from 'react';
import Container from '../Container.jsx';
import ShopItems from './ShopItems.jsx';
import clsx from 'clsx';
import styles from './shopwear.module.css';
import ShopBoard from './ShopBoard.jsx';
import axios from 'axios';

const ShopWear = () => {
  const [filters, setFilters] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const categories = [...new Set(products.map((item) => item.type))];
  const filteredData =
    filters.length > 0
      ? products.filter((item) => filters.includes(item.type)).slice(0, 8)
      : products.slice(0, 8);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const productsGet = await axios.get('https://fakestoreapiserver.reactbd.org/api/products');
        const products = productsGet.data.data;

        setProducts(products);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUsers();
  }, []);

  const handleCheckBoxChange = (category) => {
    setFilters((prevFilters) =>
      prevFilters.includes(category)
        ? prevFilters.filter((f) => f !== category)
        : [...prevFilters, category],
    );
  };

  return (
    <section className={clsx(styles.shopwear)}>
      <div className={clsx(styles.shopwearContent)}>
        <ShopBoard categories={categories} filters={filters} onChange={handleCheckBoxChange} />
        <Container className={clsx(styles.clothesItems)}>
          <ShopItems shopItems={filteredData} />
          <button className={styles.shopItemsBtn}>Load More</button>
        </Container>
      </div>
    </section>
  );
};

export default ShopWear;
