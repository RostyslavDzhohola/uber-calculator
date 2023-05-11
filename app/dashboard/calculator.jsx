
export default function Calculator({ children }) {
  return (
    // TODO: Add fields for inputing data
    <div>
      <h1 className="text-5xl">Calculator</h1>
      <h2 className="text-3xl"> Input</h2>
      <div className="flex flex-col bg-white rounded-lg border-indigo-600 border">
        <label htmlFor="earnings" className="ml-2">Earnings</label>
        <div className="relative">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2">$</span>
          <input className="pl-5 rounded-lg" type="number" placeholder="0" name="Earnings"/>
        </div>
      </div>
      
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
