import './cards.css'

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useRandomColor } from "../../services/randomColor";
import { useRandomPrice } from "../../services/randomPrice";

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
                        <Card.Subtitle>{`U$$ ${useRandomPrice()}`}</Card.Subtitle>
                        <Button variant="outline-primary">View More</Button>
                        <Button variant="warning">Buy Now</Button>
                    </Card.Body>
                </Card>
            ))
            }

            <Button variant="outline-warning" style={{ marginBottom: "10px" }} onClick={handleAmountOfPokemons}>Load More</Button>
        </main >
    )
}