import { useReducer} from "react";

function reduce(state, action) {
  switch(action.type){
    case `inc`:
    return {...state, count: state.count + 1}
    
    case `dec`:
    return {...state, count: state.count + action.payload}

    default:
    return new Error(`error`)
  }
}
function App() {
  const [state, dispatch] = useReducer(reduce, { count: 0, step: 1 });

  function handleInc() {
    dispatch({type: `inc`});
  }

   function handleDec() {
    dispatch({type: `dec`, payload: -1});
  }

  return (
    <>
      <button onClick={handleDec}>-</button>
      <progress max={5} value={state.count}></progress>
      <button onClick={handleInc}>+</button>
    </>
  );
}
export default App;
