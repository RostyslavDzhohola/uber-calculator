import DollarInputEarnings from "./components/DollarInputExpense"
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
  return (
    <div>
      <h1 className="text-5xl bg-indigo-400 p-3 rounded-2xl">Calculator</h1>
      <h2 className="text-3xl my-2">Input fields</h2>
      <div className="grid grid-cols-2">
        <DollarInputEarnings name="Uber Earnings" />
        <DollarInputEarnings name="Other Earnings" />
        <TimeWorked />
        <DatesWorked />
        <RentTogle />
      </div>
      <Divider name="Expenses"/>
      <div className="grid grid-cols-2">
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
