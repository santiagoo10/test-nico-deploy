import Alert from 'react-bootstrap/Alert';

export function ErrorAlert({ errorValue }) {
    return (
        <Alert
            variant="danger"
            style={{
                color: "white",
                backgroundColor: "rgba(255, 0, 0, 0.450)",
                borderColor: 'red',
                textAlign: "center",
                borderRadius: "5px",
                padding: "10px 20px"
            }}>Error: {errorValue}</Alert>
    )
}