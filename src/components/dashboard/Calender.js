import React from 'react'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { useState,useEffect } from 'react';
export const Calender = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    return (
        <div>
        <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        />
        </div>
    )
}
