import { useFirebaseContext } from "../firebase/firebaseContext";
import { Navigate } from "react-router-dom";
import { Spinner } from "./spinner/spinner";

export function ProtectedRoutes({ children }) {
    const { currentUser, firebaseLoading } = useFirebaseContext()

    if (firebaseLoading) return <Spinner />
    if (!currentUser) return <Navigate to='/' />

    return <>{children}</>
}