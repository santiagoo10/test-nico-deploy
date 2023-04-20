import { NavBar } from "../components/navBar/navBar";
import { CardsLayout } from "../components/cardsLayout/cardsLayout";
import { Footer } from "../components/footer/footer";

export function HomePage() {
    return (
        <div style={{ maxWidth: "100vw", minHeight: "100vh" }}>
            <NavBar />
            <CardsLayout />
            <Footer />
        </div>
    )
}