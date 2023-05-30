// TODO: Car component will be expended into mor 

export default function Car({value, onChange}) {
  return (
    <div className="my-1 flex flex-col flex-shrink">
      <label htmlFor="location" className="ml-1 font-bold text-lg block  text-gray-900 dark:text-white">
        Car
      </label>
      <select
        id="location"
        name="location"
        className="block h-10 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 rounded-lg border-indigo-600 border dark:bg-zinc-300 w-full"
        defaultValue="Tesla Model 3"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option>Tesla Model 3</option>
        <option>Ford Focus </option>
        <option>Toyota Corolla</option>
        <option>Tesla Model S</option>
      </select>
    </div>
  )
}
