import React, { useState, useForm } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const UserModal = (props) => {
    
    return (

        <Modal show={props.show}>
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
    );
};

export default UserModal;