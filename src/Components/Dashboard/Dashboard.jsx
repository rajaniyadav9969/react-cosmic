import React from 'react'
// import Login1 from '../Login/Login1'
import { useState, createContext, useReducer } from "react";
import Login from '../Login/Login';
import Login1 from '../Login/Login1';
import SignUp from '../Login/SignUp';
import Navbar1 from './Navbar1';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const NavbarReduce = React.createContext()



const Dashboard = () => {
  
  const initialState = true
  function NavbarReducer(state, action) {
    switch (action.type) {
      case 'shownPanel':
        
        console.log(action.flag);
        return action.flag

      case 'reset':
        return initialState

      default:
        return state;
    }
  };
  // const [task, dispatch] = useReducer(NavbarReducer, initialState);
  const [task, dispatch] = useReducer(NavbarReducer, initialState);



  const [showNavbarBut, setShowNavbarBut] = useState(false)



  const getNavbarStatus = (flag) => {
    // setSignInBut(!flag)
    // setSignUpBut(flag)
  }
  const navbarFlag = createContext();
  const showNavbar = () => {
    setShowNavbarBut(false)
  }




  return (
    <div>
      {/* <UserContext.Provider NavbarReducer={NavbarReducer}> */}
      <UserContext.Provider value={{ taskState: task, navDispatch: dispatch }}>
        <Navbar1 getNavbarStatus={getNavbarStatus} />
      </UserContext.Provider>
      {task?<Login1/>:<SignUp/>}
    </div>
  )
}

export default Dashboard