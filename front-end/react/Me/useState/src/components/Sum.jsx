import { useState } from "react";

export default function Sum(){
    console.log(`Sum`);
     const [sum, setSum] = useState(()=>{
      console.log(`reload call this function`);
      return 0;
     })

  function handleSum() {
    setSum((sum)=> sum + 1);
  }

  return (
    <>
      <button onClick={handleSum}></button>
      <hr></hr>
    </>
  );
}