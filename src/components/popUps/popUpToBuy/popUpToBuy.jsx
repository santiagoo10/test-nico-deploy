import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { SuccsedPurchasePopUp } from '../succeedPurchasePopUp/succeedPurchasePopUp';

import { useState } from 'react';

export function PopUpToyBuy(props) {
    const [openSuccessPopUp, setOpenSuccessPopUp] = useState(false)

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header style={{ color: "white", backgroundColor: "rgb(39, 43, 44)", borderRadius: ' 0' }} closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Confirm purchase
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ color: "white", backgroundColor: "rgb(39, 43, 44)", display: 'flex', flexDirection: 'column', gap: "24px", padding: '40px 20px' }}>
                    <h4 style={{ textAlign: 'center' }}>Are you sure you want to buy this Pokemon Ft?</h4>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: "24px" }}>
                        <Button variant='outline-light' style={{ width: "100%" }} onClick={props.onHide}>Cancel</Button>
                        <Button variant='warning' style={{ width: "100%" }} onClick={() => { props.onHide, setOpenSuccessPopUp(true) }}>Confirm</Button>
                    </div>
                </Modal.Body>
            </Modal>

            <SuccsedPurchasePopUp show={openSuccessPopUp} onHide={() => setOpenSuccessPopUp(false)} />
        </>
    );
}