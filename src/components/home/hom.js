import "./home.css";
import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function Home() {
  const pokeApiUrl = "https://pokeapi.co/api/v2";
  const [pokemonInfo, setPokemonInfo] = useState([]);
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

  //function getAllPokemon() {
  //   .catch((error) => console.log(error));
  //}

  useEffect(() => {
    //getAllPokemon();

    fetch(`${pokeApiUrl}/pokemon/?limit=10&offset=0`)
      .then((res) => res.json())
      .then((data) =>
        Promise.all(data.results.map((pokemon) => fetch(pokemon.url)))
      )
      .then((response) => Promise.all(response.map((res) => res.json())))
      .then((info) => {
        setPokemonInfo(info);
      })
      .catch((err) => console.log(err));
  }, []);

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

    return price;
  }

  console.log(randomPrice());

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
        {pokemonInfo.map((pokemon) => (
          <Card
            style={{
              width: "200px",
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
