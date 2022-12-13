import React from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const UserModal = (props) => {
    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    for (const [key, value] of Object.entries(props.user)) {
        setValue(key, value)
    }
    const onSubmit = (e) => {
        props.onSave(e);
    };
    return (
        <Modal show={props.show}>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                                // defaultValue={props.user.firstName}
                                className="form-control"
                                placeholder="Enter your first name"
                                {...register("firstName", { required: true, maxLength: 15 })}
                            />
                        </div>
                    </div>
                    {errors.firstName && (
                        <p className="text-danger">Please check the First Name</p>
                    )}
                    <div className="form-group pb-3">
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            // defaultValue={props.user.lastName}
                            className="form-control"
                            placeholder="Enter your last name"
                            {...register("lastName", { required: true, maxLength: 15 })}
                        />
                    </div>
                    {errors.lastName && (
                        <p className="text-danger">Please check the Last Name</p>
                    )}
                    <div className="form-group pb-3">
                        <input
                            type="number"
                            name="age"
                            // defaultValue={props.user.age}
                            className="form-control"
                            id="age"
                            placeholder="Your age"
                            {...register("age", { required: true, maxLength: 3 })}
                        />
                        {errors.age && <p className="text-danger">Please enter your age</p>}

                    </div>
                    <div className="form-group pb-3">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("gender", { required: true })}
                        >
                            <option value="">Choose gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    {errors.gender && <p className="text-danger">Choose your gender</p>}
                    <div className="form-group pb-3">
                        <input
                            type="number"
                            id="phoneNumber"
                            name="phone"
                            // defaultValue={props.user.phone}
                            className="form-control"
                            placeholder="Enter your phone number"
                            {...register("phone", { required: true, maxLength: 15 })}
                        />
                    </div>
                    {errors.phone && (
                        <p className="text-danger">Please enter your phone number</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeModal}>
                        Close
                    </Button>
                    <Button type="submit" className="btn btn-primary" id="sign-up">
                        Add
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default UserModal;
