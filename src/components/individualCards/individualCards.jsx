import './individualCards.css'

import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from "react-bootstrap/Button";

import { ErrorAlert } from '../error/error';
import { Spinner } from '../spinner/spinner';
import { PopUpToyBuy } from '../popUps/popUpToBuy/popUpToBuy';

// import { usePokemonId } from '../../services/pokemonById';
import { useRandomColor } from "../../services/randomColor";
import { useRandomPrice } from "../../services/randomPrice";

export function IndividualCards() {
    // const { pokemonById, pokemonByIdLoading, pokemonByIdError } = usePokemonId(id)

    const [pokemonById, setPokemonById] = useState(null);
    const [pokemonByIdLoading, setPokemonByIdLoading] = useState(false);
    const [pokemonByIdError, setPokemonByIdError] = useState(null);

    const [openPopUp, setOpenPopUp] = useState(false)

    // eslint-disable-next-line no-unused-vars
    function usePokemonId(id) {
        useEffect(() => {
            setPokemonByIdLoading(true);
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((res) => res.json())
                .then((data) => setPokemonById(data))
                .catch((err) => setPokemonByIdError(err))
                .finally(() => setPokemonByIdLoading(false));
        }, []);
    }

    const { id } = useParams()

    usePokemonId(id)

    return (
        <div>
            {pokemonByIdError ? <ErrorAlert errorValue={pokemonByIdError} /> :

                pokemonByIdLoading ? <Spinner /> :

                    pokemonById ? <main >
                        <Card style={{
                            width: '100%',
                            backgroundColor: "rgb(39, 43, 44)",
                            color: "white",
                            borderRadius: "10px",
                        }}>
                            <Card.Img
                                variant="top"
                                src={pokemonById.sprites.other.dream_world.front_default}
                                alt={`Image of ${pokemonById.name}`}
                                style={{
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                    maxHeight: "300px",
                                    backgroundColor: `${useRandomColor()}`,
                                    padding: "25px"
                                }} />
                            <Card.Body style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <Card.Title style={{ margin: "0", textTransform: "capitalize" }}>{pokemonById.name}</Card.Title>
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
                                    {pokemonById.abilities.map((pokemonAbilitie, id) => (
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
                                    {pokemonById.types.map((pokemonType, id) => (
                                        <p key={id} style={{ margin: "0" }}>{pokemonType.type.name}</p>
                                    ))}
                                </ListGroup.Item>
                                <ListGroup.Item style={{
                                    backgroundColor: "rgb(39, 43, 44)",
                                    color: "white",
                                    fontSize: "16px",
                                }}>
                                    {pokemonById.weight} Kg
                                </ListGroup.Item>
                            </ListGroup>

                            <ListGroup className="list-group-flush" >
                                {pokemonById.stats.map((pokemon, id) => (
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

                        <Button onClick={() => setOpenPopUp(true)} variant="warning" style={{
                            width: "100%",
                            position: "sticky",
                            bottom: "0"
                        }}>Buy Now</Button>

                        <PopUpToyBuy show={openPopUp} onHide={() => setOpenPopUp(false)} />

                    </main > : "404"}
        </div>
    );
}