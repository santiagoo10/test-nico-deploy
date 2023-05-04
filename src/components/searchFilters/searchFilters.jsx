export function SearchFilters({ pokemons, searchBar, setSearchBar, setSearchBarResults, setSelectFilterResults }) {

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
        <div className="inputs-container">
            <form className="searchBar">
                <input name="searchBar" placeholder="Pikachu, Dito, ..." onInput={handleSearchBar} required />
                <button>
                    <img src="/images/lupa.png" alt="magnifying glass" />
                </button>
            </form>

            <label className="filter">
                <select name="filter" onChange={handleAZfilterSelect}>
                    <option value="none" disabled selected>Filter by...</option>
                    <option value="a-z">A-Z</option>
                    {/* <option value="more expensive to cheaper">More expensive to cheaper</option>
                    <option value="cheaper to more expensive">Cheaper to more expensive</option> */}
                </select>
            </label>
        </div >)
}