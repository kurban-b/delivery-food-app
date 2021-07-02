import { createSelector } from 'reselect'

const products = state => state.productsReducer.products;

export const productsSelector = createSelector(products, (products) => products)