import "./navBar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav>
      <Link to={"/home"}>
        <img src="/images/pokeball.png" alt="Pokeball" />
      </Link>
      <Dropdown>
        <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
          User Name
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ backgroundColor: "black", color: "white" }}>
          <Dropdown.Item href="#/action-1" style={{ color: "white" }}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  )
}
