import Alert from 'react-bootstrap/Alert';

export function ErrorAlert() {
    <Alert
        key="danger"
        variant="danger"
        style={{
            color: "WHITE",
            backgroundColor: "rgba(255, 0, 0, 0.450)",
            borderColor: 'red'
        }}>
        Unexpected error!:
    </Alert>
}