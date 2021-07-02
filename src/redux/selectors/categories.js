import { createSelector } from "reselect";

const categories = (state) => state.categoriesReducer.categories;

export const categoriesSelector = createSelector(
  categories,
  (categories) => categories
);
