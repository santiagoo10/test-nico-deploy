import "./searchFilters.css"

export function SearchFilters({ handleSearchBar, handleAZfilterSelect }) {

    return (
        <div className="inputsContainer">
            <label className="searchBar">
                <input name="searchBar" placeholder="Pikachu, Dito" onInput={handleSearchBar} />
                <img src="/images/lupa.png" alt="magnifying glass" />
            </label>

            <label className="filter">
                <select name="filter" onChange={handleAZfilterSelect}>
                    <option value="none" disabled selected>Filter by...</option>
                    <option value="a-z">A-Z</option>
                    <option value="more expensive to cheaper">More expensive to cheaper</option>
                    <option value="cheaper to more expensive">Cheaper to more expensive</option>
                </select>
            </label>
        </div >)
}