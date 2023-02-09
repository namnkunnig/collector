export default function ToolTip({ text }: Tooltip) {
  return (
    <div
      className="md:w-64 w-40 bg-violet text-white p-4 flex flex-col justify-start text-center font-semibold rounded-md relative mb-6
			after:block after:absolute after:-inset-1 after:-skew-y-[45deg] after:bg-violet after:left-12 after:w-6 after:h-12 after:top-16 md:after:top-10 after:-z-40"
    >
      <div>Exempel på månadskostnad</div>
      <div>{text}</div>
    </div>
  )
}

interface Tooltip {
  text: string
}
