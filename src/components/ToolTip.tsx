export default function ToolTip({ text }: Tooltip) {
  return (
    <div
      className="md:w-64 w-40 bg-violet text-white p-4 flex flex-col justify-start text-center font-semibold rounded-md relative mb-6
			after:block after:absolute after:bg-violet after:left-12 after:w-6 after:-bottom-3 after:h-6 after:-skew-y-[45deg]"
    >
      <div>Exempel på månadskostnad</div>
      <div>{text}</div>
    </div>
  )
}

interface Tooltip {
  text: string
}
