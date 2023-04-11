import "./navBar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';

export function NavBar() {
  return (
    <nav>
      <img src="/images/pokeball.png" alt="Pokeball" />

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
