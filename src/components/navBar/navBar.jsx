import "./navBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

export function NavBar({ handleLogOut }) {
  return (
    <nav>
      <Link to={"/home"}>
        <img src="/images/pokeball.png" alt="Pokeball" />
      </Link>
      <Dropdown >
        <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ padding: '2px 8px' }}>
          Actions
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ backgroundColor: "black", color: "white" }}>
          <Dropdown.Item href="#/action-1" className="dropdownItem" style={{ color: "white" }} onClick={handleLogOut}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  )
}
