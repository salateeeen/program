import { useReducer} from "react";

function reduce(state, action) {
  console.log(state, action);
  ///return object for next state and overRide the updated fields
  return {...state, count: state.count + action};
}

function App() {
  const [state, dispatch] = useReducer(reduce, { count: 0, step: 1 });
  
  function handleClick() {
    dispatch(1);
  }

  return (
    <>
      <button onClick={handleClick}>+</button>
      <p>{state.count}</p>
    </>
  );
}
export default App;
