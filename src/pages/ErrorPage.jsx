import { useRouteError } from "react-router-dom";
import { ErrorAlert } from "../components/error/error";

export function ErrorPage({ errorValue }) {
    errorValue = useRouteError()

    return (
        <main style={{
            width: "100vw",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40x",
            color: "white"
        }}>
            <h1>Something is wrong...</h1>
            <ErrorAlert errorValue={errorValue.statusText || errorValue.message} />
        </main>
    )
}