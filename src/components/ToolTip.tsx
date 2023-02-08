export default function ToolTip({ text }: Tooltip) {
  return (
    <div
      className="w-64 h-20 bg-violet text-white p-4 flex flex-col justify-start text-center font-semibold rounded-md relative mr-5 mb-6
			before:block before:absolute before:-inset-1 before:-skew-y-[45deg] before:bg-violet before:left-12 before:w-6 before:h-12 before:top-10 before:-z-40"
    >
      <div>Exempel på månadskostnad</div>
      <div>{text}</div>
    </div>
  )
}

interface Tooltip {
  text: string
}
