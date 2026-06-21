
import css from "./productCatalog.module.css";
// import data from "../../data/productsData.json";
import { useEffect } from "react";
import Sorting from "./Sorting/Sorting";
import CatalogProducts from "./CatalogProducts/CatalogProducts";
import CatalogSidebar from "./CatalogSidebar/CatalogSidebar";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setFilters,
  setSortBy,
  setItemsToShow,
} from "../../store/slices/productsSlice";

import { useSearchParams } from "react-router-dom";

export default function ProductCatalog() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    items: products,
    status,
    error,
    filters,
    sortBy,
    itemsToShow,
  } = useSelector((state) => state.products);

  const handleSortChange = (newSortValue) => {
    dispatch(setSortBy(newSortValue));
    updateSearchParams({ sortBy: newSortValue });
  };

  const handleShowChange = (newShowValue) => {
    dispatch(setItemsToShow(newShowValue));
    updateSearchParams({ itemsToShow: newShowValue });
  };

  const handleFilterChange = (newFilters) => {
    dispatch(setFilters(newFilters));
    updateSearchParams(newFilters);
  };

  const updateSearchParams = (newQuery) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(newQuery).forEach(([key, value]) => {
      if (value && (!Array.isArray(value) || value.length > 0)) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  };

  useEffect(() => {
    const urlSortBy = searchParams.get("sortBy");
    const urlItemsToShow = searchParams.get("itemsToShow");

    const urlFilters = {
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
        : [],
    };

    if (urlSortBy) dispatch(setSortBy(urlSortBy));
    if (urlItemsToShow) dispatch(setItemsToShow(urlItemsToShow));

    const hasAnyFilters = Object.values(urlFilters).some(
      (arr) => arr.length > 0,
    );
    if (hasAnyFilters) {
      dispatch(setFilters(urlFilters));
    }

    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

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

  if (status === "loading") {
    return <div className={css.container}>Loading...</div>;
  }

  if (status === "failed") {
    return <div className={css.container}>Error: {error}</div>;
  }

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
