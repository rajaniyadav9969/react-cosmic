import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row, InputGroup } from 'react-bootstrap';
import './Admin.scss';
import { BsFillBellFill } from "react-icons/bs";
function Profile(props) {
    const [validate, setValidate] = useState(false);

    const handleOnUpdate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidate(true);
    };


    
    return (
        <div className='user-section'>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered 
                onSubmit={handleOnUpdate}
                noValidate 
                validate={validate}
            >
                {/* <Modal.Header closeButton> */}
                <Modal.Header className='main-profile-header'>
                    <Modal.Title id="contained-modal-title-vcenter" className='profile-header'>
                        <div className="header">
                            <h1>Profile - <span className='active'>Active</span></h1>
                        </div>
                        <div className="profile-btn">
                            <Button variant="danger" className='btn-sm' onClick={props.onHide}>Close</Button>
                            {/* <button onClick={props.onHide}>Close</button> */}
                            <Button variant="primary" className='btn-sm' type="submit">Update</Button>
                            {/* <button type="submit" >Update</button> */}
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {/* <Form className='profile-form' noValidate validated={validated} onSubmit={handleSubmit}> */}
                    <Form className='profile-form'>
                        <Form.Group as={Col} md="12" controlId="validationCustom01" className='focused form-group'>
                            <Form.Label>
                                <div className="img-1">
                                    <img className="profile-img" src="icon/jayesh.jpeg" alt="" />
                                    <div className='' >
                                        <span className='notification'><BsFillBellFill /></span>
                                        <span className='change-profile'>Change Profile</span>
                                        <Button variant="primary" className='btn-sm' type="submit">Update</Button>
                                    </div>
                                </div>
                            </Form.Label>
                        </Form.Group>
                        <Row className="mb-12">
                            <Form.Group as={Col} md="6" controlId="validationCustom01" className='form-group'>
                                <Form.Label>Client id</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Client id"
                                    defaultValue=""
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02" className='form-group'>
                                <Form.Label>Group Assigned</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Group Assigned"
                                    defaultValue=""
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustomUsername" className='form-group'>
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    {/* <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback> */}
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01" className='form-group'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Email address"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01" className='form-group'>
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02" className='form-group'>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom03" className='form-group'>
                                <Form.Label>Telegram Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Telegram Username"
                                    defaultValue=""
                                    required />
                                {/* <Form.Control.Feedback type="invalid">
                                    Please provide a valid Telegram Username.
                                </Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom03" className='form-group'>
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Contact Number"
                                    defaultValue=""
                                    required />
                                {/* <Form.Control.Feedback type="invalid">
                                    Please provide a valid Contact Number.
                                </Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom03" className='form-group'>
                                <Form.Label>Parent</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Parent"
                                    defaultValue=""
                                    required />
                                {/* <Form.Control.Feedback type="invalid">
                                    Please provide a valid Parent.
                                </Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom03" className='form-group'>
                                <Form.Label>Role</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Role"
                                    defaultValue=""
                                    required />
                                {/* <Form.Control.Feedback type="invalid">
                                    Please provide a valid Role.
                                </Form.Control.Feedback> */}
                            </Form.Group>

                        </Row>

                        {/* <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button> */}
                    </Form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>

        </div>
    )
}

export default Profile





