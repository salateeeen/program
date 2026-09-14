import { useDispatch, useSelector } from "react-redux";
import { createAccount, updateName } from "./customerActionCreator";
import { useState } from "react";
import { getCustomer } from "./customerReducer";
import { fetchPosition } from "../Account/accountSlice";

function Customer() {
  const [name, setName] = useState(``);
  const [id, setId] = useState(``);

  const dispatch = useDispatch();

  const { Name, Id } = useSelector(getCustomer);

  function handleSubmit(e) {
    e.preventDefault();
    if (!(name && id)) return;
    dispatch(createAccount(name, id));
  }
  function handleClick(e) {
    e.preventDefault();
    dispatch(fetchPosition());
  }
  const { position } = useSelector((state) => state.account.position);
  console.log(position);

  return (
    <form>
      <div>
        <p>Name: {Name}</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <p>ID: {Id}</p>
        <input type="text" onChange={(e) => setId(e.target.value)} />
        <span>
          <button onClick={handleSubmit}>submit</button>
          <button onClick={handleClick}>click</button>
        </span>
      </div>
    </form>
  );
}
export default Customer;
