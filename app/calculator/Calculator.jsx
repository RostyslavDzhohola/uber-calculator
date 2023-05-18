"use client"
import DollarInputEarnings from "./components/DollarInputEarnings"
import TimeWorked from "./components/TimeWorked"
import Divider from "./components/Divider"
import DatesWorked from "./components/DatesWorked"
import RentTogle from "./components/RentTogle"
import Location from "./components/Location"
import Car from "./components/Car"
import ResultCards from "./components/ResultCards"
import DollarInputExpense from "./components/DollarInputExpense"
import { useState } from "react";

export default function Calculator() {
  const [inputValues, setInputValues] = useState({
    uberEarnings: 0,
    otherEarnings: 0,
    hoursWorked: 0,
    minutesWorked: 0,
    datesWorked: 0,
    maintenance: 0,
    gasCharging: 0,
    insurance: 0,
    tolls: 0,
    other: 0,
    location: "Austin",
    rent: false,
  });

  console.log("uberEarnings " + inputValues.uberEarnings);
  console.log("otherEarnings " +inputValues.otherEarnings);
  console.log("hoursWorked " + inputValues.hoursWorked);
  console.log("minutesWorked " + inputValues.minutesWorked);

  return (
    <div className="">
      <h1 className="text-5xl bg-indigo-400 p-3 rounded-2xl">Calculator</h1>
      <h2 className="text-3xl my-2">Input fields</h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <DollarInputEarnings 
          name="Uber Earnings" 
          value={inputValues.uberEarnings} 
          onChange={value => setInputValues({ ...inputValues, uberEarnings: value })} />
        <DollarInputEarnings 
          name="Other Earnings" 
          value={inputValues.otherEarnings}
          onChange={value => setInputValues({ ...inputValues, otherEarnings: value })}
          />
        <TimeWorked 
          hoursWorked={inputValues.hoursWorked}
          minutesWorked={inputValues.minutesWorked}
          onChangeHours={value => setInputValues({ ...inputValues, hoursWorked: value })}
          onChangeMinutes={value => setInputValues({ ...inputValues, minutesWorked: value })}
        />
        <DatesWorked />
        <RentTogle />
      </div>
      <Divider name="Expenses"/>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <DollarInputExpense name="Maintenance" />
        <DollarInputExpense name="Gas / Charging" />
        <DollarInputExpense name="Insurance" />
        <DollarInputExpense name="Tolls" />
        <DollarInputExpense name="Other" />
        <Location />
        <Car />
      </div>
      <Divider name="Result"/>
      <ResultCards />
    </div>
  )
}
