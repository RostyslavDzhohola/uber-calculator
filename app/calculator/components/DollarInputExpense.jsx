export default function DollarInputExpense({name}) {
  return (
    <div className="my-1">
      <div className="flex flex-col">
        <label htmlFor={name} className="ml-1 font-bold text-lg">{name}</label>
        <div className="relative">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 dark:text-black font-bold">$</span>
          <input 
            id={name} 
            className="pl-5 rounded-lg border-indigo-600 border w-full" 
            type="number"
            defaultValue="0" 
            placeholder="0" 
            name="Earnings" 
            min="0" />
        </div>
      </div>
    </div>
  )
}
