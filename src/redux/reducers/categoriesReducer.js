const initialState = {
  categories: [],
  loading: false,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "categories/loading/start":
      return {
        ...state,
        loading: true,
      };
    case "categories/loading/success":
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
