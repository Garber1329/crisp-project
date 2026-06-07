import { useCallback, useEffect, useMemo, useState } from 'react';
import Container from '../Container.jsx';
import ShopItems from './ShopItems.jsx';
import clsx from 'clsx';
import styles from './shopFilters.module.css';
import ShopBoard from './ShopBoard.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShopFilters = () => {
  const [filters, setFilters] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const categories = useMemo(() => [...new Set(products.map((item) => item.type))], [products]);
  const filteredData = useMemo(() => {
    return filters.length > 0
      ? products.filter((item) => filters.includes(item.type)).slice(0, 9)
      : products.slice(0, 9);
  }, [filters, products]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const productsGet = await axios.get('https://crisp-project-server.onrender.com/products');
        if (productsGet.data && Array.isArray(productsGet.data.data)) {
          const products = productsGet.data.data;
          setProducts(products);
          setError(null);
        } else {
          throw new Error('Invalid data structure from server');
        }
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
          {error && <h2 className={clsx(styles.errorTitle)}>There's no products yet</h2>}
          <Link to="/shop" className={styles.shopItemsBtn}>Load More</Link>
        </Container>
      </div>
    </section>
  );
};

export default ShopFilters;
