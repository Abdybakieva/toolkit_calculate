import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth/authReducer";
import { calculateReducer } from "./calculator/calculatorReducer";



 const rootReducer=combineReducers({
    calculator:calculateReducer,
    auth:authReducer
 })
 export const store = createStore(rootReducer);