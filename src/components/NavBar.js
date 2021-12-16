import React from 'react'
import logo from '../assets/images/logo.png';
import { useDispatch } from 'react-redux';
import { logoutIntiate } from '../redux/actions/loginRegisterActions';
export const NavBar = () => {
    const dispatch = useDispatch();
    const handleLogout=()=>{
        console.log("in handle logout");
        dispatch(logoutIntiate());
      }
    const styling={
        'background-color':'#e3f2fd'
      }
    return (
        <>
        <nav class="navbar navbar-light justify-content-between" style={styling}>
        <a href="#" class="navbar-brand">
            <img src={logo} width="60" alt="" className="d-inline-block"/>
            <span class="text-uppercase font-weight-bold">Coder's Diary</span>
        </a>
        <button type="button" className="btn btn-outline-danger"  onClick={()=>handleLogout()}>Logout</button>
        </nav> 
        </>
    )
}
