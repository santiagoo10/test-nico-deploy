import { NavBar } from "../components/navBar/navBar";
import { IndividualCards } from "../components/individualCards/individualCards";
import { Footer } from "../components/footer/footer";
import { Spinner } from "../components/spinner/spinner";
import { useFirebaseContext } from "../firebase/firebaseContext";

export function IndividualCardPage() {
    const { logOut, firebaseLoading } = useFirebaseContext()

    const handleLogOut = async () => await logOut()

    return (
        <>
            {firebaseLoading ? <Spinner /> :
                <main className="individualCards-page">
                    <NavBar handleLogOut={handleLogOut} />
                    <IndividualCards />
                    <Footer />
                </main>
            }
        </>
    )
}