import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Select from 'react-select'

const Test = () => {
    const [show, setShow] = useState(false);
    const handleAdd = () => {
        setShow(true);
    };

    return (
        <div>
            <div className="my-3">
                <Button variant="primary" onClick={handleAdd}>
                    Add
                </Button>
            </div>
            <Modal show={show}>
                <Form>
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
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="number"
                                name="age"
                                className="form-control"
                                id="age"
                                placeholder="Your age"
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="number"
                                id="phoneNumber"
                                name="phone"
                                className="form-control"
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">
                            Close
                        </Button>
                        <Button
                            type="submit"
                            className="btn btn-primary"
                            id="sign-up"
                        >
                            Add
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>

    );
};

export default Test;