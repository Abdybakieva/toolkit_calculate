import { useDispatch, useSelector } from "react-redux";
import { calculateActions } from "../store/calculator/calculatorReducer";

import classes from "./Counter.module.css";

const Calculator = () => {
  const result = useSelector((state) => state.calculate.result);
  // console.log(result);

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(calculateActions.add(5));
  };

  const divideHandler = () => {
    dispatch(calculateActions.divide(4));
  };

  const subtructHandler = () => {
    dispatch(calculateActions.subtract(10));
  };

  const multiplyHandler = () => {
    dispatch(calculateActions.multiply(2));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Calculater</h1>
      <div className={classes.value}>Result:{result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={subtructHandler}>-10</button>
      <button onClick={multiplyHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </main>
  );
};

export default Calculator;
