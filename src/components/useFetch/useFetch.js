import { useState, useEffect } from "react";

export function useFetch(url) {
  //const [loading, setLoading] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        Promise.all(data.results.map((pokemon) => fetch(pokemon.url)))
      )
      .then((response) => Promise.all(response.map((res) => res.json())))
      .then((info) => {
        setPokemonInfo(info);
      })
      .catch((err) => console.log(err));
  }, []);

  return [pokemonInfo];
}
