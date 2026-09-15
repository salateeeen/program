import { useEffect, useRef, useState } from "react";

function App() {
  let countNum = 0
  ///0
  useEffect(function() {
    console.log(countNum++);
  })
  ///1
   useEffect(function() {
    console.log(countNum++);
  })
  ///2
   useEffect(function() {
    console.log(countNum++);
  })
  //? because useEffect is synchonouns
 
  return (
    <>
      <p>countNum</p>
    </>
  );
}
export default App;
