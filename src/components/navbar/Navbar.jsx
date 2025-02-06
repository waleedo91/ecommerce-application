//  IMPORTS
import { Link } from "react-router-dom";

//  STYLE SHEETS
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <ul className="nav-bar">
        <Link to={"/"} className="nav-link">
          <li className="nav-item">Home</li>
        </Link>
        <li className="nav-item">Products</li>
      </ul>
    </div>
  );
}

export default Navbar;
