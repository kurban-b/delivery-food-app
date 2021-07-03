import { createSelector } from "reselect";

const products = (state) => state.productsReducer.products;
const basket = (state) => state.productsReducer.basket;

export const productsSelector = createSelector(
  products,
  (products) => products
);

export const basketSelector = createSelector(basket, (basket) => basket);

export const basketArrPricesSelector = createSelector(basket, (basket) => {
  return basket.map((item) => item.price);
});
