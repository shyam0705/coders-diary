import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { useDispatch } from "react-redux";
import { logoutIntiate } from "../../redux/actions/loginRegisterActions";
export const Calender = () => {
  const dispatch = useDispatch();
  const [selectedDay, setSelectedDay] = useState(null);
  const handleLogout=()=>{
    console.log("in handle logout");
    dispatch(logoutIntiate());
  }
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
      />
    </>
  );

}
