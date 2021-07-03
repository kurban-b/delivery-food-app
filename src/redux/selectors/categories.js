import { createSelector } from "reselect";

const categories = (state) => state.categoriesReducer.categories;

export const categoriesSelector = createSelector(
  categories,
  (categories) => categories
);

export const categoryHitsSelector = createSelector(categories, (categories) => {
  return categories.find((item) => item.name === "Хиты");
});

export const categoryNewsSelector = createSelector(categories, (categories) => {
  return categories.find((item) => item.name === "Новое");
});
