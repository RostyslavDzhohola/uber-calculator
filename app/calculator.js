
export default function Calculator({ children }) {
  return (
    // TODO: Add fields for inputing data
    <div>
      <h1 className="text-5xl">Calculator</h1>
      <h2 className="text-3xl"> Input</h2>
      <div>Earnings input fields</div>
      <input type="number" placeholder="$0" />
      <div> hours and minutes </div>
      <div> start and end date</div>
      <div> Togle for renting</div>
      <div>Maintenance expenses</div>
      <div>Gas/ charging expenses</div>
      <div>Insurance expenses</div>
      <div>Tols expenses</div>
      <div>Other expenses</div>
      <div> Drop down for Location</div>
      <div> Drop down for Car</div>
      <div> Divider line</div>
      <h2 className="text-3xl"> Result</h2>
      <div> Hourly earnings</div>
      <div> Working Time</div>
      <div>Net income</div>
      <div>Total expenses</div>
      <div>Save button</div>
    </div>
  )
}
