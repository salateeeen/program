import { useState } from "react";
import Avg from "./Avg";

export default function Count(){
    console.log(`Count`);
     const [count, setCount] = useState(() => {
    return 0;
  });

  function handleCount() {
    setCount((count)=> count + 1);
  }

  return (
    <>
      <button onClick={handleCount}></button>
      <div>Count={count}</div>
      <Avg count={count}/>
    </>
  );
}