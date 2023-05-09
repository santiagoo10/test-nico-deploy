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
        <div className='container-individualCards'>
            {pokemonByIdError ? <ErrorAlert errorValue={pokemonByIdError} /> :

                pokemonByIdLoading ? <Spinner /> :

                    pokemonById ? <main className='individualCard-container'>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={pokemonById.sprites.other.dream_world.front_default}
                                alt={`Image of ${pokemonById.name}`}
                                style={{ backgroundColor: `${useRandomColor()}`, }} />

                            <Card.Body >
                                <Card.Title>{pokemonById.name}</Card.Title>
                                <Card.Title className='priceFont'>US$ {useRandomPrice()}</Card.Title>
                            </Card.Body>

                            <ListGroup className="list-group-flush" >
                                <ListGroup.Item className='items'>
                                    {pokemonById.abilities.map((pokemonAbilitie, id) => (
                                        <p key={id}>{pokemonAbilitie.ability.name}</p>
                                    ))}
                                </ListGroup.Item>
                                <ListGroup.Item className='items'>
                                    {pokemonById.types.map((pokemonType, id) => (
                                        <p key={id}>{pokemonType.type.name}</p>
                                    ))}
                                </ListGroup.Item>
                                <ListGroup.Item className='items'>
                                    {pokemonById.weight} Kg
                                </ListGroup.Item>
                            </ListGroup>

                            <ListGroup className="list-group-flush" >
                                {pokemonById.stats.map((pokemon, id) => (
                                    <ListGroup.Item key={id} className='stats'>
                                        <p>{pokemon.stat.name}</p>

                                        <ProgressBar now={pokemon.base_stat} label={`${pokemon.base_stat}%`} />
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>

                        <Button onClick={() => setOpenPopUp(true)} variant="warning" className='individualCards-buyNowButton'>Buy Now</Button>

                        <PopUpToyBuy show={openPopUp} onHide={() => setOpenPopUp(false)} />

                    </main > : <span>Something is wrong</span>
            }
        </div >
    );
}