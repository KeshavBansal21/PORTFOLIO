
import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <div className="nav-comps">
                < Link to="/" className="nav-comp1">Intro</Link>
                < Link to="/about" className="nav-comp2">About</Link>

            </div>
        </div>
    )
}

export default Header;