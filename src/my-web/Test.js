import React from 'react';
import { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


const Test = () => {
    const [show, setShow] = useState(false)
    const HandleClose = () => {
        setShow(false)
    }
    const handleShow = () => {
        setShow(true)
    }
    const handleChange = () => {

    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch Form modal
            </Button>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row py-3">
                        <div className="col star">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="form-control"
                                placeholder="Enter your first name"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group pb-3">
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="form-control"
                            placeholder="Enter your last name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            name="Age"
                            className="form-control"
                            id="Age"
                            placeholder="Your Age"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={HandleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
};

export default Test;