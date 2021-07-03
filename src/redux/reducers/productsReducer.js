const initialState = {
  products: [],
  loading: false,
  basket: [],
  address: {
    street: "",
    house: "",
    error: false,
  },
  loadingAddOrder: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "products/loading/start":
      return {
        ...state,
        loading: true,
      };
    case "products/loading/success":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case "basket/add":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "basket/delete":
      const prod = state.basket.filter((product) => product === action.payload);
      if (prod.length === 1) {
        return {
          ...state,
          basket: state.basket.filter((item) => item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        basket: [
          ...state.basket.filter((item) => item.id !== action.payload.id),
          ...prod.filter((item, index) => index !== prod.length - 1),
        ],
      };
    case "address/street/change":
      return {
        ...state,
        address: {
          ...state.address,
          error: false,
          street: action.payload,
        },
      };
    case "address/house/change":
      return {
        ...state,
        address: {
          ...state.address,
          error: false,
          house: action.payload,
        },
      };
    case "address/error":
      return {
        ...state,
        address: {
          ...state.address,
          error: true,
        },
      };
    case "order/add/error":
      return {
        ...state,
        loadingAddOrder: true,
      };
    case "order/add/success":
      return {
        ...state,
        loadingAddOrder: false,
        basket: [],
        address: {
          ...state.address,
          error: false,
        },
      };
    default:
      return state;
  }
};

export default productsReducer;
