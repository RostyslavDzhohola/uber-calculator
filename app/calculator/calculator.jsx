import DollarInpurt from "./DollarInpurt"
import TimeWorked from "./TimeWorked"
import DividerResult from "./DividerResult"

export default function Calculator({ children }) {
  return (
    <div>
      <h1 className="text-5xl bg-indigo-400 p-3 rounded-2xl">Calculator</h1>
      <h2 className="text-3xl my-2">Input fields</h2>

      <DollarInpurt name="Earnings" />
      <TimeWorked />
      <div> start and end date</div>
      <div> Togle for renting</div>
      <h2 className="text-3xl my-2">Expanses</h2>
      <DollarInpurt name="Maintenance" />
      <DollarInpurt name="Gas / Charging" />
      <DollarInpurt name="Insurance" />
      <DollarInpurt name="Tolls" />
      <DollarInpurt name="Other" />
      <div> Drop down for Location</div>
      <div> Drop down for Car</div>
      <div> Divider line</div>
      <DividerResult />
      <div> Hourly earnings</div>
      <div> Working Time</div>
      <div>Net income</div>
      <div>Total expenses</div>
      <div>Save button</div>
    </div>
  )
}
