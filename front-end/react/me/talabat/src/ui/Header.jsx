import { Link } from "react-router-dom"
import Search from "./Search"

function Header() {
    return (
        <header>
            <Link to={`/`}>talabat</Link>
            <Search/>
        </header>
    )
}

export default Header
