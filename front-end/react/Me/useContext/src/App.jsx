import { createContext, useContext, useState } from "react";

const NameContext = createContext() 

function App() {
  return (
    <NameContext.Provider value={{fistName: "sultan", lastName: "omar"}}>
      <Name />
    </NameContext.Provider>
  );
}

function Name({ name }) {
  /// consumer
  const {fistName} = useContext(NameContext)
  return (
    <>
      <p>{fistName}</p>
      <LastName/>
    </>
  );
}

function LastName({ name }) {
  /// consumer
  const {lastName} = useContext(NameContext)
  return <p>{lastName}</p>;
}

export default App;
