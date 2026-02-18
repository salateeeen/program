import { useDispatch, useSelector } from "react-redux";
import { createAccount, updateName } from "./customerActionCreator";
import { useState } from "react";

function Customer() {
  const [name, setName] = useState(``);
  const [id, setId] = useState(``);

  const { Name, Id } = useSelector((store) => store.customer);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    if (!(name && id)) return;
    dispatch(createAccount(name, id));
  }
  return (
    <form>
      <div>
        <p>Name: {Name}</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <p>ID: {Id}</p>
        <input type="text" onChange={(e) => setId(e.target.value,)} />
        <span>
          <button onClick={handleClick}>submit</button>
        </span>
      </div>
    </form>
  );
}
export default Customer;
