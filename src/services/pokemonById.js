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

  //   const mappedPokemonById = pokemonById?.map((pokemon) => ({
  //     id: pokemon.id,
  //     img: pokemon.sprites.other.dream_world.front_default,
  //     name: pokemon.name,
  //     abilities: pokemon.abilities,
  //     moves: pokemon.moves,
  //     types: pokemon.types,
  //     weight: pokemon.weight,
  //     stats: pokemon.stats,
  //   }));

  return { pokemonById, pokemonByIdLoading, pokemonByIdError };
}
