export const loadingProducts = () => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: 'products/loading/start'
      })
      const res = await fetch('http://localhost:3010/products');
      const json = await res.json();
      dispatch({
        type: 'products/loading/success',
        payload: json
      })
    } catch (e) {
      dispatch({
        type: 'products/loading/error',
        payload: e
      })
    }
  }
}