export default function DividerResult() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="text-2xl px-3 font-semibold leading-6 text-gray-900">Result</span>
      </div>
    </div>
  )
}
