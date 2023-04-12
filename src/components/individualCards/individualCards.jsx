import './individualCards.css'

import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from "react-bootstrap/Button";

import { ErrorAlert } from '../error/error';
import { Spinner } from '../spinner/spinner';

import { usePokemonId } from '../../services/pokemonById';
import { useRandomColor } from "../../services/randomColor";
import { useRandomPrice } from "../../services/randomPrice";

export function IndividualCards() {
    const { pokemonById, pokemonByIdLoading, pokemonByIdError } = usePokemonId(6)

    const img = pokemonById.sprites.other.dream_world.front_default
    const name = pokemonById.name
    const abilities = pokemonById.abilities
    const types = pokemonById.types
    const weight = pokemonById.weight
    const stats = pokemonById.stats

    return (
        <div>
            {pokemonByIdError ? <ErrorAlert errorValue={pokemonByIdError} /> : null}

            {pokemonByIdLoading ? <Spinner /> : null}

            <main >
                <Card style={{
                    width: '100%',
                    backgroundColor: "rgb(39, 43, 44)",
                    color: "white",
                    borderRadius: "10px",
                }}>
                    <Card.Img variant="top" src={img} style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                        maxHeight: "300px",
                        backgroundColor: `${useRandomColor()}`,
                        padding: "25px"
                    }} />
                    <Card.Body style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Card.Title style={{ margin: "0", textTransform: "capitalize" }}>{name}</Card.Title>
                        <Card.Title style={{ margin: "0", fontSize: "16px" }}>US$ {useRandomPrice()}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush" >
                        <ListGroup.Item style={{
                            backgroundColor: "rgb(39, 43, 44)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            textTransform: "capitalize",
                            fontSize: "16px",
                            flexWrap: "auto",

                        }}>
                            {abilities.map((pokemonAbilitie, id) => (
                                <p key={id} style={{ margin: "0" }}>{pokemonAbilitie.ability.name}</p>
                            ))}
                        </ListGroup.Item>
                        <ListGroup.Item style={{
                            backgroundColor: "rgb(39, 43, 44)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            textTransform: "capitalize",
                            fontSize: "16px",
                            flexWrap: "auto",

                        }}>
                            {types.map((pokemonType, id) => (
                                <p key={id} style={{ margin: "0" }}>{pokemonType.type.name}</p>
                            ))}
                        </ListGroup.Item>
                        <ListGroup.Item style={{
                            backgroundColor: "rgb(39, 43, 44)",
                            color: "white",
                            fontSize: "16px",
                        }}>
                            {weight} Kg
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup className="list-group-flush" >
                        {stats.map((pokemon, id) => (
                            <ListGroup.Item key={id} style={{
                                backgroundColor: "rgb(39, 43, 44)",
                                color: "white",
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px"
                            }}>
                                <p style={{ margin: "0", textTransform: "capitalize" }}>{pokemon.stat.name}</p>
                                <ProgressBar now={pokemon.base_stat} label={`${pokemon.base_stat}%`} style={{
                                    backgroundColor: "transparent",
                                    borderBlock: "1px solid black",
                                }} />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>

                <Button variant="warning" style={{
                    width: "100%",
                    position: "sticky",
                    bottom: "0"
                }}>Buy Now</Button>
            </main >
        </div>
    );
}
