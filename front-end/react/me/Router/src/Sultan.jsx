import { BrowserRouter, NavLink, Outlet } from "react-router-dom";

function SULTAN() {
  return (
    <div>
      <h1>SULTAN</h1>
      <NavLink to="omar">omar</NavLink>
      <Outlet />
    </div>
  );
}

export default SULTAN;
