import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutIntiate } from "../../redux/actions/loginRegisterActions";
import { Calender } from "./Calender";
export const DashBoard = () => {
  const dispatch = useDispatch();
  
  const handleLogout=()=>{
    console.log("in handle logout");
    dispatch(logoutIntiate());
  }
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      <Calender/>
    </>
  );

}
