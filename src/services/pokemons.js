import { useState, useEffect } from "react";

export function usePokemons() {
  const [limit, setLimit] = useState(20);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [controller, setController] = useState(null);

  const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`;

  // const abortController = new AbortController();

  useEffect(() => {
    // setController(abortController);
    setLoading(true);

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
        setError(err);
      })
      .finally(() => setLoading(false));

    // return () => abortController.abort();
  }, [limit]);

  function handleAmountOfPokemons() {
    setLoading(true);
    setLimit(limit + 20);
    setLoading(false);
  }

  // function handleAbortRequest() {
  //   if (controller) {
  //     controller.abort();
  //     setError("Request cancelled");
  //   }
  // }

  return [
    pokemonInfo,
    loading,
    error,
    handleAmountOfPokemons,
    // handleAbortRequest,
  ];
}
