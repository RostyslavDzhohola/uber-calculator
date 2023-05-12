export default function Divider({name}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="text-3xl px-3 py-1 font-semibold leading-6 text-gray-900 bg-white rounded-3xl">{name}</span>
      </div>
    </div>
  )
}
