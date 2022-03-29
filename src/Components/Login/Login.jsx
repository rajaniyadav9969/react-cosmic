// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState()

//   const handleSubmit = async e => {

//   };

// // if there's a user show the message below
//   if (user) {
//     return <div>{user.name} is loggged in</div>;
//   }

//   // if there's no user, show the login form
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="username">Username: </label>
//       <input
//         type="text"
//         value={username}
//         placeholder="enter a username"
//         onChange={({ target }) => setUsername(target.value)}
//       />
//       <div>
//         <label htmlFor="password">password: </label>
//         <input
//           type="password"
//           value={password}
//           placeholder="enter a password"
//           onChange={({ target }) => setPassword(target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;
import React, { useState } from 'react'
import { Button, NavLink } from 'react-bootstrap';
import Header from '../Header';
import './Login.scss';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

function Login() {
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
    // submitButtonHandler()
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

    <div className="form ">
      <form onSubmit={handleSubmit} className="form-group">
        <h4 className='form-heading'>Sign In</h4>
        <div className="input-group-content">
          {/* <label>Username </label> */}
          <input
            type="text"
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
            placeholder='password'
            className='form-control'
            required />
          {renderErrorMessage("pass")}
          <i onClick={toggleUserPasswordVisiblity} className="admin-pass-hide-show"> {shownPassword ?  <BsFillEyeSlashFill className='eye-icon' />:<BsFillEyeFill className='eye-icon' />}</i>{" "}
        </div>

        {/* <div className="button-container">
          <input type="submit" />
        </div> */}
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
          <NavLink className="sign-up-here" to="/news">
            <span> Sign up here</span>
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

export default Login