import {useContext} from "react";

import NameContext from "./NameContext";
import { Context } from "./NameContext";


function App() {
  return (
    <NameContext>
      <Name />
    </NameContext>
  );
}

function Name() {
  const {firstName} = useContext(Context)

  return (
    <>
      <p>{firstName}</p>
      <LastName/>
    </>
  );
}

function LastName() {
  const {lastName} = useContext(Context)

  return <p>{lastName}</p>;
}

export default App;
