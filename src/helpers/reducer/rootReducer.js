export const rootReducer = (state, action) => {
  switch (action.type) {
    case "updateColorMode":
      return {
        ...state,
        colorMode: action.colorMode
      };

    default:
      return state;
  }
};
