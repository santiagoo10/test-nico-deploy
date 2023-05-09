import { useRouteError } from "react-router-dom";
import { ErrorAlert } from "../components/error/error";

export function ErrorPage({ errorValue }) {
    errorValue = useRouteError()

    return (
        <main className="errorPage">
            <h1>Something is wrong...</h1>
            <ErrorAlert errorValue={errorValue.statusText || errorValue.message} />
        </main>
    )
}