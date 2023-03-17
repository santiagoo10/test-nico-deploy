import "./home.css";
import { useFetchGetAllPokemons } from "../../useFetch/useFetch";
import { generateNewColor } from "../../randomColor/randomColor";
import { randomPrice } from "../../randomPrice/randomPrice";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Header } from "../header/header";
import { SearchFilters } from "../searchFilters/searchFilters";
import { ErrorAlert } from "../error/error";
import { Spinner } from "../spinner/spinner";

export function Home() {
  const [pokemonInfo, loading, error, handleAmountOfPokemons] = useFetchGetAllPokemons();

  return (
    <div className="home">
      <Header />
      <SearchFilters />

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

        <Button variant="info" onClick={handleAmountOfPokemons}>Load More</Button>

      </main>
    </div>
  );
}
