import headerImg from "../../images/pokemon-wallpaper.jpg"

export function Header() {
    return (
        <header className="header">
            <img src={headerImg} alt="Pokémon Banner" />
        </header>
    )
}