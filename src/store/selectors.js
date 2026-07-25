import { createSelector } from '@reduxjs/toolkit';

const selectProductsSlice = (state) => state.products;
const selectOtherProductsSlice = (state) => state.otherProducts;

const selectBaseProducts = (state) => state.products.items;
const selectOtherProducts = (state) => state.otherProducts.items;

export const selectAllProducts = createSelector(
  [selectBaseProducts, selectOtherProducts],
  (base, other) => [...base, ...other],
);

export const selectProductsLoadingState = createSelector(
  [selectProductsSlice, selectOtherProductsSlice],
  (base, other) => ({
    bothLoaded: base.status === 'succeeded' && other.status === 'succeeded',
    eitherLoading:
      base.status === 'loading' ||
      base.status === 'idle' ||
      other.status === 'loading' ||
      other.status === 'idle',
    hasError: base.status === 'failed' || other.status === 'failed',
    error: base.error || other.error,
    baseStatus: base.status,
    otherStatus: other.status,
  }),
);

export const makeSelectProductById = () =>
  createSelector(
    [selectAllProducts, (_state, id) => id],
    (products, id) => products.find((item) => String(item.id ?? item._id) === String(id)) || null,
  );
