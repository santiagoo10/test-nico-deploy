import Alert from 'react-bootstrap/Alert';

export function ErrorAlert() {
    return (
        <Alert
            key="danger"
            variant="danger"
            style={{
                color: "WHITE",
                backgroundColor: "rgba(255, 0, 0, 0.450)",
                borderColor: 'red'
            }}>
            Error:
        </Alert>
    )
}