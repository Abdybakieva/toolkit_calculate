import { useDispatch, useSelector } from 'react-redux';
import { calculaterActionsTypes } from '../store/calculator/calculatorReducer';

import classes from './Counter.module.css';

const Calculater = () => {

 const result= useSelector((state)=>state.calculator.result)


 const dispatch=useDispatch()


   const addHandler=()=>{
    dispatch({type:calculaterActionsTypes.ADD,payload:5})
   }

   const divideHandler=()=>{
    dispatch({ type: calculaterActionsTypes.DIVIDE, payload: 4 });
   }

   const subtructHandler = () => {
     dispatch({ type: calculaterActionsTypes.SUBTRUCT, payload: 10 });
   };

   const multiplyHandler = () => {
     dispatch({ type: calculaterActionsTypes.MULTIPLY, payload: 2 });
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

export default Calculater;
