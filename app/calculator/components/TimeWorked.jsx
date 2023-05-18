export default function TimeWorked({hours, minutes, onChangeHours, onChangeMinutes}) {
  return (
    <div className="my-1">
      <div className="flex space-x-2 flex-wrap">
        <div className="flex flex-col ">
          <label htmlFor="hoursInput" className="ml-1 font-bold text-lg">Hours</label>
          <div className="relative">
            <input
              id="hoursInput" 
              value={hours}
              onChange={e => onChangeHours(e.target.value)}
              className="pl-2 rounded-lg border-indigo-600 border w-20" 
              pattern="[0-9]*"
              type="number"
              defaultValue="0"
              placeholder="0" 
              min="0" />
          </div>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="minutesInput" className="ml-1 font-bold text-lg">Minutes</label>
          <div className="relative">
            <input 
              id="minutesInput" 
              value={minutes}
              onChange={e => onChangeMinutes(e.target.value)}
              className="pl-2 rounded-lg border-indigo-600 border w-20" 
              pattern="[0-9]*"
              type="number"
              defaultValue="0" 
              placeholder="0" 
              min="0" 
              max="59"/>
          </div>
        </div>
      </div>
    </div>
  )
}
