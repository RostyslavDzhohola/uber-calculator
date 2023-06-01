"use client";
import DollarInputEarnings from "./DollarInputEarnings";
import TimeWorked from "./TimeWorked";
import Divider from "./Divider";
import DatesWorked from "./DatesWorked";
import RentTogle from "./RentTogle";
import Location from "./Location";
import Car from "./Car";
import ResultCards from "./ResultCards";
import DollarInputExpense from "./DollarInputExpense";
import { useEffect, useState } from "react";

export default function Calculator() {
  const [inputValues, setInputValues] = useState({
    uberEarnings: 0,
    otherEarnings: 0,
    hoursWorked: 0,
    minutesWorked: 0,
    datesWorked: { start: new Date(), end: new Date() },
    maintenance: 0,
    rental: 0,
    gasCharging: 0,
    insurance: 0,
    tolls: 0,
    other: 0,
    location: "Austin",
    rent: false,
  });

  const [resultValues, setResultValues] = useState({
    grossEarnings: 0, // how to make default value to be 0?
    netEarnings: 0,
    grossHourly: 0,
    netHourly: 0,
    expenses: 0,
    timeWorked: 0,
  });

  const calculate = () => {
    const grossEarnings = inputValues.uberEarnings + inputValues.otherEarnings;
    const timeWorked =
      Number(inputValues.hoursWorked) + Number(inputValues.minutesWorked) / 60;
    const grossHourly = grossEarnings ? grossEarnings / timeWorked : 0;
    const expenses =
      inputValues.maintenance +
      inputValues.gasCharging +
      inputValues.insurance +
      inputValues.tolls +
      inputValues.other +
      inputValues.rental;
    const netEarnings = grossEarnings - expenses;
    const netHourly =
      netEarnings !== 0 &&
      netEarnings !== undefined &&
      netEarnings >= 0 &&
      timeWorked !== 0
        ? netEarnings / timeWorked
        : 0;
    setResultValues({
      grossEarnings: grossEarnings,
      netEarnings: netEarnings,
      grossHourly: Number(grossHourly.toFixed(2)),
      netHourly: Number(netHourly.toFixed(2)),
      expenses: expenses,
      timeWorked: timeWorked ? Number(timeWorked.toFixed(2)) : 0,
    });
  };

  useEffect(() => calculate(), [inputValues]);

  // console.log(
  //   "uberEarnings " + inputValues.uberEarnings +
  //   "\notherEarnings " + inputValues.otherEarnings +
  //   "\nhoursWorked " + inputValues.hoursWorked +
  //   "\nminutesWorked " + inputValues.minutesWorked +
  //   "\ndatesWorked " + JSON.stringify(inputValues.datesWorked) +
  //   "\nmaintenance " + inputValues.maintenance +
  //   "\ngasCharging " + inputValues.gasCharging +
  //   "\ninsurance " + inputValues.insurance +
  //   "\ntolls " + inputValues.tolls +
  //   "\nother " + inputValues.other +
  //   "\ncar " + inputValues.car +
  //   "\nlocation " + inputValues.location
  // );

  // console.log(
  //   "grossEarnings " + resultValues.grossEarnings +
  //   "\nnetEarnings " + resultValues.netEarnings +
  //   "\ngrossHourly " + resultValues.grossHourly +
  //   "\nnetHourly " + resultValues.netHourly +
  //   "\nexpenses " + resultValues.expenses +
  //   "\ntimeWorked " + resultValues.timeWorked
  // )

  return (
    <div className="">
      {/* <h1 className="text-5xl bg-indigo-400 p-3 rounded-2xl">Calculator</h1> */}
      <h2 className="text-3xl my-2">Input fields</h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <DollarInputEarnings
          name="Uber Earnings"
          value={inputValues.uberEarnings}
          onChange={(value) =>
            setInputValues({ ...inputValues, uberEarnings: Number(value) })
          }
        />
        <DollarInputEarnings
          name="Other Earnings"
          value={inputValues.otherEarnings}
          onChange={(value) =>
            setInputValues({ ...inputValues, otherEarnings: Number(value) })
          }
        />
        <TimeWorked
          hoursWorked={inputValues.hoursWorked}
          minutesWorked={inputValues.minutesWorked}
          onChangeHours={(value) =>
            setInputValues({ ...inputValues, hoursWorked: Number(value) })
          }
          onChangeMinutes={(value) =>
            setInputValues({ ...inputValues, minutesWorked: Number(value) })
          }
        />
        <DatesWorked
          value={inputValues.datesWorked}
          onDateChange={(value) =>
            setInputValues({ ...inputValues, datesWorked: value })
          }
        />
        <RentTogle
          value={inputValues.rent}
          onTogleChange={(value) =>
            setInputValues({ ...inputValues, rent: value })
          }
        />
      </div>
      <Divider name="Expenses" />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {!inputValues.rent ? (
          <>
            <DollarInputExpense
              name="Maintenance"
              value={inputValues.maintenance}
              onChange={(value) =>
                setInputValues({ ...inputValues, maintenance: Number(value) })
              }
            />
            <DollarInputExpense
              name="Insurance"
              value={inputValues.insurance}
              onChange={(value) =>
                setInputValues({ ...inputValues, insurance: Number(value) })
              }
            />
          </>
        ) : (
          <DollarInputExpense
            name="Rental"
            value={inputValues.rental}
            onChange={(value) =>
              setInputValues({ ...inputValues, rental: Number(value) })
            }
          />
        )}
        <DollarInputExpense
          name="Gas / Charging"
          value={inputValues.gasCharging}
          onChange={(value) =>
            setInputValues({ ...inputValues, gasCharging: Number(value) })
          }
        />
        <DollarInputExpense
          name="Tolls"
          value={inputValues.tolls}
          onChange={(value) =>
            setInputValues({ ...inputValues, tolls: Number(value) })
          }
        />
        <DollarInputExpense
          name="Other"
          value={inputValues.other}
          onChange={(value) =>
            setInputValues({ ...inputValues, other: Number(value) })
          }
        />
        <Car
          value={inputValues.car}
          onChange={(value) => setInputValues({ ...inputValues, car: value })}
        />
        <Location
          value={inputValues.location}
          onChange={(value) =>
            setInputValues({ ...inputValues, location: value })
          }
        />
      </div>
      <Divider name="Result" />
      <ResultCards value={resultValues} />
      <button className="bg-green-500 hover:scale-110 p-1 mt-2" >Submit</button>
    </div>
  );
}
