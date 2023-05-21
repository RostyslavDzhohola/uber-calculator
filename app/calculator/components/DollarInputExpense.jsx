export default function DollarInputExpense({name, value, onChange}) {
  const handleFocus = e => {
    if(e.target.value === "0") e.target.value = "";
  }

  return (
    <div className="my-1">
      <div className="flex flex-col">
        <label htmlFor={name} className="ml-1 font-bold text-lg">{name}</label>
        <div className="relative">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 dark:text-black font-bold">$</span>
          <input 
            id={name} 
            value={value}
            onChange={e => onChange(e.target.value)}
            onFocus={handleFocus}
            className="pl-5 rounded-lg border-indigo-600 border w-full" 
            type="number"
            pattern="[0-9]*"
            defaultValue="0" 
            placeholder="0" 
            name="Earnings" 
            min="0" />
        </div>
      </div>
    </div>
  )
}
