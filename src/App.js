import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const pokeApiUrl = "https://pokeapi.co/api/v2";

  fetch(`${pokeApiUrl}/ability/1`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  function Home() {
    return (
      <>
        <nav>
          <img src="/images/pokeball.png" alt="Pokeball" />

          <Button variant="danger" type="button" size="sm">
            User Name
          </Button>
        </nav>

        <header>
          <img src="/images/pokemon-wallpaper.jpg" alt="Pokémon Team" />
        </header>

        <div className="inputsContainer">
          <label className="searchBar">
            <input name="searchBar" placeholder="Pikachu" />
            <img src="/images/lupa.png" alt="magnifying glass" />
          </label>

          <label className="filter">
            <select name="filter">
              <option>A-Z</option>
              <option>Color</option>
            </select>
          </label>
        </div>

        <main>
          <Card
            style={{
              maxWidth: "250px",
              backgroundColor: "rgb(35, 38, 40)",
              color: "white",
            }}
          >
            <Card.Img
              variant="top"
              src="/images/pokeball.png"
              style={{ width: "200px", alignSelf: "center" }}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </main>

        <footer>
          <img src="/images/pokemon.png" alt="Pokemon" />

          <ul>
            <li>
              <img src="/images/instagram.svg" alt="Instagram" />
            </li>
            <li>
              <img src="/images/tiktok.svg" alt="Tik Tok" />
            </li>
            <li>
              <img src="/images/twitter.svg" alt="Twitter" />
            </li>
            <li>
              <img src="/images/discord.svg" alt="Discord" />
            </li>
          </ul>
        </footer>
      </>
    );
  }

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
