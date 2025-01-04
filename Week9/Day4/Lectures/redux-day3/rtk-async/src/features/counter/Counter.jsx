import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByNum,
  increment2nums,
  delayIncerementBy5Sec,
  delayIncrementThunk,
} from "./counterSlice";

const Counter = (props) => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  const delayFor5Sec = () => {
    setTimeout(() => {
      dispatch(incrementByNum({ num: 5 }));
    }, 5 * 1000);
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(reset())}> Reset </button>
      <div>
        <button onClick={() => dispatch(delayi())}>Increment By 5 Sec</button>
      </div>
    </>
  );
};
export default Counter;
