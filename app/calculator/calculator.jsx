import DollarInput from "./DollarInput"
import TimeWorked from "./TimeWorked"
import Divider from "./Divider"
import DatesWorked from "./DatesWorked"
import RentTogle from "./RentTogle"

export default function Calculator({ children }) {
  return (
    <div>
      <h1 className="text-5xl bg-indigo-400 p-3 rounded-2xl">Calculator</h1>
      <h2 className="text-3xl my-2">Input fields</h2>

      <DollarInput name="Earnings" />
      <TimeWorked />
      <DatesWorked />
      <RentTogle />
      <Divider name="Expanses"/>
      <DollarInput name="Maintenance" />
      <DollarInput name="Gas / Charging" />
      <DollarInput name="Insurance" />
      <DollarInput name="Tolls" />
      <DollarInput name="Other" />
      <div> Drop down for Location</div>
      <div> Drop down for Car</div>
      <div> Divider line</div>
      <Divider name="Result"/>
      <div> Hourly earnings</div>
      <div> Working Time</div>
      <div>Net income</div>
      <div>Total expenses</div>
      <div>Save button</div>
    </div>
  )
}
