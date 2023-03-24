import "./home.css";
import { usePokemons } from "../../services/pokemons";
import { useAllPokemons } from "../../services/allPokemons";

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

  const [pokemonInfo, loading, error, handleAmountOfPokemons] = usePokemons();
  const { pokemons } = useAllPokemons()

  function handleSearchBar(e) {
    setSearchBar(e.target.value)
    setSearchBarResults(pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchBar)))
  }

  function handleAZfilterSelect(e) {
    const optionValue = e.target.value;
    { if (optionValue === "a-z") setSelectFilterResults(pokemons.sort(handleNamesOrder)) }
  }

  function handleNamesOrder(a, b) {
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
