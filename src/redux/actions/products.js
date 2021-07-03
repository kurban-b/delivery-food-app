export const loadingProducts = () => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "products/loading/start",
      });
      const res = await fetch("/products");
      const json = await res.json();
      dispatch({
        type: "products/loading/success",
        payload: json,
      });
    } catch (e) {
      dispatch({
        type: "products/loading/error",
        payload: e,
      });
    }
  };
};

export const addOrder = (sum, address, basket) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "order/add/start",
      });
      const res = await fetch("/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productsId: basket.map((product) => product.id),
          sum: sum,
          address: {
            street: address.street,
            house: address.house,
          },
        }),
      });
      const json = await res.json();
      dispatch({
        type: "order/add/success",
      });
    } catch (e) {
      dispatch({
        type: "order/add/error",
      });
    }
  };
};

export const addProductByBasket = (product) => {
  return {
    type: "basket/add",
    payload: product,
  };
};

export const deleteProductFromBasket = (product) => {
  return {
    type: "basket/delete",
    payload: product,
  };
};

export const changeAddressStreet = (street) => {
  return {
    type: "address/street/change",
    payload: street,
  };
};
export const changeAddressHouse = (house) => {
  return {
    type: "address/house/change",
    payload: house,
  };
};

export const addressError = () => {
  return {
    type: "address/error",
  };
};
