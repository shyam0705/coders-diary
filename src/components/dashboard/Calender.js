import React from 'react'
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar} from '@hassanmojab/react-modern-calendar-datepicker';
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
