import { useState, useEffect } from "react";

export function useFetchGetAllPokemons() {
  const [limit, setLimit] = useState(20);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`;

  function handleAmountOfPokemons() {
    setLimit(limit + 20);
  }

  useEffect(() => {
    setLoading(true);
    fetch(pokeApiUrl)
      .then((res) => res.json())
      .then((data) =>
        Promise.all(data.results.map((pokemon) => fetch(pokemon.url)))
      )
      .then((response) => Promise.all(response.map((res) => res.json())))
      .then((info) => {
        setPokemonInfo(info);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [limit]);

  return [pokemonInfo, loading, error, handleAmountOfPokemons];
}
