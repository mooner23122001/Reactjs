import React, { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import UserModal from '../Modal/UserModal';

const Menu = (props) => {
    const handleAdd = () =>{
        props.setShow(true)
    }
    return (
        <div>
            <div className='d-flex'>
                <div className="my-3">
                    <Button variant="primary" onClick={handleAdd}>
                        Add
                    </Button>
                    <UserModal show = {props.show}/>
                </div>
                <div className="my-3 px-2">
                    <Button className="border-0">
                        Edit
                    </Button>
                </div>
                <div className="my-3">
                    <Button className="border-0">
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Menu;