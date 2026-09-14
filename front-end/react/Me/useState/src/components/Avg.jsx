import { useState } from "react";

export default function Avg({count}){
    console.log(`Avg`);
     const [avg, setAvg] = useState(0)

  function handleAvg() {
    setAvg((avg)=> avg + 1);
  }

  return (
    <>
      <button onClick={handleAvg}></button>
      <div>Avg={avg}</div>
      <div>Count={count}</div>
    </>
  );
}