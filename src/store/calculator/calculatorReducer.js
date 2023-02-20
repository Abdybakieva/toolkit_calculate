import { createSlice } from "@reduxjs/toolkit";

// export const calculaterActionsTypes = {
//   ADD: "ADD",
//   SUBTRUCT: "SUBTRUCT",
//   DIVIDE: "DIVIDE",
//   MULTIPLY: "MULTYPLY",
// };
const initialState = {
  result: 0,
};

export const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    add(state, action) {
      state.result += action.payload;
    },
    subtract(state, action) {
      state.result -= action.payload;
    },
    divide(state,action){
      state.result /=action.payload
    },
    multiply(state,action){
      state.result *=action.payload
    }
  },
});
export const calculateActions = calculateSlice.actions;
console.log(calculateActions);

