import "./navBar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export function NavBar() {
  return (
    <nav>
      <img src="/images/pokeball.png" alt="Pokeball" />

      <Button variant="danger" type="button" size="sm">
        User Name
      </Button>
    </nav>
  );
}
