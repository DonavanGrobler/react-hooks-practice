import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
const reducer = (state, action) => {
  if (action.type === ACTIONS.INCREMENT) {
    return { count: state.count + 1 };
  } else if (action.type === ACTIONS.DECREMENT) {
    return { count: state.count - 1 };
  }
};
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default UseReducerExample;
