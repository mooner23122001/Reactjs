import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import UserModal from "../Modal/UserModal";

const Menu = (props) => {
    return (
        <div>
            <div className="d-flex">
                <div className="my-3">
                    <Button variant="primary" onClick={props.onAdd}>
                        Add
                    </Button>
                </div>
                <div className="my-3 px-2">
                    <Button
                        className="border-0"
                        onClick={props.onEdit}
                        disabled={props.index == null ? true : false}
                    >
                        Edit
                    </Button>
                </div>
                <div className="my-3">
                    <Button
                        className="border-0"
                        onClick={props.onDelete}
                        disabled={props.index == null ? true : false}
                    >
                        Delete
                    </Button>
                </div>
                <UserModal
                    user={props.user}
                    show={props.show}
                    closeModal={props.onAdd}
                    onSave={props.onSave}
                />
            </div>
        </div>
    );
};

export default Menu;
