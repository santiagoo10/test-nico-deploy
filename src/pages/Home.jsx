import { NavBar } from "../components/navBar/navBar";
import { CardsLayout } from "../components/cardsLayout/cardsLayout";
import { Footer } from "../components/footer/footer";
import { Spinner } from "../components/spinner/spinner";

import { useFirebaseContext } from "../firebase/firebaseContext";

export function HomePage() {
    const { logOut, firebaseLoading } = useFirebaseContext()

    const handleLogOut = async () => await logOut()

    return (
        <>
            {firebaseLoading ? <Spinner /> :
                <main className="cardsLayout">
                    <NavBar handleLogOut={handleLogOut} />
                    <CardsLayout />
                    <Footer />
                </main>
            }
        </>
    )
}