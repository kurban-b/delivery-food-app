import { createSelector } from "reselect";

const delivery = (state) => state.applicationReducer.delivery;

export const deliverySelector = createSelector(
  delivery,
  (delivery) => delivery
);
