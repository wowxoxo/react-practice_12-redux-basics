import { useSelector, useDispatch } from "react-redux";
import { decrementAction, incrementAction } from "../store/actions";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const decrementHandler = () => {
    dispatch(decrementAction);
  };

  const incrementHandler = () => {
    dispatch(incrementAction);
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", value: 10 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
