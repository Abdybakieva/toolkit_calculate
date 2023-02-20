import { createSlice } from "@reduxjs/toolkit";

export const authActionsTypes = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
};

export const initialState = {
  email: "",
  password: "",
  isAUTOHRIZED: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logedIn(state) {
      state.isAUTOHRIZED = true;
    },
    logout() {
      return initialState;
    },
  },
});

export const authActions = authSlice.actions;

// export const authReducer = (state = initialSTATE, action) => {
//   switch (action.type) {
//     case authActionsTypes.LOG_IN:
//       return {
//         ...state,
//         email: action.payload,
//         isAUTOHRIZED: true,
//       };

//     case authActionsTypes.LOG_OUT:
//       return initialSTATE;

//     default:
//       return state;
//   }
