import { useState } from "react";

function Name({name}) {
  const [update, setUpdate] = useState(() => {
    console.log(`mount`)
    return false
  })

  return (
    <p>{name}</p>
  )
}

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(()=> count+1)
  }

  return (
    <>
      <button onClick={handleClick}>X</button>
      {/* with key mount and unmount without key just update the states and props */}
      {count < 3 ? <Name name={`sultan`} key={1}/> :<Name name={`omar`} key={2}/>}
    </>
  );
}
export default App;
