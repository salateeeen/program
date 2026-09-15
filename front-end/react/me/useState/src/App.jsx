import { useState } from "react";
import Count from "./components/Count.jsx";
import Sum from "./components/Sum.jsx";

function App() {
  console.log(`App`);
  return (
    <>
      <Sum />
      <Count />
    </>
  );
}
export default App;
