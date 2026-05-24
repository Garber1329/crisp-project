import { useCallback, useEffect, useMemo, useState } from 'react';
import Container from '../Container.jsx';
import ShopItems from './ShopItems.jsx';
import clsx from 'clsx';
import styles from './shopfilters.module.css';
import ShopBoard from './ShopBoard.jsx';
import axios from 'axios';

const ShopFilters = () => {
  const [filters, setFilters] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const categories = useMemo(() => [...new Set(products.map((item) => item.category))], [products]);
  const filteredData = useMemo(() => {
   return filters.length > 0
      ? products.filter((item) => filters.includes(item.category)).slice(0, 8)
      : products.slice(0, 8);
  }, [filters, products]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const productsGet = await axios.get('https://fakestoreapiserver.reactbd.org/api/products');
        const fetchedProducts = Array.isArray(productsGet.data) ? productsGet.data : productsGet.data?.data || [];

        setProducts(fetchedProducts);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUsers();
  }, []);

  const handleCheckBoxChange = useCallback((category) => {
    setFilters((prevFilters) =>
      prevFilters.includes(category)
        ? prevFilters.filter((f) => f !== category)
        : [...prevFilters, category],
    );
  }, []);

  return (
    <section className={clsx(styles.ShopFilters)}>
      <div className={clsx(styles.ShopFiltersContent)}>
        <ShopBoard categories={categories} filters={filters} onChange={handleCheckBoxChange} />
        <Container className={clsx(styles.clothesItems)}>
          <ShopItems shopItems={filteredData} />
          <button className={styles.shopItemsBtn}>Load More</button>
        </Container>
      </div>
    </section>
  );
};

export default ShopFilters;
