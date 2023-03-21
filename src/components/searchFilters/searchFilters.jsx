import "./searchFilters.css"
//import { useState } from "react";
//import { useFetchGetAllPokemons } from "../../useFetch/getAllPokemons";

export function SearchFilters({ handleSearchBar }) {
    // const [searchBar, setSearchBar] = useState('')
    // const { pokemons } = useFetchGetAllPokemons()

    // function handleSearchBar(e) {
    //     setSearchBar(e.target.value)
    //     pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchBar))

    // }

    return (
        <div className="inputsContainer">
            <label className="searchBar">
                <input name="searchBar" placeholder="Pikachu, Dito" onInput={handleSearchBar} />
                <img src="/images/lupa.png" alt="magnifying glass" />
            </label>

            <label className="filter">
                <select name="filter">
                    <option>A-Z</option>
                    <option>Color</option>
                </select>
            </label>
        </div>)
}