import './individualCards.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from "react-bootstrap/Button";

export function IndividualCards() {
    return (
        <main >
            <Card style={{
                width: '100%',
                backgroundColor: "rgb(39, 43, 44)",
                color: "white",
                borderRadius: "10px",
            }}>
                <Card.Img variant="top" src="/images/pikachu.png" style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    maxHeight: "300px"
                }} />
                <Card.Body>
                    <Card.Title>Pokemon Name</Card.Title>
                    <Card.Text>
                        Some description...
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush" >
                    <ListGroup.Item style={{
                        backgroundColor: "rgb(39, 43, 44)",
                        color: "white"
                    }}>
                        Abilities
                    </ListGroup.Item>
                    <ListGroup.Item style={{
                        backgroundColor: "rgb(39, 43, 44)",
                        color: "white"
                    }}>
                        Moves
                    </ListGroup.Item>
                    <ListGroup.Item style={{
                        backgroundColor: "rgb(39, 43, 44)",
                        color: "white"
                    }}>
                        Types
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup className="list-group-flush" >
                    <ListGroup.Item style={{
                        backgroundColor: "rgb(39, 43, 44)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px"
                    }}>
                        <span>Stat name</span>
                        <ProgressBar now={40} style={{
                            backgroundColor: "transparent",
                            borderBlock: "1px solid black",
                        }} />
                    </ListGroup.Item>
                    <ListGroup.Item style={{
                        backgroundColor: "rgb(39, 43, 44)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px"
                    }}>
                        <span>Stat name</span>
                        <ProgressBar now={40} style={{
                            backgroundColor: "transparent",
                            borderBlock: "1px solid black",
                        }} />
                    </ListGroup.Item>
                    <ListGroup.Item style={{
                        backgroundColor: "rgb(39, 43, 44)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px"
                    }}>
                        <span>Stat name</span>
                        <ProgressBar now={40} style={{
                            backgroundColor: "transparent",
                            borderBlock: "1px solid black",
                        }} />
                    </ListGroup.Item>
                    <ListGroup.Item style={{
                        backgroundColor: "rgb(39, 43, 44)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px"
                    }}>
                        <span>Stat name</span>
                        <ProgressBar now={40} style={{
                            backgroundColor: "transparent",
                            borderBlock: "1px solid black",
                        }} />
                    </ListGroup.Item>
                    <ListGroup.Item style={{
                        backgroundColor: "rgb(39, 43, 44)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px"
                    }}>
                        <span>Stat name</span>
                        <ProgressBar now={40} style={{
                            backgroundColor: "transparent",
                            borderBlock: "1px solid black",
                        }} />
                    </ListGroup.Item>
                    <ListGroup.Item style={{
                        backgroundColor: "rgb(39, 43, 44)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px"
                    }}>
                        <span>Stat name</span>
                        <ProgressBar now={40} style={{
                            backgroundColor: "transparent",
                            borderBlock: "1px solid black",
                        }} />
                    </ListGroup.Item>
                </ListGroup>
            </Card>

            <Button variant="warning" style={{
                width: "100%",
                position: "sticky",
                bottom: "0"
            }}>Buy Now</Button>
        </main >
    );
}
