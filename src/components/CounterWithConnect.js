import classes from "./Counter.module.css";
import { connect } from "react-redux";

const Counter = (props) => {
  const toggleCounterHandler = () => {};

  const decrementHandler = () => {
    props.onDecrement && props.onDecrement();
  };

  const incrementHandler = () => {
    props.onIncrement && props.onIncrement();
  };

  const increaseHandler = () => {
    props.onIncrement && props.onIncrease();
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{props.counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

const mapStateToProps = (state) => ({ counter: state.counter });

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "increment" }),
    onDecrement: () => dispatch({ type: "decrement" }),
    onIncrease: () => dispatch({ type: "increase", value: 10 })
  };
};

// export default Counter;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
