export const calculaterActionsTypes = {
  ADD: "ADD",
  SUBTRUCT: "SUBTRUCT",
  DIVIDE: "DIVIDE",
  MULTIPLY: "MULTYPLY",
};
const initialState = {
  result: 0,
};

export const calculateReducer = (state = initialState, action) => {
  switch (action.type) {
    case calculaterActionsTypes.ADD:
      return {
        ...state,
        result: state.result + action.payload,
      };
    case calculaterActionsTypes.SUBTRUCT:
      return {
        ...state,
        result: state.result - action.payload,
      };
    case calculaterActionsTypes.DIVIDE:
      return {
        ...state,
        result: state.result * action.payload,
      };
    case calculaterActionsTypes.MULTIPLY:
      return {
        ...state,
        result: state.result / action.payload,
      };
    default:
      return state;
  }
};


//  store.subtribel=()=>{
//     console.log();
//  }
