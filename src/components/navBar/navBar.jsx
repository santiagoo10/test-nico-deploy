import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';

import { Link } from "react-router-dom";

import pokeballImg from "../../images/pokeball.png"

export function NavBar({ handleLogOut }) {
  return (
    <nav className="navBar">
      <Link to={"/home"}>
        <img src={pokeballImg} alt="Pokeball" />
      </Link>

      <Dropdown >
        <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ padding: '2px 8px' }}>
          Actions
        </Dropdown.Toggle>

        <Dropdown.Menu >
          <Dropdown.Item href="#/action-1" onClick={handleLogOut}>Logout</Dropdown.Item>
        </Dropdown.Menu>

      </Dropdown>
    </nav>
  )
}
