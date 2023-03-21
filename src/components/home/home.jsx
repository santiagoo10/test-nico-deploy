import "./home.css";
import { useFetchGetPokemons } from "../../useFetch/getPokemons";
import { useFetchGetAllPokemons } from "../../useFetch/getAllPokemons";

import { Header } from "../header/header";
import { SearchFilters } from "../searchFilters/searchFilters";
import { ErrorAlert } from "../error/error";
import { Spinner } from "../spinner/spinner";
import { HomeCards } from "../cards/homeCards";
import { SearchBarCards } from "../cards/searchBarCards";

import { useState } from "react";

export function Home() {
  const [pokemonInfo, loading, error, handleAmountOfPokemons] = useFetchGetPokemons();

  const [searchBar, setSearchBar] = useState(null)
  const [searchBarResults, setSearchBarResults] = useState()

  const { pokemons } = useFetchGetAllPokemons()

  function handleSearchBar(e) {
    setSearchBar(e.target.value)
    setSearchBarResults(pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchBar)))
  }

  return (
    <div className="home">
      <Header />
      <SearchFilters handleSearchBar={handleSearchBar} />

      <main>
        {error ? <ErrorAlert>{error}</ErrorAlert> : null}

        {loading ? <Spinner /> : null}

        {searchBar ? <SearchBarCards searchBarResults={searchBarResults} />
          : <HomeCards pokemonInfo={pokemonInfo} handleAmountOfPokemons={handleAmountOfPokemons} />}
      </main>
    </div >
  );
}
