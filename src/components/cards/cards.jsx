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
                <Card key={pokemon.id}>
                    <Card.Img
                        variant="top"
                        src={pokemon.img}
                        alt={`Image of ${pokemon.name}`}
                        style={{ backgroundColor: `${useRandomColor()}` }}
                    />
                    <Card.Body>
                        <div className="cards-titleSubtitle-container">
                            <Card.Title style={{ margin: "0", textTransform: "capitalize" }}>{pokemon.name}</Card.Title>
                            <Card.Subtitle>{`USD ${useRandomPrice()}`}</Card.Subtitle>
                        </div>

                        <Link to={`/pokemonft/${pokemon.id}`}>
                            <Button variant="outline-primary">View More</Button>
                        </Link>
                        {/* <Button variant="warning">Buy Now</Button> */}
                    </Card.Body>
                </Card>
            ))
            }

            <Button variant="outline-warning" onClick={handleAmountOfPokemons}>Load More</Button>

            {/* <Outlet /> */}
        </main >

    )
}