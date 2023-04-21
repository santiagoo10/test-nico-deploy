import './cards.css'

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useRandomColor } from "../../services/randomColor";
import { useRandomPrice } from "../../services/randomPrice";

import { Link } from 'react-router-dom';

export function HomeCards({ pokemonInfo, handleAmountOfPokemons }) {
    //const { randomColorCode } = useRandomColor()
    //const {randomPrice} = useRandomPrice()

    return (

        <main className="cards">
            {pokemonInfo?.map((pokemon) => (
                <Card
                    style={{
                        width: "100%",
                        backgroundColor: "rgb(39, 43, 44)",
                        color: "white",
                        borderRadius: "10px",
                    }}
                    key={pokemon.id}
                >
                    <Card.Img
                        variant="top"
                        src={pokemon.img}
                        alt={`Image of ${pokemon.name}`}
                        style={{
                            width: "100%",
                            alignSelf: "center",
                            backgroundColor: `${useRandomColor()}`,
                            borderRadius: "10px 10px 0 0",
                            padding: "25px"
                        }}
                    />
                    <Card.Body
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: "20px",
                        }}
                    >
                        <Card.Title style={{ margin: "0", textTransform: "capitalize" }}>{pokemon.name}</Card.Title>
                        <Card.Subtitle>{`USD ${useRandomPrice()}`}</Card.Subtitle>

                        <Link to={`/pokemonft/${pokemon.id}`}>
                            <Button variant="outline-primary">View More</Button>
                        </Link>
                        <Button variant="warning">Buy Now</Button>
                    </Card.Body>
                </Card>
            ))
            }

            <Button variant="outline-warning" style={{ marginBottom: "10px" }} onClick={handleAmountOfPokemons}>Load More</Button>

            {/* <Outlet /> */}
        </main >

    )
}