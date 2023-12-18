
import {Link} from "react-router-dom"

function Navbar() {
  return (

    <nav>
        <Link to="/">
            <h1>Kalvium</h1>
        </Link>
        <ul id='nav-links'>
            <Link to="/contact">
                <li>Contact</li>
            </Link>
            <Link to="/registration">
                <li>Registration Form</li>
            </Link>
        </ul>
        
    </nav>

  )
}

export default Navbar