import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Link } from 'react-router-dom';

export function SuccsedPurchasePopUp(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ color: 'white', backgroundColor: "rgb(39, 43, 44)", borderRadius: '0' }} >
                <Modal.Title id="contained-modal-title-vcenter" style={{ padding: '0 24px' }}>
                    Succesfull Transaction
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: "white", backgroundColor: '#2f5e1c', display: 'flex', flexDirection: 'column', gap: "24px", padding: '40px 20px' }}>
                <h4 style={{ textAlign: 'center' }}>Thank you for your purchase</h4>

                <Link to='/home'>
                    <Button variant='warning' style={{ width: "100%" }}>See more Pokemon Ft</Button>
                </Link>

            </Modal.Body>
        </Modal>
    );
}