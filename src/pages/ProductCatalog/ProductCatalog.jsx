import css from "./productCatalog.module.css";
// import data from "../../data/productsData.json";
import axios from "axios";
import { useEffect, useState } from "react";
import Sorting from "./Sorting/Sorting";
import CatalogProducts from "./CatalogProducts/CatalogProducts";
import CatalogSidebar from "./CatalogSidebar/CatalogSidebar";

export default function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("desc");
  const [itemsToShow, setItemsToShow] = useState("10");
  const [filters, setFilters] = useState({
    brands: [],
    types: [],
    sizes: [],
    price: [20, 800],
  });

  useEffect(() => {
    async function getItems() {
      try {
        const response = await axios.get(
          "https://fakestoreapiserver.reactbd.org/api/products",
        );
        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, []);

  const handleSortChange = (newSortValue) => {
    setSortBy(newSortValue);
  };

  const handleShowChange = (newSortValue) => {
    setItemsToShow(newSortValue);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const getProcessedProducts = () => {
    let sortedProducts = [...products];

    sortedProducts = sortedProducts.filter((product) => {
      if (
        filters.brands.length > 0 &&
        !filters.brands.includes(product.brand)
      ) {
        return false;
      }
      if (
        filters.types.length > 0 &&
        !filters.types.includes(product.category)
      ) {
        return false;
      }
      if (filters.sizes.length > 0) {
        const productSizes = Array.isArray(product.size)
          ? product.size
          : [product.size];
        const hasMatchingSize = filters.sizes.some((size) =>
          productSizes.includes(size),
        );
        if (!hasMatchingSize) {
          return false;
        }
      }
      if (
        product.price < filters.price[0] ||
        product.price > filters.price[1]
      ) {
        return false;
      }
      return true;
    });

    sortedProducts.sort((a, b) => {
      if (sortBy === "asc") return a.price - b.price;
      if (sortBy === "desc") return b.price - a.price;
      return 0;
    });

    if (itemsToShow !== "all") {
      sortedProducts = sortedProducts.slice(0, Number(itemsToShow));
    }
    return sortedProducts;
  };

  const visibleProducts = getProcessedProducts();

  return (
    <div className={css.container}>
      <div className={css.productCatalogWrapper}>
        <CatalogSidebar
          products={products}
          onFilterChange={handleFilterChange}
        />

        <div className={css.productCatalogMain}>
          <div className={css.sortingWrapper}>
            <Sorting
              sortBy={sortBy}
              itemsToShow={itemsToShow}
              onSort={handleSortChange}
              onShow={handleShowChange}
            />
          </div>
          <CatalogProducts products={visibleProducts} />
        </div>
      </div>
    </div>
  );
}
