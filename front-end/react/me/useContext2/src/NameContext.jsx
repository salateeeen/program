import { createContext, useContext, useState } from "react";

export const Context = createContext();

function NameContext({ children }) {
  const [firstName, setFirstName] = useState(`sultan`);
  const [lastName, setLastName] = useState(`omar`);

  return (
    <Context.Provider value={{ firstName, lastName }}>
      {children}
    </Context.Provider>
  );
}

export default NameContext;
