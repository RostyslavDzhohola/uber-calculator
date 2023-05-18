// TODO: Add a react-select or downshift and Google Places Autocomplete API
export default function Location() {
  return (
    <div className="my-1">
      <label htmlFor="location" className="ml-1 font-bold text-lg block leading-6 text-gray-900">
        Location
      </label>
      <select
        id="location"
        name="location"
        className="block w-52 h-10 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 rounded-lg border-indigo-600 border"
        defaultValue="Austin"
      >
        <option>New Yourk</option>
        <option>San Francisco</option>
        <option>Chicago</option>
        <option>Austin</option>
      </select>
    </div>
  )
}
