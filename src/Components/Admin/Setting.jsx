import React, { useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import './Admin.scss';
import { RiCloseFill } from "react-icons/ri";
import { BsKeyFill, BsFillBellFill } from "react-icons/bs";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import { BsVolumeUpFill, BsFillKeyboardFill, BsLockFill } from "react-icons/bs";
import { RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
function Setting(props) {
    // const [isChecked, setIsChecked] = useState(false);

    // const handleOnChange = () => {
    //     setIsChecked(!isChecked);
    // };
    return (
        <Modal className='user-setting'
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='general-setting'>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="setting-header ">
                        <h5>General Settings</h5>
                    </div>
                </Modal.Title>
                <RiCloseFill onClick={props.onHide} className="close-btn" />
            </Modal.Header>
            <Modal.Body>
                <div className="row form-change-password">
                    <div className="col-md-5 ">
                        <div className='telegram'>
                            <Checkbox
                                // checked={true}
                                icon={
                                    <div
                                        style={{
                                            // display: "flex",
                                            // flex: 1,
                                            backgroundColor: "#0d6efd",
                                            // alignSelf: "stretch",
                                        }}
                                    >
                                        <Icon.FiCheck color="white" size={15} />

                                    </div>
                                }
                                borderColor="#474848"
                                style={{ overflow: "hidden", backgroundColor: '#fff' }}
                                size={15}
                                borderRadius={3}
                                borderWidth={1}
                            // label="Telegram Notification"

                            />
                            <label className='icon-2'>
                                <BsFillBellFill style={{ marginRight: '3px', marginBottom: '1px'}} />
                                Telegram Notification
                            </label>
                        </div>
                        <div className='telegram'>
                            <Checkbox
                                // checked={true}
                                icon={
                                    <div
                                        style={{
                                            // display: "flex",
                                            // flex: 1,
                                            backgroundColor: "#0d6efd",
                                            // alignSelf: "stretch",
                                        }}
                                    >
                                        <Icon.FiCheck color="white" size={15} />

                                    </div>
                                }
                                borderColor="#474848"
                                style={{ overflow: "hidden", backgroundColor: '#fff' }}
                                size={15}
                                borderRadius={3}
                                borderWidth={1}
                            // label="Telegram Notification"

                            />
                            <label className='icon-2'>
                                <BsVolumeUpFill style={{ marginRight: '3px', marginBottom: '2px', transform: 'scale(1.2)'}} />
                                Sound Alert
                            </label>
                        </div>
                        <div className='telegram'>
                            <Checkbox
                                // checked={true}
                                icon={
                                    <div
                                        style={{
                                            // display: "flex",
                                            // flex: 1,
                                            backgroundColor: "#0d6efd",
                                            // alignSelf: "stretch",
                                        }}
                                    >
                                        <Icon.FiCheck color="white" size={15} />

                                    </div>
                                }
                                borderColor="#474848"
                                style={{ overflow: "hidden", backgroundColor: '#fff' }}
                                size={15}
                                borderRadius={3}
                                borderWidth={1}
                            // label="Telegram Notification"

                            />
                            <label className='icon-2'>
                                <BsFillKeyboardFill style={{ marginRight: '5px', marginBottom: '1px', transform: 'scale(1.2)' }} />
                                Keyboard Trade
                            </label>
                        </div>
                        <div className='telegram'>
                            <Checkbox
                                // checked={true}
                                icon={
                                    <div
                                        style={{
                                            // display: "flex",
                                            // flex: 1,
                                            backgroundColor: "#0d6efd",
                                            // alignSelf: "stretch",
                                        }}
                                    >
                                        <Icon.FiCheck color="white" size={15} />

                                    </div>
                                }
                                borderColor="#474848"
                                style={{ overflow: "hidden", backgroundColor: '#fff', marginTop:'1px' }}
                                size={15}
                                borderRadius={3}
                                borderWidth={1}
                            // label="Telegram Notification"

                            />
                            <label className='icon-2'>
                                <RiCheckboxCircleFill style={{ marginRight: '3px', marginBottom: '3px', transform: 'scale(1.2)' }} />
                                Trade Confirmation Box
                            </label>
                        </div>
                        <div className='telegram'>
                            <Checkbox
                                // checked={true}
                                icon={
                                    <div
                                        style={{
                                            // display: "flex",
                                            // flex: 1,
                                            backgroundColor: "#0d6efd",
                                            // alignSelf: "stretch",
                                        }}
                                    >
                                        <Icon.FiCheck color="white" size={15} />
                                    </div>
                                }
                                borderColor="#474848"
                                style={{ overflow: "hidden", backgroundColor: '#fff', marginTop:'1px' }}
                                size={15}
                                borderRadius={3}
                                borderWidth={1}
                            // label="Telegram Notification"

                            />
                            <label className='icon-2'>
                                <RiCloseCircleFill style={{ marginRight: '3px', marginBottom: '3px', transform: 'scale(1.2)' }} />
                                Cancel Confirmation Box
                            </label>
                        </div>
                        <div className='telegram'>
                            <Checkbox
                                // checked={true}
                                icon={
                                    <div
                                        style={{
                                            // display: "flex",
                                            // flex: 1,
                                            backgroundColor: "#0d6efd",
                                            // alignSelf: "stretch",
                                        }}
                                    >
                                        <Icon.FiCheck color="white" size={15} />

                                    </div>
                                }
                                borderColor="#474848"
                                style={{ overflow: "hidden", backgroundColor: '#fff', marginTop:'3px' }}
                                size={15}
                                borderRadius={3}
                                borderWidth={1}
                            // label="Telegram Notification"

                            />
                            <label className='icon-2'>
                                <BsLockFill style={{ marginRight: '4px', marginBottom: '5px', transform: 'scale(1.2)' }} />                              
                                2Factor Auth Confirmation Box
                            </label>
                        </div>
                        <div className='telegram'>
                            <Checkbox
                                // checked={true}
                                icon={
                                    <div
                                        style={{
                                            // display: "flex",
                                            // flex: 1,
                                            backgroundColor: "#0d6efd",
                                            // alignSelf: "stretch",
                                        }}
                                    >
                                        <Icon.FiCheck color="white" size={15} />

                                    </div>
                                }
                                borderColor="#474848"
                                style={{ overflow: "hidden", backgroundColor: '#fff', marginTop:'3px' }}
                                size={15}
                                borderRadius={3}
                                borderWidth={1}
                            // label="Telegram Notification"

                            />
                            <label className='icon-2'>
                                <BsLockFill style={{ marginRight: '3px', marginBottom: '5px', transform: 'scale(1.2)' }} />
                                Mask Balance
                            </label>
                        </div>
                        <div className='telegram'>
                            <Checkbox
                                // checked={true}
                                icon={
                                    <div
                                        style={{
                                            // display: "flex",
                                            // flex: 1,
                                            backgroundColor: "#0d6efd",
                                            // alignSelf: "stretch",
                                        }}
                                    >
                                        <Icon.FiCheck color="white" size={15} />

                                    </div>
                                }
                                borderColor="#474848"
                                style={{ overflow: "hidden", backgroundColor: '#fff', marginTop:'3px' }}
                                size={15}
                                borderRadius={3}
                                borderWidth={1}

                            // label="Telegram Notification"

                            />
                            <label className='icon-2'>
                                <BsLockFill style={{ marginRight: '3px', marginBottom: '5px', transform: 'scale(1.2)' }} />
                                Hide Graph
                            </label>
                        </div>


                    </div>
                    <div className="col-md-4">
                        <div className="">
                            <label>Select Audio For</label>
                            <select name="" id="" className="form-control form-select" aria-label="Default select example">
                                <option value="Success">Success</option>
                                <option value="Error">Error</option>
                            </select>
                            {/* <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select> */}
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <label>Audio Type</label>
                            <select name="" id="" className="form-control form-select" aria-label="Default select example">
                                <option value="Success"> default_error.wav</option>
                                <option value="Error">old_telephone.mp3</option>
                                <option value="Error">sound_effects.mp3</option>
                                <option value="Error">default_success.wav</option>
                                <option value="Error">tennesse_whiskey.mp3</option>
                            </select>
                        </div>
                        <div>
                            <label>Default Trade Type </label>
                            <select name="" id="" className="form-control form-select" aria-label="Default select example">
                                <option value="Success">Market</option>
                                <option value="Error">Limit</option>
                            </select>
                        </div>

                    </div>
                    <div className="col-md-1" style={{marginTop:'25.3px'}}>
                        <Button variant="primary" style={{padding:' 5px 10px'}}><BsVolumeUpFill className='zoom'/></Button>
                    </div>
                </div>


                {/* <form className="form-change-password">
                    <div>

                    </div>
                    <label>Current password</label>
                    <input component="input"
                        name="currentPassword"
                        type="password"
                        placeholder="Current Password"
                        required="required"
                        className="form-control"
                    />
                    <label>New password</label>
                    <input component="input"
                        name="newPassword"
                        type="password"
                        placeholder="New Password"
                        required="required"
                        className="form-control"
                    />
                    <label>Confirm password</label>
                    <input component="input"
                        name="newPasswordRepeated"
                        type="password"
                        placeholder="New Password Repeated"
                        required="required"
                        className="form-control"
                    />


                </form> */}
                {/* <form>
                    <input name="password" type="password" className="form-control" placeholder="Password" value={password} onChange={this.handleChange} onBlur={this.handlePasswordBlur} />
                    {passwordError
                        ? <div className="alert alert-danger mt-2">Password is a required field.</div>
                        : ''
                    }
                </form> */}
            </Modal.Body>

            <Modal.Footer>
                <a href="http://"><FiEdit /> Update</a>
                {/* <Button>Update</Button> */}
            </Modal.Footer>
        </Modal>
    );
}
export default Setting;


