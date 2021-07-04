import { createSelector } from "reselect";

const products = (state) => state.productsReducer.products;
const basket = (state) => state.productsReducer.basket;
const address = (state) => state.productsReducer.address;
const loadingAddOrder = (state) => state.productsReducer.loadingAddOrder;
const delivery = (state) => state.applicationReducer.delivery;

export const productsSelector = createSelector(
  [products, delivery],
  (products, delivery) => {
    return products.filter((item) => {
      if (delivery) {
        return item.delivery;
      }
      return item;
    });
  }
);

export const basketSelector = createSelector(basket, (basket) => basket);

export const basketArrPricesSelector = createSelector(basket, (basket) => {
  return basket.map((item) => item.price);
});

export const addressSelector = createSelector(address, (address) => address);

export const loadingAddOrderSelector = createSelector(
  loadingAddOrder,
  (loadingAddOrder) => loadingAddOrder
);
