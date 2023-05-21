import { ErrorAlert } from "../components/error/error";

export function ErrorPage({ errorValue }) {
    return (
        <main className="errorPage">
            <h1>Something is wrong...</h1>
            <ErrorAlert errorValue={errorValue} />
        </main>
    )
}