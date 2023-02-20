import { configureStore } from "@reduxjs/toolkit";
import { authReducer, authSlice } from "./auth/authReducer";
import { calculateReducer, calculateSlice } from "./calculator/calculatorReducer";

//  const rootReducer=combineReducers({
//     calculator:calculateReducer,
//     auth:authReducer
//  })
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calculate:calculateSlice.reducer
  },
});
