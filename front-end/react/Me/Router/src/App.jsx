import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Sultan from "./Sultan";
import Omar from "./Omar";
import Id from "./Id";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/sultan">
          <p>sultan</p>
        </NavLink>

        <Routes>
          <Route path="/sultan" element={<Sultan />}>
            <Route path="omar" element={<Omar />} />
            <Route path="omar/:id" element={<Id />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
