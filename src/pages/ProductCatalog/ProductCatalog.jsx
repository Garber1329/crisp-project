import css from "./productCatalog.module.css";
// import data from "../../data/productsData.json";
import axios from "axios";
import { useEffect, useState } from "react";
import Sorting from "./Sorting/Sorting";
import CatalogProducts from "./CatalogProducts/CatalogProducts";
import CatalogSidebar from "./CatalogSidebar/CatalogSidebar";

import { useSearchParams } from "react-router-dom";

export default function ProductCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "desc");
  const [itemsToShow, setItemsToShow] = useState(
    searchParams.get("itemsToShow") || "10",
  );
  const [filters, setFilters] = useState({
    brands: searchParams.get("brands")
      ? searchParams.get("brands").split(",")
      : [],

    types: searchParams.get("types")
      ? searchParams.get("types").split(",")
      : [],

    sizes: searchParams.get("sizes")
      ? searchParams.get("sizes").split(",")
      : [],

    price: searchParams.get("price")
      ? searchParams.get("price").split(",").map(Number)
      : [20, 800],
  });

  const updateSearchParams = (newQuery) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(newQuery).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  };

  useEffect(() => {
    async function getItems() {
      try {
        const response = await axios.get(
          "https://crisp-project-server.onrender.com/products",
        );
        const fetchedProducts = Array.isArray(response.data)
          ? response.data
          : response.data?.data || [];
        setProducts(fetchedProducts);
        console.log(fetchedProducts);
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, []);

  const handleSortChange = (newSortValue) => {
    setSortBy(newSortValue);
    updateSearchParams({ sortBy: newSortValue });
  };

  const handleShowChange = (newSortValue) => {
    setItemsToShow(newSortValue);
    updateSearchParams({ itemsToShow: newSortValue });
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    updateSearchParams(newFilters);
  };

  const getCategoryValue = (category) => {
    if (typeof category === "string") return category;
    return category?.slug || category?.name || "";
  };

  const getProcessedProducts = () => {
    let sortedProducts = Array.isArray(products) ? [...products] : [];

    sortedProducts = sortedProducts.filter((product) => {
      if (
        filters.brands.length > 0 &&
        !filters.brands.includes(product.brand)
      ) {
        return false;
      }
      if (
        filters.types.length > 0 &&
        !filters.types.includes(getCategoryValue(product.category))
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
          currentFilters={filters}
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
