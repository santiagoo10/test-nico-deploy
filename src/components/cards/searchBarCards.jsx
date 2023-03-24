import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useRandomColor } from "../../services/randomColor";
import { useRandomPrice } from "../../services/randomPrice";


export function SearchBarCards({ searchBarResults }) {
    //const { randomColorCode } = useRandomColor()
    //const {randomPrice} = useRandomPrice()

    return (
        <>
            {searchBarResults?.map((pokemon) => (
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
                            backgroundColor: `${useRandomColor()}`,
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
                        <Card.Subtitle>{`U$$ ${useRandomPrice()}`}</Card.Subtitle>
                        <Button variant="primary">View More</Button>
                        <Button variant="warning">Buy Now</Button>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}