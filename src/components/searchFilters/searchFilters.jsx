import "./searchFilters.css"

export function SearchFilters({ handleSearchBar }) {

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