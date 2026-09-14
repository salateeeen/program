import Account from "./Features/Account/Account";
import Customer from "./Features/Customer/Customer";
import { useSelector } from "react-redux";

function App() {
  const { Name } = useSelector((store) => store.customer);

  return <>
  {!Name ? 
  <Customer /> : 
  <Account/>}</>;
}

export default App;
