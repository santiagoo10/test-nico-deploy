import "./home.css";
import { useFetch } from "../../useFetch/useFetch";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Spinner } from "../spinner/spinner";
import { ErrorAlert } from "../error/error";

export function Home() {
  const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0";
  const [pokemonInfo, loading, error] = useFetch(pokeApiUrl);

  const hexaDecimalsCharacters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  function getCharacter(i) {
    return hexaDecimalsCharacters[i];
  }

  function generateNewColor() {
    let randomColorCode = "#";

    for (let i = 0; i < 6; i++) {
      const randomPosition = Math.floor(
        Math.random() * hexaDecimalsCharacters.length
      );
      randomColorCode += getCharacter(randomPosition);
    }
    return randomColorCode;
  }

  function randomPrice() {
    let price = null;

    let min = Math.ceil(0);
    let max = Math.floor(10000000);

    const generator = Math.floor(Math.random() * (max - min) + min);
    price += generator;

    let priceFormat = Intl.NumberFormat("en-US");

    let priceFormated = priceFormat.format(price);

    return priceFormated;
  }

  return (
    <>
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
        {error ? <ErrorAlert>{error}</ErrorAlert> : null}

        {loading ? <Spinner /> : null}

        {pokemonInfo?.map((pokemon) => (
          <Card
            style={{
              width: "160px",
              backgroundColor: "rgb(39, 43, 44)",
              color: "white",
              borderRadius: "10px",
            }}
            key={pokemon.id}
          >
            <Card.Img
              variant="top"
              src={pokemon.sprites.front_default}
              style={{
                width: "100%",
                alignSelf: "center",
                backgroundColor: `${generateNewColor()}`,
                borderRadius: "10px 10px 0 0",
              }}
            />
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <Card.Title style={{ margin: "0" }}>{pokemon.name}</Card.Title>
              <Card.Subtitle>{`U$$ ${randomPrice()}`}</Card.Subtitle>
              <Button variant="primary">View More</Button>
              <Button variant="warning">Buy Now</Button>
            </Card.Body>
          </Card>
        ))}
      </main>
    </>
  );
}
