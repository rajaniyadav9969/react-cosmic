import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal, Nav, Navbar, NavDropdown, Overlay, Popover, PopoverBody, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss'

import { BsKeyFill, BsFillBellFill } from "react-icons/bs";
import { IoMdPerson, IoMdSettings } from "react-icons/io";
import { ImSwitch } from "react-icons/im";
import { AiOutlineFileText } from "react-icons/ai";
import { CgMaximize } from "react-icons/cg";
import { ChangePwd, Profile } from '../Admin';
import Setting from '../Admin/Setting';
import Report from '../Admin/Report';


import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css'
import { FiCalendar } from "react-icons/fi";
import Login from '../Login/Login';
// import { BsFillCalendarFill } from "react-icons/bs";
const Header = () => {
    // const [completed, setCompleted] = useState(0);
    // useEffect(() => {
    //     setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    // }, []);


    const [profileShow, setProfileShow] = useState(false);//profile

    const [changeShow, setChangeShow] = useState(false);//change pwd

    const [setting, setSetting] = useState(false)// setting

    const [report, setReport] = useState(false) //report and statement

    const [logout, setLogOut] = useState(false) //report and statement

    const [selectedDate, setSelectedDate] = useState(null) //date

    //notification
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const logout1 = (e) => {
        console.log("Logging out")
    }

//  const  logout=()=> {
//         // localStorage.clear();
//         window.location.href = '../Login';
//     }


    return (
        <div className='main-header'>

            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/" className='logo'>
                    <img src="/icon/Cosmic-Trades-White-Logo.png" className='responsive-img' alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='navbar-nav'>
                    <div className='main-content'>
                        <div className="content">
                            <h3 className='text-header'>Margin INR: <span className='nav-label'>0 &#8377;</span></h3>
                            <h3 className='text-header'>Avai. Margin INR : <span className='nav-label'>0 &#8377;</span></h3>
                            {/* <ProgressBar bgcolor={"#6a1b9a"} completed={completed} /> */}
                            <ProgressBar now={100} />
                        </div>

                        <div className="content">
                            <h3 className='text-header'>Margin USD: <span className='nav-label'> 42,18,412 $</span></h3>
                            <h3 className='text-header'>Avai. Margin USD :<span className='nav-label'> 21,00,001 $</span></h3>
                            <ProgressBar>
                                <ProgressBar animated variant="success" now={50} key={1} />
                                <ProgressBar animated variant="white" now={50} key={2} />
                            </ProgressBar>
                        </div>
                    </div>


                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav> */}
                    <Nav className="menubar">
                        <Nav.Link className='notification' >
                            <CgMaximize />
                        </Nav.Link>
                        <Nav.Link className='notification' ref={ref}>
                            <BsFillBellFill onClick={handleClick}></BsFillBellFill>
                            <Overlay
                                show={show}
                                target={target}
                                placement="bottom"
                                container={ref}
                                containerPadding={20}
                            >
                                <Popover id="popover-contained">
                                    <Popover.Header as="h3"> No Notifications</Popover.Header>
                                    <Popover.Body>
                                        <strong>Notifications</strong>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>

                        </Nav.Link>
                        <div className="dashboard-tab ">
                            <NavDropdown title=
                                {
                                    <span className="img-1">
                                        <img className="avatar-img" src="icon/jayesh.jpeg" alt="" />
                                    </span>
                                }
                                id="collasible-nav-dropdown" className="nav-item">
                                <NavDropdown.Item>
                                    <div className="menu">
                                        <div className="dropdown-header">
                                            <div className="header">
                                                <img className="avatar-img1" src="icon/jayesh.jpeg" alt="" />
                                            </div>
                                            <div className="info">
                                                <p className="name"> ADMIN</p>
                                                <p className="email"> 6</p>

                                            </div>
                                        </div>
                                        <div className="dropdown-body">
                                            <ul className="list-inline">

                                                <li className="inline-item">

                                                    <NavDropdown.Item className="single-item" to="/" onClick={() => setProfileShow(true)}>
                                                        <IoMdPerson />
                                                        {/* <span className="" to="/" onClick={setModalShow(true)}>Profile</span> */}
                                                        <span className=''>
                                                            Profile
                                                        </span>

                                                    </NavDropdown.Item>
                                                    <Profile
                                                        show={profileShow}
                                                        onHide={() => setProfileShow(false)}
                                                    />

                                                </li>
                                                <li className="inline-item">
                                                    <NavDropdown.Item className="single-item" to="/" onClick={() => setChangeShow(true)}>
                                                        <BsKeyFill />
                                                        <span>Change Password</span>

                                                    </NavDropdown.Item>
                                                    {/* small error */}
                                                    <ChangePwd
                                                        show={changeShow}
                                                        onHide={() => setChangeShow(false)}
                                                    />

                                                </li>
                                                <li className="inline-item">
                                                    <NavDropdown.Item className="single-item" to="/" onClick={() => setSetting(true)}>
                                                        <IoMdSettings />
                                                        <span to="/">Settings</span>
                                                    </NavDropdown.Item>

                                                    <Setting
                                                        show={setting}
                                                        onHide={() => setSetting(false)}
                                                    />
                                                </li>
                                                <li className="inline-item">
                                                    <NavDropdown.Item className="single-item" to="/" onClick={() => setReport(true)}>
                                                        <AiOutlineFileText />
                                                        <span to="/">Report/Statement</span>
                                                    </NavDropdown.Item>
                                                    <Report
                                                        show={report}
                                                        onHide={() => setReport(false)}
                                                    />
                                                </li>
                                                <li className="inline-item">
                                                    <NavDropdown.Item className="single-item log-out" to="/"  onClick={() => setLogOut(true)}>
                                                        <ImSwitch />
                                                        
                                                        <span to="/" onClick={logout1}>Log Out</span>
                                                    </NavDropdown.Item>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>

                    {/* 
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
            {/* <div>
                <div className=""  style={{color: '#fff'}}>
                    
                    <span style={{ color: "white" }}>
                        </span>{selectedDate ? selectedDate.toDateString() : "     "}
                    <div className="" >
                        <DatePicker
                            placeholderText='Start date'
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat="yyyy/MM/dd"
                            filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                            customInput={<FiCalendar />}
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown
                        />
                    </div>
                </div>
               
            </div> */}
        </div>
    )
}


export default Header