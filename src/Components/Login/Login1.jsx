import React, { useState } from 'react'
import { Button, NavLink } from 'react-bootstrap';
import Header from '../Header';
import './Login.scss';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
function Login1(props) {
  // temp = ()=>{
  //   props.signInHandler(false)
  // } 
  // useEffect(() => {
  //   temp()
  // }, [])
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [shownPassword, setShownPassword] = useState(false);
  const toggleUserPasswordVisiblity = () => {
    setShownPassword(shownPassword ? false : true);
  };
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const database = [
    {
      username: "jayesh",
      password: "Admin@123"
    },
    {
      username: "Visal",
      password: "Admin@123"
    }
  ];

  
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info

    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <div>
  {/* <MainPage /> */}
      <div className="form">

        <form onSubmit={handleSubmit} className="form-group">
          <h4 className='form-heading'>Sign In</h4>
          <div className="input-group-content">
            <input type="text"
              name="uname"
              placeholder="username"
              className='form-control'
              required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-group-content">
            <input
              type={shownPassword ? "text" : "password"}
              name="pass"
              placeholder="password"
              className='form-control'
              required />
            {renderErrorMessage("pass")}
            <i onClick={toggleUserPasswordVisiblity} className="admin-pass-hide-show"> {shownPassword ? <BsFillEyeSlashFill className='eye-icon' /> : <BsFillEyeFill className='eye-icon' />}</i>{" "}
          </div>
          <div>
            <NavLink className="forgot-password" to="/">
              Forgot Password?
            </NavLink>
          </div>
          <div className="button-container d-grid gap-2">
            <Button variant="primary" size="lg" type="submit" >
              Sign In
            </Button>
          </div>
        </form>
        <div>
          <h4 className='sign-up'>Don't have an account?
            <NavLink className="sign-up-here" to="/signup">
              Sign up here
            </NavLink>
          </h4>
        </div>
      </div>
    </div>
  );
  return (
    <div className="login">
      <div className="login-form">


        {/* <div className="title">Sign In</div> */}
        {isSubmitted ? <Header /> : renderForm}
      </div>
    </div>
  );
}

export default Login1

// import React from 'react'

// function Login1() {
//   return (
//     <div style={{color: '#fff'}}>Login1</div>
//   )
// }

// export default Login1