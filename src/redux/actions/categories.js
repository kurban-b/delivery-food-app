export const loadingCategories = () => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: 'categories/loading/start'
      })
      const res = await fetch('http://localhost/3010/categories');
      const json = await res.json();
      dispatch({
        type: 'categories/loading/success',
        payload: json
      })
    } catch (e) {
      await dispatch({
        type: 'categories/loading/error',
        payload: e
      })
      console.error(e)
    }
  }
}