import { useRef, useState } from "react";

function App() {
  const count = useRef(0)
  let countNum = 0
  const [update, setUpdate] = useState(false)


  function handleClick() {
    count.current++
    countNum++
    /// after each 5 clicks setState toggle and countNum reiniate to 0 
    if (count.current >= 5 && countNum === 5)
    setUpdate(() => !update)
  }

  return (
    <>
      <button onClick={handleClick}>+</button>
      <p>const count = useRef(0): {count.current}</p>
      <p>let countNum = 0: {countNum}</p>
    </>
  );
}
export default App;
