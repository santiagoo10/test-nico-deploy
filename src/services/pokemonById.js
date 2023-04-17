// Not working when pass the route img.
// The individualCrads.jsx component recieve the pokemonByI object,
// but when I tried to read the img on card component, the app crash.

import { useEffect, useState } from "react";

export function usePokemonId(id) {
  const [pokemonById, setPokemonById] = useState(null);
  const [pokemonByIdLoading, setPokemonByIdLoading] = useState(false);
  const [pokemonByIdError, setPokemonByIdError] = useState(null);

  useEffect(() => {
    setPokemonByIdLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemonById(data))
      .catch((err) => setPokemonByIdError(err))
      .finally(() => setPokemonByIdLoading(false));
  }, []);

  const mappedPokemonById = {
    id: pokemonById.id,
    img: pokemonById.sprites.other.dream_world.front_default,
    name: pokemonById.name,
    abilities: pokemonById.abilities,
    types: pokemonById.types,
    weight: pokemonById.wight,
    stats: pokemonById.stats,
  };

  return {
    pokemonById: mappedPokemonById,
    pokemonByIdLoading,
    pokemonByIdError,
  };
}
