export const authActionsTypes = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
};

export const initialSTATE = {
  email: "",
  isAUTOHRIZED: false,
};
export const authReducer = (state = initialSTATE, action) => {
  switch (action.type) {
    case authActionsTypes.LOG_IN:
      return {
        ...state,
        email: action.payload,
        isAUTOHRIZED: true,
      };

    case authActionsTypes.LOG_OUT:
      return initialSTATE;

    default:
      return state;
  }
};
