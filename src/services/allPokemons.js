import { useState, useEffect } from "react";

export function useAllPokemons() {
  const [pokemons, setPokemons] = useState(null);
  const [allPokemonsLoading, setAllPokemonsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [allPokemonsError, setAllPokemonsError] = useState(null);

  const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.`;

  useEffect(() => {
    setAllPokemonsLoading(true);

    fetch(pokeApiUrl)
      .then((res) => res.json())
      .then((data) =>
        Promise.all(data.results.map((pokemon) => fetch(pokemon.url)))
      )
      .then((response) => Promise.all(response.map((res) => res.json())))
      .then((info) => setPokemons(info))
      .catch((err) => setAllPokemonsError(JSON.stringify(err.json)))
      .finally(() => setAllPokemonsLoading(false));
  }, []);

  const mappedAllPokemons = pokemons?.map((pokemon) => ({
    id: pokemon.id,
    img: pokemon.sprites.front_default,
    name: pokemon.name,
  }));

  return {
    allPokemonsError,
    allPokemonsLoading,
    pokemons: mappedAllPokemons,
  };
}
