import React, { useContext, useEffect, useState } from "react";
import { Nav, Button, Container, Form, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Header from "../Header";
import Login1 from "../Login/Login1";
import { CountContext, UserContext } from "./Dashboard";
import './Navbar.scss'

const Navbar1 = ({ getNavbarStatus,signInBut}) => {
    const NavbarReduce = useContext(UserContext);
    const setNavbarStatus = (flag) => {
        getNavbarStatus(flag)
    }
    const showNav = false
    // const submitButtonHandler = ()=>{
    //     setShowNavBar(false)
    // }

    // const [createAccBut, setCreateAccBut] = useState(false)
    // const createInHandler = () => {
    //     setCreateAccBut(true)
    // }

    useEffect(() => {
      console.log(NavbarReduce.taskState);
    }, [])
    


    const signHandler = () => {
        NavbarReduce.navDispatch({type:"shownPanel",flag:true});
    };
    const signupHandler = () => {
        NavbarReduce.navDispatch({type:"shownPanel",flag:false});
    };

    return (
        <div className='main-page-header'>
            {NavbarReduce.taskState}
            {showNav == false ?
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="/" className='logo'>
                        <img src="/icon/Cosmic-Trades-White-Logo.png" className='responsive-img' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <ul className="d-flex button-group">
                            <li style={{ display: 'inline-block' }}>
                               
                                {/* <Nav.Link className='btn-1' onClick={signInHandler}> */}
                                <Nav.Link className='btn-1' onClick={signHandler}>
                                    Sign In
                                </Nav.Link>
                            </li>
                            <li style={{ display: 'inline-block' }} >
                                <Nav.Link className='btn-2' onClick={signupHandler} >
                                    {/* <NavLink className="btn-2" to="/signup"> */}
                                    Get Started
                                </Nav.Link>

                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Navbar>:
                <Header />
            }
            <div>
            </div>
        </div>

    );
}
export default Navbar1;