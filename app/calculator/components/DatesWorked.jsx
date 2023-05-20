'use client'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function DatesWorked({value, onDateChange}) {
  const startDate = value.start;
  const endDate = value.end;

  const [weekRange, setWeekRange] = useState({ start: startDate, end: endDate })


  const isMonday = (date) => {
    const day = date.getDay();
    return day === 1;
  };

  const isSunday = (date) => {
    const day = date.getDay();
    return day === 0;
  };

  return (
    <div>
      <div className="grid ">
        <div className="grid">
          <label htmlFor="startDateInput" className="ml-1 font-bold text-lg">Start Date</label>
          <DatePicker 
            id="startDateInput" 
            className="pl-2 rounded-lg border-indigo-600 border" 
            selected={startDate}
            filterDate={isMonday}
            // TODO: find out why weekStartsOn is not working
            weekStartsOn={1}
            onChange={date => onDateChange({ start: date, end: value.end })}
            />
        </div>
        <div className="grid">
          <label htmlFor="endDateInput" className="ml-1 font-bold text-lg">End Date</label>
          <DatePicker 
            id="endDateInput" 
            className="pl-2 rounded-lg border-indigo-600 border" 
            selected={endDate}
            filterDate={isSunday}
            weekStartsOn={1}
            onChange={date => onDateChange({ start: value.start, end: date })}
            />
        </div>
      </div>
    </div>
  )
}
