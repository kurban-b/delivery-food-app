const initialState = {
  products: [],
  loading: false
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'products/loading/start':
      return {
        ...state,
        loading: true
      }
    case 'products/loading/success':
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export default productsReducer;