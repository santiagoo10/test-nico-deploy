import "./home.css";
import { useFetchGetPokemons } from "../../useFetch/getPokemons";
import { useFetchGetAllPokemons } from "../../useFetch/getAllPokemons";

import { Header } from "../header/header";
import { SearchFilters } from "../searchFilters/searchFilters";
import { ErrorAlert } from "../error/error";
import { Spinner } from "../spinner/spinner";
import { HomeCards } from "../cards/homeCards";
import { SearchBarCards } from "../cards/searchBarCards";
import { SelectFilterCards } from "../cards/selectFilterCards";

import { useState } from "react";

export function Home() {

  const [searchBar, setSearchBar] = useState(null)
  const [searchBarResults, setSearchBarResults] = useState(null)
  const [selectFilterResults, setSelectFilterResults] = useState(null)

  const [pokemonInfo, loading, error, handleAmountOfPokemons] = useFetchGetPokemons();
  const { pokemons } = useFetchGetAllPokemons()

  function handleSearchBar(e) {
    setSearchBar(e.target.value)
    setSearchBarResults(pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchBar)))
  }

  function handleAZfilterSelect(e) {
    const optionValue = e.target.value;
    { if (optionValue === "a-z") setSelectFilterResults(pokemons.sort(handlePokemonsArray)) }
  }

  function handlePokemonsArray(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  return (
    <div className="home">
      <Header />
      <SearchFilters handleSearchBar={handleSearchBar} handleAZfilterSelect={handleAZfilterSelect} />

      <main>
        {error ? <ErrorAlert>{error}</ErrorAlert> : null}

        {loading ? <Spinner /> : null}

        {searchBar ? <SearchBarCards searchBarResults={searchBarResults} />
          :
          selectFilterResults ? <SelectFilterCards selectFilterResults={selectFilterResults} />
            :
            <HomeCards pokemonInfo={pokemonInfo} handleAmountOfPokemons={handleAmountOfPokemons} />}

      </main>
    </div >
  );
}
