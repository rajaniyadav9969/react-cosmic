import React, { useState } from 'react'
import { Button,NavLink } from 'react-bootstrap';
import Header from '../Header';
import './Login.scss';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

function SignUp() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);


    const [shownSignPwd, setShownSignPwd] = useState(false);
    const signPwdVisiblity = () => {
        setShownSignPwd(shownSignPwd ? false : true);
    };

    const [repPassword, setRepPassword] = useState(false);
    const signRepPwdVisiblity = () => {
        setRepPassword(repPassword ? false : true);
    };
    

    const errors = {
        uname: "invalid username",
        pass: "invalid password",
        email: "invalid email address"
    };
    const handleSubmit = (event) => {
        // submitButtonHandler()
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    const renderForm = (

        <div className="form form-signup">
            <form onSubmit={handleSubmit} className="form-group">
                <h4 className='form-heading'>Create Account</h4>
                <div className="input-group-content">
                    <input
                        type="text"
                        name="fname"
                        placeholder="First Name"
                        className='form-control'
                        autoComplete="off"
                        required />
                </div>
                <div className="input-group-content">
                    <input
                        type="text"
                        name="lnmae"
                        placeholder="Last Name"
                        className='form-control'
                        autoComplete="off"
                        required />
                </div>
                <div className="input-group-content">
                    <input
                        type="text"
                        name="uname"
                        placeholder="Username"
                        className='form-control'
                        autoComplete="off"
                        required />
                </div>
                <div className="input-group-content">
                    <input
                        type="email"
                        name="uname"
                        placeholder="Email Address"
                        className='form-control'
                        autoComplete="off"
                        required />
                </div>

                <div className="input-group-content">
                    <input
                        type={shownSignPwd ? "text" : "password"}
                        name="pass"
                        placeholder='Password'
                        className='form-control'
                        autoComplete="off"
                        required />
                    {renderErrorMessage("pass")}
                    <i onClick={signPwdVisiblity} className="admin-pass-hide-show"> {shownSignPwd ? <BsFillEyeSlashFill className='eye-icon' /> : <BsFillEyeFill className='eye-icon' />}</i>{" "}
                </div>
                <div className="input-group-content">
                    <input
                        type={repPassword ? "text" : "password"}
                        name="pass"
                        placeholder='Confirm Password'
                        className='form-control'
                        autoComplete="off"
                        required />
                    {renderErrorMessage("pass")}
                    <i onClick={signRepPwdVisiblity} className="admin-pass-hide-show"> {repPassword ? <BsFillEyeSlashFill className='eye-icon' /> : <BsFillEyeFill className='eye-icon' />}</i>{" "}
                </div>

                <div className="input-group-content">
                    <input
                        type="text"
                        name="refcode"
                        placeholder="Reference Code(Optional)"
                        className='form-control'
                        autoComplete="off"
                        required />
                </div>

                {/* <div className="button-container">
          <input type="submit" />
        </div> */}
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="form-checkbox" />
                    <label className="form-check-label" htmlFor="form-checkbox">I agree to the  
                        <NavLink to="#!" className="term-conditions">Terms &amp; Conditions
                        </NavLink>
                    </label>
                </div>
                <div className="button-container d-grid gap-2">
                    <Button variant="primary" size="lg" type="submit" >
                        Submit
                    </Button>
                </div>
            </form>
            <div>
                <h4 className='sign-up'>Already have an account?
                    <NavLink className="sign-up-here" to="/login">
                        Sign in here
                    </NavLink>
                </h4>
            </div>
        </div>
    );
    return (
        <div className="login">
            <div className="login-form">
                {/* <NavLink className="category" to="/">
          <span> </span>
        </NavLink> */}
                {/* <div className="title">Sign In</div> */}

                {isSubmitted ? <Header /> : renderForm}
            </div>
        </div>
    );
}

export default SignUp