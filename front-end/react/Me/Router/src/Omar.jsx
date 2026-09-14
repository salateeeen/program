import { NavLink, Outlet, useNavigate } from "react-router-dom"

const id = 2231413
function Omar() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>OMAR</h1>
            <button onClick={()=>{navigate(`${id}?co=A&dig=A`)}}>ID </button> 
            <Outlet/>
        </div>
    )
}

export default Omar
