import Alert from 'react-bootstrap/Alert';

export function ErrorAlert({ errorValue }) {
    return (
        <Alert
            key="danger"
            variant="danger"
            style={{
                color: "white",
                backgroundColor: "rgba(255, 0, 0, 0.450)",
                borderColor: 'red',
                margin: '20px',
                textAlign: "center"
            }}>Error: {errorValue}</Alert>
    )
}