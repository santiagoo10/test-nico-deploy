import { useState, useEffect } from "react";

export function usePokemons() {
  const [limit, setLimit] = useState(20);
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [pokemonsLoading, setPokemonsLoading] = useState(false);
  const [pokemonsError, setPokemonsError] = useState(null);
  // const [controller, setController] = useState(null);

  const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`;

  // const abortController = new AbortController();

  useEffect(() => {
    // setController(abortController);
    setPokemonsLoading(true);

    // fetch(pokeApiUrl, { signal: abortController.signal })
    fetch(pokeApiUrl)
      .then((res) => res.json())
      .then((data) =>
        Promise.all(data.results.map((pokemon) => fetch(pokemon.url)))
      )
      .then((response) => Promise.all(response.map((res) => res.json())))
      .then((info) => {
        setPokemonInfo(info);
      })
      .catch((err) => {
        // if (err.name === "AbortError") {
        //   setError("Request cancelled");
        // }
        setPokemonsError(err);
      })
      .finally(() => setPokemonsLoading(false));

    // return () => abortController.abort();
  }, [limit]);

  function handleAmountOfPokemons() {
    setPokemonsLoading(true);
    setLimit(limit + 20);
    setPokemonsLoading(false);
  }

  // function handleAbortRequest() {
  //   if (controller) {
  //     controller.abort();
  //     setError("Request cancelled");
  //   }
  // }

  const mappedPokemonInfo = pokemonInfo?.map((pokemon) => ({
    id: pokemon.id,
    img: pokemon.sprites.front_default,
    name: pokemon.name,
  }));

  return {
    pokemonInfo: mappedPokemonInfo,
    pokemonsLoading,
    pokemonsError,
    handleAmountOfPokemons,
    // handleAbortRequest,
  };
}
