export default function DatesWorked(props) {
  return (
    <div>
      <div className="flex space-x-2 flex-wrap">
        <div className="flex flex-col">
          <label htmlFor="startDateInput" className="ml-1 font-bold text-lg">Start Date</label>
          <input id="startDateInput" className="pl-2 rounded-lg border-indigo-600 border" type="date" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="endDateInput" className="ml-1 font-bold text-lg">End Date</label>
          <input id="endDateInput" className="pl-2 rounded-lg border-indigo-600 border" type="date" />
        </div>
      </div>
    </div>
  )
}
