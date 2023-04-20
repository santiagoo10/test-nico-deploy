import "./cardsLayout.css";
import { usePokemons } from "../../services/pokemons";
import { useAllPokemons } from "../../services/allPokemons";

import { useState } from "react";

import { Header } from "../header/header";
import { SearchFilters } from "../searchFilters/searchFilters";
import { ErrorAlert } from "../error/error";
import { Spinner } from "../spinner/spinner";
import { HomeCards } from "../cards/cards";

export function CardsLayout() {
  const [searchBar, setSearchBar] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [searchBarResults, setSearchBarResults] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [selectFilterResults, setSelectFilterResults] = useState(null)

  const { pokemonInfo, pokemonsLoading, pokemonsError, handleAmountOfPokemons } = usePokemons();
  // eslint-disable-next-line no-unused-vars
  const { pokemons, allPokemonsLoading, allPokemonsError } = useAllPokemons()

  return (
    <div className="cardsLayout">
      <Header />

      <SearchFilters pokemons={pokemons} searchBar={searchBar} setSearchBar={setSearchBar} setSearchBarResults={setSearchBarResults} setSelectFilterResults={setSelectFilterResults} />

      {pokemonsError ? <ErrorAlert errorValue={pokemonsError} />
        : allPokemonsError ? <ErrorAlert errorValue={allPokemonsError} /> : null}

      {pokemonsLoading ? <Spinner /> : allPokemonsLoading ? <Spinner /> : null}

      {searchBar ? <HomeCards pokemonInfo={searchBarResults} />
        : selectFilterResults ? <HomeCards pokemonInfo={selectFilterResults} />
          : pokemonInfo ? <HomeCards pokemonInfo={pokemonInfo} handleAmountOfPokemons={handleAmountOfPokemons} /> : null}

    </div >
  );
}