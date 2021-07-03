const initialState = {
  delivery: true,
};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "app/delivery/change":
      return {
        ...state,
        delivery: !state.delivery,
      };
    default:
      return state;
  }
};

export default applicationReducer;
