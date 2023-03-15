import { useState, useEffect } from "react";

export function useFetch(url) {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
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
  }, []);

  return [pokemonInfo, loading, error];
}
